import React, { useState, useEffect } from 'react';
import { BOOKS } from './constants';
import { BookDefinition, UnitDefinition, GeneratedUnitContent } from './types';
import BookCard from './components/BookCard';
import Layout from './components/Layout';
import UnitView from './components/UnitView';
import ChatBot from './components/ChatBot';
import LiveVoice from './components/LiveVoice';
import PrintButton from './components/PrintButton';
import { generateUnitContent } from './services/geminiService';
import { Loader2, Lock, Play, CheckCircle2, ChevronRight, AlertTriangle, Sparkles, AudioLines } from 'lucide-react';

// Simple in-memory cache to avoid regenerating costs during session
const contentCache: Record<string, GeneratedUnitContent> = {};

export default function App() {
  const [activeBook, setActiveBook] = useState<BookDefinition | null>(null);
  const [activeUnit, setActiveUnit] = useState<UnitDefinition | null>(null);
  const [unitContent, setUnitContent] = useState<GeneratedUnitContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
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
    setError(null);
  };

  const handleGoHome = () => {
    setActiveBook(null);
    setActiveUnit(null);
    setUnitContent(null);
    setError(null);
  };

  const handleBackToUnits = () => {
    setActiveUnit(null);
    setUnitContent(null);
    setError(null);
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

  const handleGenerateUnit = async (unit: UnitDefinition) => {
    if (!activeBook) return;

    setActiveUnit(unit);
    
    // Special Interactive Units Handling
    // 5-9 is Text Chat, 5-10 is Live Voice
    if (unit.id === '5-9' || unit.id === '5-10') {
      return; // Stop here, rendering logic handles the view
    }

    setLoading(true);
    setError(null);

    const cacheKey = `${activeBook.id}-${unit.id}`;

    if (contentCache[cacheKey]) {
      setUnitContent(contentCache[cacheKey]);
      setLoading(false);
      return;
    }

    try {
      const content = await generateUnitContent(
        activeBook.title,
        activeBook.levelDescription,
        unit.title,
        unit.description
      );
      contentCache[cacheKey] = content;
      setUnitContent(content);
    } catch (e) {
      console.error(e);
      setError("We couldn't generate this unit. Please check your internet connection or API key and try again.");
      setActiveUnit(null); // Reset selection on error so they stay on list view
    } finally {
      setLoading(false);
    }
  };

  // Auth Handlers (Mock)
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // View: Loading Screen
  if (loading) {
    return (
      <Layout 
        onGoHome={handleGoHome} 
        showHomeButton={true}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      >
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <div className="relative">
            <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${activeBook?.color}`}></div>
            <Loader2 size={64} className={`animate-spin ${activeBook?.color.replace('bg-', 'text-')} relative z-10`} />
          </div>
          <h2 className="mt-8 text-2xl font-bold text-slate-800">Generating Unit Content</h2>
          <p className="mt-2 text-slate-500 max-w-md">
            Our AI teacher is crafting custom vocabulary, dialogues, and exercises for <span className="font-semibold text-slate-700">"{activeUnit?.title}"</span>...
          </p>
        </div>
      </Layout>
    );
  }

  // View: Interactive Tools or Generated Content
  if (activeBook && activeUnit) {
    // Render ChatBot for Unit 5-9
    if (activeUnit.id === '5-9') {
      return (
        <Layout 
          onGoHome={handleGoHome} 
          showHomeButton={true}
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        >
          <ChatBot onBack={handleBackToUnits} />
        </Layout>
      );
    }

    // Render LiveVoice for Unit 5-10
    if (activeUnit.id === '5-10') {
      return (
        <Layout 
          onGoHome={handleGoHome} 
          showHomeButton={true}
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        >
          <LiveVoice onBack={handleBackToUnits} />
        </Layout>
      );
    }

    // Render Standard Unit
    if (unitContent) {
      return (
        <Layout 
          onGoHome={handleGoHome} 
          showHomeButton={true}
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        >
          <UnitView 
            unitDef={activeUnit} 
            content={unitContent} 
            onBack={handleBackToUnits}
            onComplete={handleMarkComplete}
            bookColor={activeBook.color} 
          />
        </Layout>
      );
    }
  }

  // View: Book Details (Unit List)
  if (activeBook) {
    return (
      <Layout 
        onGoHome={handleGoHome} 
        showHomeButton={true}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      >
        <div className="animate-fadeIn">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={handleGoHome} 
                className="text-sm font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1 no-print"
              >
                 ← Back to Library
              </button>
              <PrintButton label="Print Syllabus" />
            </div>

            <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-4 border-b border-slate-200 pb-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 serif">{activeBook.title}</h1>
                <p className="text-slate-500 mt-1 text-lg">{activeBook.subtitle} — {activeBook.levelDescription}</p>
              </div>
              <div className={`px-4 py-2 rounded-lg text-white text-sm font-semibold shadow-sm ${activeBook.color} no-print`}>
                {activeBook.units.length} Units Available
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700 no-print">
              <AlertTriangle size={20} />
              <p>{error}</p>
            </div>
          )}

          {/* Unit Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-1 print:gap-4">
            {activeBook.units.map((unit) => {
              const isCached = !!contentCache[`${activeBook.id}-${unit.id}`];
              const isCompleted = completedUnits.includes(unit.id);
              const isSpecial = unit.id === '5-9' || unit.id === '5-10';
              
              return (
                <div 
                  key={unit.id}
                  onClick={() => handleGenerateUnit(unit)}
                  className={`
                    group bg-white rounded-xl border p-6 cursor-pointer transition-all duration-200
                    hover:shadow-md hover:border-indigo-300 relative overflow-hidden break-inside-avoid
                    ${isCompleted ? 'border-green-200 bg-green-50/30' : (isCached ? 'border-indigo-200 ring-1 ring-indigo-50' : 'border-slate-200')}
                    ${isSpecial ? 'ring-2 ring-indigo-100' : ''}
                  `}
                >
                  {isCompleted && (
                     <div className="absolute top-0 right-0 p-3 no-print">
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
                          : isCached 
                            ? 'bg-indigo-100 text-indigo-700' 
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}
                    `}>
                      {isSpecial && unit.id === '5-9' && <Sparkles size={18} />}
                      {isSpecial && unit.id === '5-10' && <AudioLines size={18} />}
                      {!isSpecial && unit.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                    {unit.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                    {unit.description}
                  </p>

                  <div className="flex items-center text-sm font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors no-print">
                    {isSpecial ? 'Launch Tool' : (isCompleted ? 'Review Unit' : 'Start Lesson')} <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }

  // View: Library (Home)
  return (
    <Layout 
      onGoHome={handleGoHome} 
      showHomeButton={false}
      isLoggedIn={isLoggedIn}
      onLogin={handleLogin}
      onLogout={handleLogout}
    >
      <div className="max-w-4xl mx-auto py-12 text-center animate-fadeIn">
        <div className="flex justify-end mb-8">
           <PrintButton label="Print Catalog" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 serif tracking-tight">
          Master English with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 print:text-indigo-600">AI-Powered</span> Books
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
          Select a level below to generate personalized, interactive e-books designed specifically for Portuguese speakers. Based on the proven Interchange method.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 print:grid-cols-2">
          {BOOKS.map((book) => (
            <BookCard 
              key={book.id} 
              book={book} 
              onClick={() => handleBookSelect(book)} 
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}