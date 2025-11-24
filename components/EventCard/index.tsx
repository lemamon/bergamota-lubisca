import React from 'react';
import { EVENT_TITLE, EVENT_INTRO, EVENT_CLOSING } from '../../constants';
import { DiamondDivider, StarDoodle } from '../shared/Decorations';
import { Section } from '../shared/Section';

export const EventCard: React.FC = () => {
  return (
    <Section maxWidth="max-w-3xl">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-brand-orange/20 rounded-tr-3xl -m-4"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-brand-pink/20 rounded-bl-3xl -m-4"></div>

      <div className="bg-white/80 backdrop-blur-md relative shadow-xl border border-brand-purple/10 p-8 md:p-16">
        
        <header className="text-center mb-12">
           <span className="font-sketch text-2xl text-brand-pink tracking-widest uppercase mb-2 block">Sobre a Experiência</span>
           <h1 className="font-serif text-5xl md:text-6xl text-brand-purple mb-6">{EVENT_TITLE}</h1>
           <DiamondDivider />
        </header>

        <div className="font-serif text-lg md:text-xl text-brand-dark leading-loose space-y-6 text-justify">
            {EVENT_INTRO.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:font-sketch first-letter:text-brand-purple first-letter:mr-2 first-letter:float-left" : ""}>
                {paragraph}
              </p>
            ))}
        </div>

        <div className="my-12 flex justify-center">
          <div className="w-16 h-1 bg-brand-dark/10 rounded-full"></div>
        </div>

        <div className="bg-brand-cream p-8 rounded-lg border border-dashed border-brand-purple/30 relative">
           <StarDoodle className="absolute -top-3 -left-3 w-8 h-8 text-brand-orange bg-brand-cream" />
           
           <div className="font-sketch text-2xl text-brand-purple/80 text-center space-y-2">
              {EVENT_CLOSING.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
           </div>
        </div>

      </div>
    </Section>
  );
};