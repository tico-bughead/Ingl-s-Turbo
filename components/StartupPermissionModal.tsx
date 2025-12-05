import React, { useState } from 'react';
import { Mic, ArrowRight, ShieldCheck, AlertTriangle, X } from 'lucide-react';

interface StartupPermissionModalProps {
  onComplete: () => void;
}

const StartupPermissionModal: React.FC<StartupPermissionModalProps> = ({ onComplete }) => {
  const [status, setStatus] = useState<'idle' | 'requesting' | 'denied'>('idle');

  const requestMicrophone = async () => {
    setStatus('requesting');
    try {
      // Request access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // If successful, we immediately stop the tracks. 
      // The browser now remembers that this site has permission.
      stream.getTracks().forEach(track => track.stop());
      
      // Proceed to app
      onComplete();
    } catch (error) {
      console.error("Mic permission denied", error);
      setStatus('denied');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative">
        
        {/* Header Graphic */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-center text-white">
          <div className="mx-auto bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 backdrop-blur-md">
            <Mic size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold font-serif mb-2">Enable Your Voice</h2>
          <p className="text-indigo-100 text-sm">To use AI Pronunciation & Live Chat features</p>
        </div>

        <div className="p-8">
          {status === 'denied' ? (
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0" size={24} />
                <div className="text-sm text-red-700">
                  <p className="font-bold mb-1">Permission Denied</p>
                  <p>We couldn't access your microphone. You can still use the app, but speaking exercises won't work.</p>
                </div>
              </div>
              
              <div className="text-sm text-slate-500">
                To enable it later, click the lock icon 🔒 in your browser address bar.
              </div>

              <button 
                onClick={onComplete}
                className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Continue without Microphone <ArrowRight size={18} />
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <ShieldCheck size={16} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Privacy First</h3>
                    <p className="text-sm text-slate-500">Your audio is only sent to the AI when you press "Record" or start a Live call.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-indigo-100 p-1 rounded-full">
                    <Mic size={16} className="text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Interactive Learning</h3>
                    <p className="text-sm text-slate-500">Speak & Repeat exercises require microphone access to check your pronunciation.</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={requestMicrophone}
                disabled={status === 'requesting'}
                className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
              >
                {status === 'requesting' ? 'Requesting...' : 'Enable Microphone Access'}
              </button>

              <button 
                onClick={onComplete}
                className="w-full text-center text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
              >
                Skip for now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartupPermissionModal;