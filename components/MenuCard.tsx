import React from 'react';
import { MENU_CONTENT } from '../constants';
import { BergamotIcon, SmallJarIcon } from './Icons';
import { DiamondDivider } from './shared/Decorations';
import { Section } from './ui/Section';
import { PaperCard } from './ui/PaperCard';

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
            <div key={section.title} className="flex flex-col items-center text-center">
              
              {/* Section Title */}
              <h2 className="inline-block relative font-sketch font-bold text-5xl text-brand-orange mb-10 tracking-widest px-6 transform -rotate-1">
                {section.title}
                {/* Scribble decoration */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-purple opacity-20 rounded-full"></div>
              </h2>

              {/* Items - Vertical flex stack */}
              <div className="flex flex-col gap-12 w-full max-w-2xl">
                {section.items.map((item, i) => (
                  <div key={i} className="group flex flex-col items-center">
                    {/* Chef/Dish Icon instead of Text Name */}
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {item.brand === 'bergamota' ? (
                        <div className="flex flex-col items-center gap-2">
                            <BergamotIcon className="h-16 w-16 text-brand-orange drop-shadow-sm" />
                            <span className="text-[10px] tracking-[0.2em] font-bold text-brand-purple/50 uppercase">Bergamota</span>
                        </div>
                      ) : item.brand === 'lubisca' ? (
                        <div className="flex flex-col items-center gap-2">
                            <SmallJarIcon className="h-14 w-14 text-brand-pink drop-shadow-sm" />
                            <span className="text-[10px] tracking-[0.2em] font-bold text-brand-purple/50 uppercase">Lubisca</span>
                        </div>
                      ) : (
                        <h3 className="font-serif text-2xl font-bold text-brand-dark group-hover:text-brand-pink transition-colors mb-3 relative inline-block">
                          {item.name}
                        </h3>
                      )}
                    </div>
                    
                    {/* Name of Dish (if explicit) or generic description */}
                    <h3 className="font-serif text-2xl font-bold text-brand-dark mb-3">{item.name}</h3>

                    {/* Ingredients List */}
                    {item.ingredients && (
                      <ul className="flex flex-col gap-1 items-center">
                        {item.ingredients.map((ing, j) => (
                          <li key={j} className="font-sketch text-2xl text-brand-purple/70 leading-normal">
                            {ing}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider between sections */}
              {index < MENU_CONTENT.length - 1 && (
                <div className="w-full mt-12">
                    <DiamondDivider />
                </div>
              )}
            </div>
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