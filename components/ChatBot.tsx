import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Send, User, Bot, Loader2 } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

interface ChatBotProps {
  onBack: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Chat
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: "You are a helpful and encouraging English Tutor for Portuguese speakers. Correct their mistakes gently and encourage conversation. Keep responses concise.",
      },
    });
    setChatSession(chat);
    
    // Initial greeting
    setMessages([{ role: 'model', text: "Hello! I'm your English Turbo Tutor. What would you like to talk about today?" }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSession || isLoading) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      let fullResponse = "";
      const result = await chatSession.sendMessageStream({ message: userMsg });
      
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          fullResponse += c.text;
          // Update the last message if it's from model, or add new one
          setMessages(prev => {
            const last = prev[prev.length - 1];
            if (last.role === 'model') {
              return [...prev.slice(0, -1), { role: 'model', text: fullResponse }];
            } else {
              return [...prev, { role: 'model', text: fullResponse }];
            }
          });
        }
      }
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[80vh] flex flex-col bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-indigo-600 p-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <Bot size={24} />
          <div>
            <h2 className="font-bold">AI Tutor Chat</h2>
            <p className="text-xs text-indigo-200">Powered by Gemini 3.0 Pro</p>
          </div>
        </div>
        <button onClick={onBack} className="text-sm bg-white/10 px-3 py-1 rounded hover:bg-white/20 transition">
          Exit
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start max-w-[80%] gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-emerald-500 text-white'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-3 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
              <Loader2 size={16} className="animate-spin text-indigo-600" />
              <span className="text-xs text-slate-400">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message in English..."
            className="flex-1 p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;