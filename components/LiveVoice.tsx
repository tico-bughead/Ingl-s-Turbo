import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality, Blob } from '@google/genai';
import { Mic, MicOff, Volume2, Radio, Loader2, AlertTriangle, CheckCircle, MessageSquare } from 'lucide-react';
import { checkPronunciation } from '../services/geminiService'; // Re-using for structure, but we'll do a custom call here

interface LiveVoiceProps {
  onBack: () => void;
}

interface ConversationTurn {
  role: 'user' | 'model';
  text: string;
}

interface SessionFeedback {
  score: number;
  strengths: string;
  improvements: string;
}

const LiveVoice: React.FC<LiveVoiceProps> = ({ onBack }) => {
  // Connection State
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [status, setStatus] = useState("Ready to start");
  const [error, setError] = useState<string | null>(null);
  
  // Audio Visuals
  const [volume, setVolume] = useState(0);

  // Transcript & Feedback State
  const [transcript, setTranscript] = useState<ConversationTurn[]>([]);
  const [feedback, setFeedback] = useState<SessionFeedback | null>(null);
  const [isGeneratingFeedback, setIsGeneratingFeedback] = useState(false);

  // Refs for Audio & Streams
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const nextStartTimeRef = useRef<number>(0);
  
  // Temporary Transcript Buffers
  const currentInputTransRef = useRef('');
  const currentOutputTransRef = useRef('');

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupAudio();
    };
  }, []);

  const cleanupAudio = () => {
    processorRef.current?.disconnect();
    sourceRef.current?.disconnect();
    
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
    }
    
    inputAudioContextRef.current?.close();
    outputAudioContextRef.current?.close();
    
    activeSourcesRef.current.forEach(src => src.stop());
    activeSourcesRef.current.clear();
  };

  /**
   * Converts Float32Array (Web Audio API standard) to Int16Array (PCM standard for Gemini)
   * This is critical for clear audio.
   */
  const createBlob = (data: Float32Array): Blob => {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
      // Clamp values between -1 and 1 before converting to PCM-16
      const clamped = Math.max(-1, Math.min(1, data[i]));
      int16[i] = clamped * 32768;
    }
    
    // Encode to base64
    let binary = '';
    const bytes = new Uint8Array(int16.buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64 = btoa(binary);

    return {
      data: base64,
      mimeType: 'audio/pcm;rate=16000',
    };
  };

  const decodeAudioData = async (
    base64String: string,
    ctx: AudioContext,
    sampleRate: number = 24000
  ): Promise<AudioBuffer> => {
    const binaryString = atob(base64String);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    
    const dataInt16 = new Int16Array(bytes.buffer);
    const frameCount = dataInt16.length; 
    const buffer = ctx.createBuffer(1, frameCount, sampleRate);
    const channelData = buffer.getChannelData(0);
    
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i] / 32768.0;
    }
    
    return buffer;
  };

  const connect = async () => {
    setError(null);
    setFeedback(null);
    setTranscript([]);
    setIsConnecting(true);
    setStatus("Requesting microphone access...");

    try {
      // 1. Get Microphone Stream
      // Important: Requesting audio opens the permission prompt
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });
      mediaStreamRef.current = stream;

      // 2. Setup Audio Contexts
      // Input MUST be 16kHz for Gemini Native Audio to work correctly without complex resampling
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      // Output MUST be 24kHz to match Gemini's output
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      inputAudioContextRef.current = inputCtx;
      outputAudioContextRef.current = outputCtx;

      // Resume contexts (browsers sometimes suspend them until user gesture)
      await inputCtx.resume();
      await outputCtx.resume();

      setStatus("Connecting to AI...");
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            setStatus("Connected! Say 'Hello'!");
            setIsConnected(true);
            setIsConnecting(false);

            // 3. Start Audio Processing Loop
            const source = inputCtx.createMediaStreamSource(stream);
            sourceRef.current = source;
            
            // Buffer size 4096 provides a good balance of latency vs stability
            const processor = inputCtx.createScriptProcessor(4096, 1, 1);
            processorRef.current = processor;

            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              
              // Visualize volume
              let sum = 0;
              for(let i = 0; i < inputData.length; i++) sum += inputData[i] * inputData[i];
              const rms = Math.sqrt(sum / inputData.length);
              setVolume(Math.min(rms * 10, 1)); 

              // Send to Gemini
              const pcmBlob = createBlob(inputData);
              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(processor);
            processor.connect(inputCtx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            // A. Handle Audio Output
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            
            if (base64Audio && outputAudioContextRef.current) {
              const ctx = outputAudioContextRef.current;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              
              const audioBuffer = await decodeAudioData(base64Audio, ctx);
              const source = ctx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(ctx.destination);
              
              source.addEventListener('ended', () => {
                activeSourcesRef.current.delete(source);
              });

              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              activeSourcesRef.current.add(source);
            }

            // B. Handle Interruption
            if (message.serverContent?.interrupted) {
              activeSourcesRef.current.forEach(src => src.stop());
              activeSourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }

            // C. Handle Transcription for Feedback
            if (message.serverContent?.outputTranscription) {
               currentOutputTransRef.current += message.serverContent.outputTranscription.text;
            }
            if (message.serverContent?.inputTranscription) {
               currentInputTransRef.current += message.serverContent.inputTranscription.text;
            }
            
            if (message.serverContent?.turnComplete) {
               const userText = currentInputTransRef.current;
               const modelText = currentOutputTransRef.current;
               
               if (userText || modelText) {
                 setTranscript(prev => [
                   ...prev, 
                   { role: 'user', text: userText }, 
                   { role: 'model', text: modelText }
                 ]);
               }
               currentInputTransRef.current = '';
               currentOutputTransRef.current = '';
            }
          },
          onclose: () => {
            setIsConnected(false);
            setIsConnecting(false);
          },
          onerror: (e) => {
            console.error(e);
            setError("Connection error. Please try again.");
            setIsConnected(false);
            setIsConnecting(false);
            cleanupAudio();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          // Enable transcription so we can give feedback later
          inputAudioTranscription: { model: 'gemini-2.5-flash' }, 
          outputAudioTranscription: { model: 'gemini-2.5-flash' },
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
          systemInstruction: "You are 'Turbo', a friendly English tutor. Speak clearly and simply. Correct the user's grammar if they make a mistake, but be encouraging. Keep your responses short (max 2 sentences) to keep the conversation flowing.",
        },
      });

    } catch (err: any) {
      console.error(err);
      setIsConnecting(false);
      cleanupAudio();
      
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setError("Microphone permission denied. Please allow microphone access in your browser settings to use this feature.");
      } else if (err.name === 'NotFoundError') {
        setError("No microphone found. Please connect a microphone.");
      } else {
        setError(`Could not connect: ${err.message || 'Unknown error'}`);
      }
    }
  };

  const disconnectAndGenerateFeedback = async () => {
    // 1. Stop Audio
    cleanupAudio();
    setIsConnected(false);
    setStatus("Disconnected");
    setVolume(0);

    // 2. Generate Feedback if we have a conversation
    if (transcript.length > 0) {
      setIsGeneratingFeedback(true);
      await generateSessionFeedback();
    }
  };

  const generateSessionFeedback = async () => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const conversationLog = transcript.map(t => `${t.role.toUpperCase()}: ${t.text}`).join('\n');
      
      const prompt = `
        Analyze this conversation between a Portuguese student and an AI Tutor:
        
        ${conversationLog}
        
        Provide feedback in JSON format:
        {
          "score": number (0-100 based on effort and clarity),
          "strengths": "string (One sentence on what they did well in Portuguese)",
          "improvements": "string (One sentence on what to improve in Portuguese)"
        }
      `;

      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });
      
      if (result.response.text) {
        setFeedback(JSON.parse(result.response.text));
      }
    } catch (e) {
      console.error("Feedback generation failed", e);
    } finally {
      setIsGeneratingFeedback(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto flex flex-col items-center justify-center min-h-[60vh] animate-fadeIn pb-12">
      
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 text-center relative overflow-hidden w-full transition-all">
        
        {/* Background Animation */}
        {isConnected && (
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100 transition-all duration-75 ease-out -z-10"
            style={{
              width: `${200 + volume * 150}px`,
              height: `${200 + volume * 150}px`,
              opacity: 0.6
            }}
          />
        )}

        <div className="flex flex-col items-center gap-6 z-10">
          {/* Status Icon */}
          <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 ${
            isConnected 
              ? 'bg-indigo-600 shadow-lg shadow-indigo-300 scale-110' 
              : error 
                ? 'bg-red-100' 
                : 'bg-slate-100'
          }`}>
            {isConnecting ? (
              <Loader2 size={48} className="text-indigo-600 animate-spin" />
            ) : isConnected ? (
              <Radio size={48} className="text-white animate-pulse" />
            ) : error ? (
              <AlertTriangle size={48} className="text-red-500" />
            ) : (
              <MicOff size={48} className="text-slate-400" />
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {isConnected ? "Conversation Active" : "Live Conversation"}
            </h2>
            <p className={`text-sm font-medium transition-colors ${error ? 'text-red-500' : isConnected ? 'text-indigo-600' : 'text-slate-500'}`}>
              {error || status}
            </p>
          </div>

          {/* Controls */}
          {!isConnected ? (
            <button 
              onClick={connect}
              disabled={isConnecting}
              className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 shadow-lg shadow-indigo-200"
            >
              <Mic size={20} />
              {isConnecting ? "Connecting..." : "Start Speaking"}
            </button>
          ) : (
            <button 
              onClick={disconnectAndGenerateFeedback}
              className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-200 px-8 py-4 rounded-full font-bold hover:bg-red-100 transition-all shadow-sm"
            >
              <MicOff size={20} />
              End Call
            </button>
          )}

          {/* Tips */}
          {!isConnected && !feedback && (
            <div className="mt-4 p-4 bg-slate-50 rounded-xl text-xs text-slate-500 w-full">
              <p className="flex items-center justify-center gap-2 mb-1 font-semibold text-slate-700">
                <Volume2 size={14} />
                <span>Headphones Recommended</span>
              </p>
              Use headphones to prevent the AI from hearing itself (echo).
            </div>
          )}
        </div>
      </div>

      {/* Feedback Section */}
      {(isGeneratingFeedback || feedback) && (
        <div className="mt-8 w-full animate-fadeInUp">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
             <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700">
                   <MessageSquare size={20} />
                </div>
                <h3 className="font-bold text-lg text-slate-800">Session Feedback</h3>
             </div>

             {isGeneratingFeedback ? (
               <div className="flex flex-col items-center py-6 text-slate-500">
                  <Loader2 size={32} className="animate-spin text-indigo-600 mb-2" />
                  <p>Analyzing your conversation...</p>
               </div>
             ) : feedback ? (
               <div className="space-y-4">
                  <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl">
                    <span className="font-semibold text-slate-700">Conversation Score</span>
                    <div className={`text-2xl font-bold ${feedback.score > 70 ? 'text-green-600' : 'text-amber-600'}`}>
                      {feedback.score}/100
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                      <h4 className="text-green-800 font-bold text-sm mb-1 flex items-center gap-1">
                        <CheckCircle size={14} /> Strengths
                      </h4>
                      <p className="text-green-700 text-sm">{feedback.strengths}</p>
                    </div>
                    <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                      <h4 className="text-amber-800 font-bold text-sm mb-1 flex items-center gap-1">
                        <AlertTriangle size={14} /> To Improve
                      </h4>
                      <p className="text-amber-700 text-sm">{feedback.improvements}</p>
                    </div>
                  </div>
               </div>
             ) : null}
          </div>
        </div>
      )}

      <button onClick={onBack} className="mt-8 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors">
        ← Back to Units
      </button>
    </div>
  );
};

export default LiveVoice;