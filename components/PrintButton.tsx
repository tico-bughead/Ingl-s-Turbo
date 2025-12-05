import React from 'react';
import { Printer } from 'lucide-react';

interface PrintButtonProps {
  label?: string;
  className?: string;
}

const PrintButton: React.FC<PrintButtonProps> = ({ label = "Print / Save PDF", className = "" }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button 
      onClick={handlePrint}
      className={`no-print flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-sm font-medium transition-colors shadow-sm ${className}`}
      title="Print or Save as PDF"
    >
      <Printer size={16} />
      <span>{label}</span>
    </button>
  );
};

export default PrintButton;