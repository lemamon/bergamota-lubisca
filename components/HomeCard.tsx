import React from 'react';
import { JarLogo } from './Icons';
import { StarDoodle, ScribbleLine } from './shared/Decorations';
import { EVENT_TITLE, EVENT_SUBTITLE, EVENT_CTA } from '../constants';
import { View } from '../types';
import { Section } from './ui/Section';

interface HomeCardProps {
  onNavigate: (view: View) => void;
}

export const HomeCard: React.FC<HomeCardProps> = ({ onNavigate }) => {
  return (
    <Section className="flex flex-col items-center justify-center min-h-[60vh] text-center" maxWidth="max-w-4xl">
      {/* Background Blooms */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-3xl"></div>

      {/* Main Logo - Large */}
      <div className="relative w-64 h-64 md:w-96 md:h-96 mb-12 transform hover:scale-105 transition-transform duration-700 cursor-pointer" onClick={() => onNavigate('event')}>
         <JarLogo />
      </div>

      {/* Typography */}
      <div className="relative z-10 space-y-6 max-w-2xl px-4">
        <h1 className="font-serif italic text-6xl md:text-8xl text-brand-purple leading-tight drop-shadow-sm">
          {EVENT_TITLE}
        </h1>
        
        <div className="flex items-center justify-center gap-4 opacity-80">
           <StarDoodle className="w-4 h-4 text-brand-orange" />
           <p className="font-sketch text-2xl md:text-4xl font-bold text-brand-dark tracking-[0.2em] uppercase">
             {EVENT_SUBTITLE}
           </p>
           <StarDoodle className="w-4 h-4 text-brand-pink" />
        </div>

        <div className="pt-8">
           <div className="w-full max-w-xs mx-auto mb-8">
             <ScribbleLine />
           </div>
           
           <p className="font-serif text-lg text-brand-dark/70 italic mb-8">
             {EVENT_CTA}
           </p>

           <div className="flex flex-col md:flex-row gap-6 justify-center">
             <button 
               onClick={() => onNavigate('menu')}
               className="px-8 py-3 border-2 border-brand-purple rounded-full font-sketch text-2xl hover:bg-brand-purple hover:text-brand-cream transition-colors uppercase tracking-widest"
             >
               Ver Cardápio
             </button>
             
             <button 
               onClick={() => onNavigate('reservation')}
               className="px-8 py-3 bg-brand-pink text-white border-2 border-brand-pink rounded-full font-sketch text-2xl hover:bg-brand-dark hover:border-brand-dark transition-colors uppercase tracking-widest shadow-lg transform hover:-translate-y-1"
             >
               Fazer Reserva
             </button>
           </div>
        </div>
      </div>
    </Section>
  );
};