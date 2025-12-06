import React, { useState } from 'react';
import { GeneratedUnitContent, UnitDefinition, BrickType } from '../types';
import { Volume2, MessageCircle, BookOpen, CheckCircle, HelpCircle, Play, Layers, Mic, ExternalLink } from 'lucide-react';

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
          
          {/* External Link Card (e.g. for Gliglish) */}
          {content.externalLink && (
             <div className="mt-8 bg-slate-50 border border-indigo-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                <div>
                   <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                     <span className="bg-indigo-600 text-white p-1 rounded-md"><ExternalLink size={16} /></span>
                     {content.externalLink.label}
                   </h3>
                   <p className="text-slate-500 text-sm mt-1">{content.externalLink.description}</p>
                </div>
                <a 
                  href={content.externalLink.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2 whitespace-nowrap"
                >
                   Open Now <ExternalLink size={18} />
                </a>
             </div>
          )}
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
        <p className="text-slate-600 mb-6">Listen to the model and practice speaking aloud to improve your pronunciation.</p>
        
        <div className="space-y-4">
          {content.speakAndRepeat?.map((item, idx) => {
             return (
              <div key={idx} className={`border rounded-xl p-5 border-slate-200 bg-white transition-all hover:border-indigo-200 hover:bg-slate-50 break-inside-avoid`}>
                 <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-800">{item.text}</h3>
                      </div>
                      <p className="text-slate-500 italic text-sm">{item.translation}</p>
                      <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Focus: {item.focus}</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button 
                           onClick={() => handlePlayAudio(item.text)}
                           className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-full font-medium transition-colors"
                        >
                          <Volume2 size={18} /> Listen
                        </button>
                    </div>
                 </div>
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