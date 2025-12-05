import React, { ReactNode } from 'react';
import { BookOpen, GraduationCap, Github, ExternalLink } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  onGoHome: () => void;
  showHomeButton: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  onGoHome, 
  showHomeButton,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            className={`flex items-center gap-2 ${showHomeButton ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
            onClick={showHomeButton ? onGoHome : undefined}
          >
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <GraduationCap size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Inglês <span className="text-indigo-600">Turbo</span> AI
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Social Links */}
            <a href="https://github.com/tico-bughead/inglesturboai" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-800 transition-colors hidden sm:block">
              <span className="sr-only">GitHub</span>
              <Github size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-auto no-print">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Left Side: Credits */}
            <div className="flex flex-col gap-2 text-center md:text-left">
              <p className="text-sm text-slate-500 font-medium">
                Powered by Google Gemini 2.5 Flash
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-400">
                <BookOpen size={16} />
                <span>Educational Content Generator</span>
              </div>
            </div>

            {/* Right Side: Gliglish Link & QR */}
            <div className="flex flex-col items-center">
              <a 
                href="https://gliglish.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm group-hover:shadow-md transition-all">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://gliglish.com" 
                    alt="QR Code to Gliglish.com" 
                    className="w-24 h-24"
                  />
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
                  <span>Practice on Gliglish.com</span>
                  <ExternalLink size={14} />
                </div>
              </a>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;