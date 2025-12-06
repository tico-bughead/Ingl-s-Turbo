import React, { useState } from 'react';
import { BOOKS, getStaticUnitContent } from './constants';
import { BookDefinition, UnitDefinition, GeneratedUnitContent } from './types';
import BookCard from './components/BookCard';
import Layout from './components/Layout';
import UnitView from './components/UnitView';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export default function App() {
  const [activeBook, setActiveBook] = useState<BookDefinition | null>(null);
  const [activeUnit, setActiveUnit] = useState<UnitDefinition | null>(null);
  const [unitContent, setUnitContent] = useState<GeneratedUnitContent | null>(null);
  
  // Track completed units with persistence
  const [completedUnits, setCompletedUnits] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('english-turbo-completed');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load completed units", e);
      return [];
    }
  });

  const handleBookSelect = (book: BookDefinition) => {
    setActiveBook(book);
    setActiveUnit(null);
    setUnitContent(null);
  };

  const handleGoHome = () => {
    setActiveBook(null);
    setActiveUnit(null);
    setUnitContent(null);
  };

  const handleBackToUnits = () => {
    setActiveUnit(null);
    setUnitContent(null);
  };

  const handleMarkComplete = () => {
    if (activeUnit) {
      const unitId = activeUnit.id;
      if (!completedUnits.includes(unitId)) {
        const newCompleted = [...completedUnits, unitId];
        setCompletedUnits(newCompleted);
        localStorage.setItem('english-turbo-completed', JSON.stringify(newCompleted));
      }
      handleBackToUnits();
    }
  };

  const handleOpenUnit = (unit: UnitDefinition) => {
    if (!activeBook) return;

    setActiveUnit(unit);
    
    // Load static content immediately
    const content = getStaticUnitContent(unit.id, unit.title, unit.description);
    setUnitContent(content);
  };

  // Generic Layout wrapper
  const AppLayout: React.FC<{ children: React.ReactNode, showHomeButton: boolean }> = ({ children, showHomeButton }) => (
    <Layout 
        onGoHome={handleGoHome} 
        showHomeButton={showHomeButton}
      >
        {children}
    </Layout>
  );

  // --- RENDER ---

  // 1. Unit View (Handles Standard and Special Gemini Guide Units)
  if (activeBook && activeUnit && unitContent) {
    return (
      <AppLayout showHomeButton={true}>
        <UnitView 
          unitDef={activeUnit} 
          content={unitContent} 
          onBack={handleBackToUnits}
          onComplete={handleMarkComplete}
          bookColor={activeBook.color} 
        />
      </AppLayout>
    );
  }

  // 2. Book Details (Unit List)
  if (activeBook) {
    return (
      <AppLayout showHomeButton={true}>
        <div className="animate-fadeIn">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={handleGoHome} 
                className="text-sm font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                 ← Back to Library
              </button>
            </div>

            <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-4 border-b border-slate-200 pb-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 serif">{activeBook.title}</h1>
                <p className="text-slate-500 mt-1 text-lg">{activeBook.subtitle} — {activeBook.levelDescription}</p>
              </div>
              <div className={`px-4 py-2 rounded-lg text-white text-sm font-semibold shadow-sm ${activeBook.color}`}>
                {activeBook.units.length} Units Available
              </div>
            </div>
          </div>

          {/* Unit Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeBook.units.map((unit) => {
              const isCompleted = completedUnits.includes(unit.id);
              const isSpecial = unit.id === '5-1';
              
              return (
                <div 
                  key={unit.id}
                  onClick={() => handleOpenUnit(unit)}
                  className={`
                    group bg-white rounded-xl border p-6 cursor-pointer transition-all duration-200
                    hover:shadow-md hover:border-indigo-300 relative overflow-hidden break-inside-avoid
                    ${isCompleted ? 'border-green-200 bg-green-50/30' : 'border-slate-200'}
                    ${isSpecial ? 'ring-2 ring-indigo-100' : ''}
                  `}
                >
                  {isCompleted && (
                     <div className="absolute top-0 right-0 p-3">
                       <div className="bg-green-100 rounded-full p-1">
                          <CheckCircle2 size={16} className="text-green-600" strokeWidth={3} />
                       </div>
                     </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span className={`
                      inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold
                      ${isSpecial 
                        ? 'bg-indigo-600 text-white' 
                        : isCompleted
                          ? 'bg-green-100 text-green-700'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}
                    `}>
                      {isSpecial && <Sparkles size={18} />}
                      {!isSpecial && unit.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                    {unit.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                    {unit.description}
                  </p>

                  <div className="flex items-center text-sm font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors">
                    {isSpecial ? 'Open Guide' : (isCompleted ? 'Review Unit' : 'Start Lesson')} <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AppLayout>
    );
  }

  // 3. Library (Home)
  return (
    <AppLayout showHomeButton={false}>
      <div className="max-w-4xl mx-auto py-12 text-center animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 serif tracking-tight">
          Master English with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">AI-Powered</span> Books
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
          Select a level below to generate personalized, interactive e-books designed specifically for Portuguese speakers. Based on the proven Interchange method.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {BOOKS.map((book) => (
            <BookCard 
              key={book.id} 
              book={book} 
              onClick={() => handleBookSelect(book)} 
            />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}