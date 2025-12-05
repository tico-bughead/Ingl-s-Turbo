import React, { ReactNode } from 'react';
import { BookOpen, GraduationCap, Github, ExternalLink, LogIn, UserPlus, LogOut, User } from 'lucide-react';
import { LoginModal, SignUpModal } from './AuthModals';

interface LayoutProps {
  children: ReactNode;
  onGoHome: () => void;
  showHomeButton: boolean;
  isLoggedIn?: boolean;
  onLogout?: () => void;
  
  // Auth Modal State Props (passed from App)
  isLoginOpen?: boolean;
  isSignUpOpen?: boolean;
  onCloseLogin?: () => void;
  onCloseSignUp?: () => void;
  onOpenLogin?: () => void;
  onOpenSignUp?: () => void;
  onAuthSuccess?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  onGoHome, 
  showHomeButton,
  isLoggedIn = false,
  onLogout,
  
  isLoginOpen = false,
  isSignUpOpen = false,
  onCloseLogin = () => {},
  onCloseSignUp = () => {},
  onOpenLogin = () => {},
  onOpenSignUp = () => {},
  onAuthSuccess = () => {}
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

            {/* Divider */}
            <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>

            {/* Auth Section */}
            {isLoggedIn ? (
              <div className="flex items-center gap-3 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-sm">
                    <User size={16} />
                  </div>
                  <span className="text-sm font-medium text-slate-700 hidden md:block">Francisco</span>
                </div>
                <button 
                  onClick={onLogout}
                  className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Sair"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 sm:gap-3">
                <button 
                  onClick={onOpenLogin}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  <LogIn size={16} className="hidden sm:inline" />
                  Entrar
                </button>
                <button 
                  onClick={onOpenSignUp} 
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-all hover:shadow-md active:scale-95"
                >
                  <UserPlus size={16} className="hidden sm:inline" />
                  Cadastrar
                </button>
              </div>
            )}
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

      {/* Modals */}
      <LoginModal 
        isOpen={!!isLoginOpen} 
        onClose={onCloseLogin} 
        onSwitchToSignUp={() => {
          onCloseLogin();
          onOpenSignUp();
        }}
        onLoginSuccess={onAuthSuccess}
      />
      <SignUpModal 
        isOpen={!!isSignUpOpen} 
        onClose={onCloseSignUp}
        onSwitchToLogin={() => {
          onCloseSignUp();
          onOpenLogin();
        }}
        onSignUpSuccess={onAuthSuccess}
      />
    </div>
  );
};

export default Layout;