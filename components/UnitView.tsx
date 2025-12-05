import React, { useState, useRef } from 'react';
import { GeneratedUnitContent, UnitDefinition, BrickType, PronunciationResult } from '../types';
import { Volume2, MessageCircle, BookOpen, CheckCircle, HelpCircle, Loader2, Play, Layers, Mic, Square, Send, AlertCircle } from 'lucide-react';
import { checkPronunciation } from '../services/geminiService';

interface UnitViewProps {
  unitDef: UnitDefinition;
  content: GeneratedUnitContent;
  onBack: () => void;
  onComplete: () => void;
  bookColor: string;
}

const SectionHeader: React.FC<{ icon: React.ElementType, title: string, colorClass: string }> = ({ icon: Icon, title, colorClass }) => (
  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200 break-inside-avoid">
    <div className={`p-2 rounded-lg ${colorClass} bg-opacity-10 text-slate-700`}>
      <Icon className={`w-6 h-6 ${colorClass.replace('bg-', 'text-')}`} />
    </div>
    <h2 className="text-2xl font-bold text-slate-800 serif">{title}</h2>
  </div>
);

// Map English API types to Portuguese display labels
const BRICK_TRANSLATIONS: Record<string, string> = {
  subject: 'Sujeito',
  verb: 'Verbo',
  auxiliary: 'Auxiliar',
  object: 'Objeto',
  adjective: 'Adjetivo',
  adverb: 'Advérbio',
  preposition: 'Preposição',
  conjunction: 'Conjunção',
  pronoun: 'Pronome',
  noun: 'Substantivo',
  article: 'Artigo',
  determiner: 'Determinante',
  question_word: 'Interrogativo',
  other: 'Outro'
};

const getBrickStyles = (type: BrickType) => {
  switch (type) {
    case 'subject': 
    case 'noun':
    case 'pronoun':
      return 'bg-blue-100 text-blue-800 border-blue-300';
    
    case 'verb': 
      return 'bg-red-100 text-red-800 border-red-300';
    
    case 'auxiliary': 
    case 'question_word':
      return 'bg-amber-100 text-amber-800 border-amber-300';
    
    case 'object': 
      return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    
    case 'adjective': 
    case 'adverb':
      return 'bg-purple-100 text-purple-800 border-purple-300';
    
    case 'preposition':
    case 'conjunction':
      return 'bg-orange-100 text-orange-800 border-orange-300';
      
    case 'article':
    case 'determiner':
      return 'bg-cyan-100 text-cyan-800 border-cyan-300';

    default: return 'bg-slate-100 text-slate-800 border-slate-300';
  }
};

const getBrickLabel = (type: BrickType): string => {
  return BRICK_TRANSLATIONS[type] || type;
};

