import React from 'react';
import { BookDefinition } from '../types';
import { ChevronRight, Star, Book, BarChart } from 'lucide-react';

interface BookCardProps {
  book: BookDefinition;
  onClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    >
      {/* Cover Top Half - Color coded */}
      <div className={`h-40 ${book.color} relative p-6 flex flex-col justify-between text-white`}>
        <div className="absolute top-0 right-0 p-4 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
           <Book size={96} />
        </div>
        
        <div className="flex justify-between items-start z-10">
          <span className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm">
            {book.id === 1 ? 'Intro' : `Level ${book.id - 1}`}
          </span>
          <Star className="text-white/60" size={20} />
        </div>

        <div className="z-10">
          <h3 className="text-3xl font-extrabold tracking-tight font-serif">{book.title}</h3>
          <p className="text-white/90 font-medium">{book.subtitle}</p>
        </div>
      </div>

      {/* Bottom Half - Info */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <BarChart size={16} />
            <span>{book.levelDescription}</span>
          </div>
          <p className="text-sm text-slate-600 line-clamp-2 mb-4">
            Contains {book.units.length} comprehensive units covering essential grammar, vocabulary, and real-life scenarios.
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {book.units.length} Units
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
            Open Book <ChevronRight size={16} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;