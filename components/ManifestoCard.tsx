import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScribbleLine, StarDoodle } from './shared/Decorations';
import { Section } from './ui/Section';

export const ManifestoCard: React.FC = () => {
  const { t } = useTranslation();
  const paragraphs = t('manifesto.content', { returnObjects: true }) as string[];
  
  return (
    <Section maxWidth="max-w-3xl">
      
      {/* Tape Effect */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-brand-pink/20 rotate-1 z-20 backdrop-blur-sm border-l border-r border-white/30"></div>

      <div className="bg-[#FFFCF5] relative shadow-2xl p-8 md:p-16 transform ">
        
        <div className="absolute top-0 left-0 w-full h-full border border-brand-dark/5 m-2 pointer-events-none"></div>

        <div className="text-center space-y-10 relative">
           
           <h1 className="font-sketch text-7xl text-brand-purple drop-shadow-sm">{t('manifesto.title')}</h1>
           
           <div className="w-full max-w-md mx-auto opacity-50">
             <ScribbleLine />
           </div>

           <div className="font-serif text-lg md:text-xl text-brand-dark leading-loose space-y-6 text-left">
              {paragraphs.map((paragraph, index) => {
                if (paragraph === t('manifesto.quote')) {
                  return (
                    <blockquote key={index} className="font-sketch text-3xl text-brand-purple my-8 py-4 border-t border-b border-brand-purple/20 text-center">
                      "{paragraph}"
                    </blockquote>
                  );
                }
                
                return (
                  <p key={index} className={index === 0 ? "first-letter:text-5xl first-letter:font-sketch first-letter:text-brand-orange first-letter:mr-1 first-letter:float-left" : ""}>
                    {paragraph}
                  </p>
                );
              })}
           </div>

           <div className="pt-12 flex justify-center gap-4">
              <StarDoodle className="text-brand-pink w-8 h-8" />
              <StarDoodle className="text-brand-purple w-6 h-6 mt-4" />
              <StarDoodle className="text-brand-orange w-8 h-8" />
           </div>

        </div>
      </div>
    </Section>
  );
};