
import React from 'react';
import { Section } from '../ui/Section';
import { PaperCard } from '../ui/PaperCard';
import { StarDoodle, ScribbleLine } from '../shared/Decorations';
import { TEAM_MEMBERS_PAGE } from '../../constants';

export const TeamCard: React.FC = () => {
  return (
    <Section maxWidth="max-w-5xl">
       {/* Decorative Background for the "Wall" feel */}
       <div className="absolute inset-0 -m-8 bg-brand-cream border-2 border-brand-purple/5 opacity-50 transform rotate-1 pointer-events-none rounded-xl"></div>
       
       <div className="text-center mb-16 relative">
          <h1 className="font-sketch text-7xl text-brand-purple mb-2 inline-block relative">
            Nossa Equipe
            <div className="absolute -top-6 -right-8">
              <StarDoodle className="w-10 h-10 text-brand-orange animate-pulse" />
            </div>
          </h1>
          <p className="font-serif italic text-brand-dark/70 text-xl max-w-2xl mx-auto mt-4">
            Quem faz a mágica acontecer. Uma mistura de técnica, paixão e amizade.
          </p>
          <div className="w-1/3 mx-auto mt-6 opacity-40">
            <ScribbleLine />
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 pb-12">
          {TEAM_MEMBERS_PAGE.map((member, index) => (
            <div key={index} className={`relative group flex flex-col items-center ${member.rotation}`}>
              
              {/* Polaroid Container */}
              <div className="bg-white p-4 pb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-0 border border-brand-dark/5">
                 
                 {/* Tape Effect */}
                 <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 ${member.tapeColor} opacity-90 backdrop-blur-sm shadow-sm rotate-1 z-10`}></div>
                 
                 {/* Image Area */}
                 <div className="aspect-square w-full bg-brand-cream/30 overflow-hidden mb-6 relative grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-purple/5 mix-blend-multiply"></div>
                 </div>

                 {/* Text Info (Handwritten style) */}
                 <div className="text-center">
                    <h3 className="font-sketch text-4xl text-brand-dark mb-1">{member.name}</h3>
                    <p className="font-sans text-[10px] font-bold tracking-[0.25em] text-brand-purple uppercase mb-4 border-b border-brand-purple/20 pb-2 inline-block">
                      {member.role}
                    </p>
                    <p className="font-serif italic text-brand-dark/80 text-sm leading-relaxed px-2">
                      "{member.description}"
                    </p>
                 </div>
              </div>
            </div>
          ))}
       </div>
       
       <PaperCard className="mt-16 text-center" hasDashedBorder>
          <h3 className="font-sketch text-3xl text-brand-pink mb-2">Quer fazer parte?</h3>
          <p className="font-serif text-brand-dark/70">
            Estamos sempre em busca de pessoas apaixonadas por gastronomia e hospitalidade.
            <br />
            Mande um oi para <span className="text-brand-purple font-bold">talentos@bergamotalubisca.com.br</span>
          </p>
       </PaperCard>

    </Section>
  );
};
