import React from 'react';
import { SketchyArrowRight } from '../shared/Decorations';

interface NavButtonProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({ text, isActive, onClick }) => (
  <button onClick={onClick} className="w-full group flex items-center justify-between py-1 relative text-left">
    <span className={`z-10 text-3xl font-sketch transition-all duration-300 ${isActive ? 'text-brand-pink font-bold' : 'text-brand-purple group-hover:text-brand-orange'}`}>
      {text}
    </span>
    {/* Hover highlight */}
    <div className="absolute bottom-1 left-0 w-0 h-3 bg-brand-cream group-hover:w-full transition-all duration-300 -z-0 opacity-50"></div>
    
    <span className={`opacity-0 transition-opacity text-brand-pink ${isActive ? 'opacity-100' : 'group-hover:opacity-100'}`}>
      <SketchyArrowRight />
    </span>
  </button>
);