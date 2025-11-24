import React from 'react';
import { MENU_CONTENT } from '../../constants';
import { Section } from '../shared/Section';
import { PaperCard } from '../shared/PaperCard';
import { MenuSection } from './MenuSection';

export const MenuCard: React.FC = () => {
  return (
    <Section className="perspective-1000">
      
      {/* Abstract decorations behind the menu */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-orange rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute top-1/2 -left-12 w-48 h-48 bg-brand-pink rounded-full opacity-5 blur-2xl"></div>
      
      {/* The Paper Card */}
      <PaperCard hasDashedBorder>
        
        {/* HEADER */}
        <header className="text-center mb-12 relative">
          <h1 className="font-sketch font-bold text-7xl text-brand-purple mb-4 relative inline-block tracking-widest">
            NOSSO MENU
            {/* Text highlight effect */}
            <div className="absolute bottom-2 left-0 w-full h-3 bg-brand-orange/30 -rotate-1 z-0 rounded-full"></div>
          </h1>
          <p className="font-serif italic text-brand-dark/60 text-lg">Uma sequência de sabores e histórias</p>
        </header>

        {/* SECTIONS */}
        <div className="space-y-16">
          {MENU_CONTENT.map((section, index) => (
            <MenuSection 
              key={section.title} 
              section={section} 
              isLast={index === MENU_CONTENT.length - 1} 
            />
          ))}
        </div>

        {/* Footer mark */}
        <div className="mt-20 text-center">
            <div className="inline-block border border-brand-purple rounded-full px-6 py-2 text-xs font-sans tracking-[0.3em] text-brand-purple uppercase opacity-50">
              Ingredientes sazonais sujeitos a alteração
            </div>
        </div>

      </PaperCard>
    </Section>
  );
};