const UnitView: React.FC<UnitViewProps> = ({ unitDef, content, onBack, onComplete, bookColor }) => {
  const [quizAnswers, setQuizAnswers] = useState<number[]>(new Array(content.quiz.length).fill(-1));
  const [showExplanation, setShowExplanation] = useState<boolean[]>(new Array(content.quiz.length).fill(false));

  // Speak & Repeat State
  const [activeSpeakIndex, setActiveSpeakIndex] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingError, setRecordingError] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [pronunciationResult, setPronunciationResult] = useState<PronunciationResult | null>(null);
  const [isCheckingPronunciation, setIsCheckingPronunciation] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const handleQuizSelect = (qIndex: number, optionIndex: number) => {
    if (quizAnswers[qIndex] !== -1) return; // Prevent changing after selection
    const newAnswers = [...quizAnswers];
    newAnswers[qIndex] = optionIndex;
    setQuizAnswers(newAnswers);
    
    const newExplanations = [...showExplanation];
    newExplanations[qIndex] = true;
    setShowExplanation(newExplanations);
  };

  const handlePlayAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  // Recording Logic
  const startRecording = async (index: number) => {
    try {
      setActiveSpeakIndex(index);
      setAudioBlob(null);
      setPronunciationResult(null);
      setRecordingError(null);
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Determine mime type
      let mimeType = 'audio/webm';
      if (MediaRecorder.isTypeSupported('audio/webm')) mimeType = 'audio/webm';
      else if (MediaRecorder.isTypeSupported('audio/mp4')) mimeType = 'audio/mp4'; // Safari
      
      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType });
        setAudioBlob(blob);
        // Stop all tracks to release mic
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err: any) {
      console.error("Error accessing microphone:", err);
      setIsRecording(false);
      
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setRecordingError("Permission denied. Please click the lock icon in your browser address bar to allow microphone access.");
      } else if (err.name === 'NotFoundError') {
        setRecordingError("No microphone found. Please connect a microphone.");
      } else {
        setRecordingError("Could not access microphone. Please check your system settings.");
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const submitForFeedback = async (phrase: string) => {
    if (!audioBlob) return;
    setIsCheckingPronunciation(true);
    setRecordingError(null);
    
    try {
      // Convert Blob to Base64
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        // Remove data URL prefix (e.g., "data:audio/webm;base64,")
        const base64Content = base64data.split(',')[1];
        const mimeType = base64data.split(';')[0].split(':')[1];
        
        try {
          const result = await checkPronunciation(base64Content, phrase, mimeType);
          setPronunciationResult(result);
        } catch (error) {
           console.error("Feedback failed", error);
           setPronunciationResult({
             score: 0,
             feedback: "Connection error. Please try again.",
             strengths: "",
             improvements: ""
           });
        }
        setIsCheckingPronunciation(false);
      };
    } catch (err) {
      console.error(err);
      setIsCheckingPronunciation(false);
      setRecordingError("Failed to process audio.");
    }
  };

  // Extract color based on Tailwind class name usually passed like 'bg-amber-500'
  const accentColorText = bookColor.replace('bg-', 'text-');

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn pb-20">
      {/* Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
        >
          ← Back to Unit List
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mb-8 relative overflow-hidden break-inside-avoid">
        <div className={`absolute top-0 left-0 w-2 h-full ${bookColor}`}></div>
        <div className="relative z-10">
          <span className={`inline-block px-3 py-1 rounded-full bg-slate-100 text-xs font-bold uppercase tracking-wide text-slate-600 mb-3`}>
            Unit {unitDef.number}
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 serif tracking-tight">{unitDef.title}</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            {content.introText}
          </p>
        </div>
      </div>

      {/* Vocabulary */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8 break-inside-avoid">
        <SectionHeader icon={BookOpen} title="Vocabulary" colorClass={bookColor} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.vocabulary.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 group break-inside-avoid">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                   <span className="text-lg font-bold text-slate-900">{item.word}</span>
                   <button 
                      onClick={() => handlePlayAudio(item.word)}
                      className="p-1 rounded-full text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all opacity-0 group-hover:opacity-100"
                   >
                     <Volume2 size={16} />
                   </button>
                </div>
                <span className="text-sm font-medium text-slate-500 italic bg-white px-2 py-0.5 rounded border border-slate-100 shadow-sm">{item.translation}</span>
              </div>
              <p className={`text-sm ${accentColorText} mb-1 font-medium`}>{item.example}</p>
              <p className="text-xs text-slate-500">{item.exampleMeaning}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Grammar */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8 break-inside-avoid">
        <SectionHeader icon={Layers} title={`Grammar: ${content.grammarTitle}`} colorClass={bookColor} />
        
        {/* Intro */}
        <div className="mb-8 text-slate-700 leading-relaxed text-lg">
           <p>{content.grammar.introduction}</p>
        </div>

        {/* Visual Bricks */}
        <div className="space-y-8 mb-10">
          {content.grammar.structures.map((struct, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 break-inside-avoid">
               <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">{struct.label}</h3>
               
               {/* Bricks */}
               <div className="flex flex-wrap items-center gap-2 mb-6">
                 {struct.bricks.map((brick, bIdx) => (
                   <React.Fragment key={bIdx}>
                      <div className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg border-b-4 ${getBrickStyles(brick.type)} shadow-sm min-w-[80px]`}>
                        <span className="font-bold text-lg">{brick.text}</span>
                        <span className="text-[10px] uppercase opacity-70 tracking-wide font-bold">
                          {getBrickLabel(brick.type)}
                        </span>
                      </div>
                      {bIdx < struct.bricks.length - 1 && (
                        <span className="text-slate-300 font-bold text-xl">+</span>
                      )}
                   </React.Fragment>
                 ))}
               </div>

               {/* Full Sentence & Meaning */}
               <div className="bg-white p-4 rounded-lg border border-slate-100 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xl font-medium text-slate-800">{struct.fullSentence}</p>
                    <p className="text-slate-500 italic mt-1">{struct.meaning}</p>
                  </div>
                  <button 
                    onClick={() => handlePlayAudio(struct.fullSentence)}
                    className="p-2 rounded-full text-indigo-600 hover:bg-indigo-50 transition-colors flex-shrink-0"
                    title="Listen to sentence"
                  >
                    <Volume2 size={24} />
                  </button>
               </div>
            </div>
          ))}
        </div>

        {/* Tables - Responsive Wrapper */}
        <div className="space-y-6">
          {content.grammar.tables.map((table, tIdx) => (
            <div key={tIdx} className="rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-white break-inside-avoid">
              <div className="bg-slate-100 px-4 py-2 font-semibold text-slate-700 border-b border-slate-200">
                {table.title}
              </div>
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-slate-50">
                      {table.headers.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-3 font-semibold text-slate-600 border-b border-slate-200 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-3 text-slate-700 whitespace-nowrap">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speak & Repeat Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8 break-inside-avoid">
        <SectionHeader icon={Mic} title="Speak & Repeat" colorClass={bookColor} />
        <p className="text-slate-600 mb-6">Listen to the model, record your voice, and get instant AI feedback on your pronunciation.</p>
        
        {recordingError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-fadeIn">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <div className="text-sm text-red-800">
              <p className="font-bold">Microphone Error</p>
              <p>{recordingError}</p>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {content.speakAndRepeat?.map((item, idx) => {
             const isActive = activeSpeakIndex === idx;
             const hasResult = isActive && pronunciationResult;
             
             return (
              <div key={idx} className={`border rounded-xl p-5 transition-all break-inside-avoid ${isActive ? 'ring-2 ring-indigo-100 border-indigo-200 bg-indigo-50/20' : 'border-slate-200 bg-white'}`}>
                 <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-800">{item.text}</h3>
                        <button 
                           onClick={() => handlePlayAudio(item.text)}
                           className="p-1.5 rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>
                      <p className="text-slate-500 italic text-sm">{item.translation}</p>
                      <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Focus: {item.focus}</p>
                    </div>

                    <div className="flex items-center gap-3">
                       {isActive && isRecording ? (
                         <button 
                           onClick={stopRecording}
                           className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-colors animate-pulse"
                         >
                           <Square size={16} fill="currentColor" /> Stop
                         </button>
                       ) : (
                         <button 
                           onClick={() => startRecording(idx)}
                           className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-full font-medium transition-colors"
                         >
                           <Mic size={16} /> {isActive && audioBlob ? 'Re-record' : 'Record'}
                         </button>
                       )}
                    </div>
                 </div>

                 {/* Recording Playback & Submit Area */}
                 {isActive && audioBlob && !isRecording && (
                   <div className="mt-4 pt-4 border-t border-slate-200 animate-fadeIn">
                     <div className="flex items-center gap-4 mb-3">
                        <audio src={URL.createObjectURL(audioBlob)} controls className="h-8 w-full max-w-xs" />
                        <button 
                          onClick={() => submitForFeedback(item.text)}
                          disabled={isCheckingPronunciation}
                          className="flex items-center gap-2 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                        >
                          {isCheckingPronunciation ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                          Check Pronunciation
                        </button>
                     </div>

                     {/* Feedback Result */}
                     {hasResult && (
                       <div className="bg-white rounded-lg border border-slate-200 p-4 mt-4 animate-fadeIn">
                          <div className="flex items-center gap-4 mb-3">
                            <div className={`flex flex-col items-center justify-center w-14 h-14 rounded-full border-4 flex-shrink-0 ${
                              pronunciationResult.score >= 80 ? 'border-green-500 text-green-700 bg-green-50' : 
                              pronunciationResult.score >= 60 ? 'border-amber-500 text-amber-700 bg-amber-50' : 
                              'border-red-500 text-red-700 bg-red-50'
                            }`}>
                               <span className="text-xl font-bold">{pronunciationResult.score}</span>
                            </div>
                            <div>
                               <h4 className="font-bold text-slate-800">AI Feedback</h4>
                               <p className="text-sm text-slate-600">{pronunciationResult.feedback}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                            <div className="bg-green-50 border border-green-100 p-3 rounded-lg text-sm">
                               <strong className="text-green-800 block mb-1">Strengths:</strong>
                               <span className="text-green-700">{pronunciationResult.strengths || "Good effort!"}</span>
                            </div>
                            <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg text-sm">
                               <strong className="text-amber-800 block mb-1">To Improve:</strong>
                               <span className="text-amber-700">{pronunciationResult.improvements || "Keep practicing."}</span>
                            </div>
                          </div>
                       </div>
                     )}
                   </div>
                 )}
              </div>
             );
          })}
        </div>
      </section>

      {/* Dialogue */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8 break-inside-avoid">
        <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-2">
           <div className="flex items-center gap-3">
             <div className={`p-2 rounded-lg ${bookColor} bg-opacity-10 text-slate-700`}>
                <MessageCircle className={`w-6 h-6 ${bookColor.replace('bg-', 'text-')}`} />
             </div>
             <h2 className="text-2xl font-bold text-slate-800 serif">Dialogue</h2>
           </div>
           <button 
             onClick={() => {
                const fullText = content.dialogue.map(d => `${d.speaker} says: ${d.text}`).join('. ');
                handlePlayAudio(fullText);
             }}
             className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors"
           >
             <Play size={16} fill="currentColor" /> Play All
           </button>
        </div>
        
        <div className="space-y-6">
          {content.dialogue.map((line, idx) => {
            const isA = idx % 2 === 0;
            return (
              <div key={idx} className={`flex ${isA ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] rounded-2xl p-5 ${isA ? 'bg-slate-100 rounded-tl-none' : `${bookColor} bg-opacity-10 rounded-tr-none`}`}>
                  <div className="flex items-center justify-between mb-1 gap-4">
                    <span className={`text-xs font-bold uppercase ${isA ? 'text-slate-500' : `${accentColorText}`}`}>
                      {line.speaker}
                    </span>
                    <button 
                      onClick={() => handlePlayAudio(line.text)}
                      className="text-slate-400 hover:text-slate-600 transition-colors" 
                      title="Listen to line"
                    >
                      <Volume2 size={14} />
                    </button>
                  </div>
                  <p className="text-slate-900 font-medium text-lg mb-1">{line.text}</p>
                  <p className="text-slate-500 text-sm border-t border-black/5 pt-2 mt-2">{line.translation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-10 break-inside-avoid">
        <SectionHeader icon={HelpCircle} title="Quick Quiz" colorClass={bookColor} />
        <div className="space-y-8">
          {content.quiz.map((q, qIdx) => (
            <div key={qIdx} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm break-inside-avoid">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex gap-2">
                <span className="text-slate-400">{qIdx + 1}.</span> {q.question}
              </h3>
              <div className="space-y-3">
                {q.options.map((opt, oIdx) => {
                  const isSelected = quizAnswers[qIdx] === oIdx;
                  const isCorrect = q.correctAnswer === oIdx;
                  const showResult = quizAnswers[qIdx] !== -1;
                  
                  let btnClass = "border-slate-200 hover:bg-slate-50";
                  if (showResult) {
                    if (isCorrect) btnClass = "bg-green-100 border-green-300 text-green-800";
                    else if (isSelected) btnClass = "bg-red-100 border-red-300 text-red-800";
                    else btnClass = "border-slate-200 opacity-50";
                  } else if (isSelected) {
                     btnClass = "border-indigo-500 ring-1 ring-indigo-500 bg-indigo-50";
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleQuizSelect(qIdx, oIdx)}
                      disabled={showResult}
                      className={`w-full text-left p-3 rounded-lg border flex items-center justify-between transition-all ${btnClass}`}
                    >
                      <span>{opt}</span>
                      {showResult && isCorrect && <CheckCircle size={18} className="text-green-600" />}
                    </button>
                  );
                })}
              </div>
              {showExplanation[qIdx] && (
                <div className="mt-4 p-4 bg-blue-50 text-blue-800 text-sm rounded-lg border border-blue-100 animate-fadeIn">
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Complete Button */}
      <div className="flex justify-center pt-8 border-t border-slate-200">
        <button
          onClick={onComplete}
          className={`flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${bookColor.replace('bg-', 'bg-').replace('500', '600')}`}
        >
          <CheckCircle size={24} />
          Complete Unit & Return to Menu
        </button>
      </div>
    </div>
  );
};

export default UnitView;