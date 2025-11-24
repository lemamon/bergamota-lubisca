import React from 'react';
import { ScribbleLine, StarDoodle } from '../shared/Decorations';
import { Section } from '../shared/Section';

export const ManifestoCard: React.FC = () => {
  return (
    <Section maxWidth="max-w-3xl">
      
      {/* Tape Effect */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-brand-pink/20 rotate-1 z-20 backdrop-blur-sm border-l border-r border-white/30"></div>

      <div className="bg-[#FFFCF5] relative shadow-2xl p-8 md:p-16 transform ">
        
        <div className="absolute top-0 left-0 w-full h-full border border-brand-dark/5 m-2 pointer-events-none"></div>

        <div className="text-center space-y-10 relative">
           
           <h1 className="font-sketch text-7xl text-brand-purple drop-shadow-sm">Manifesto</h1>
           
           <div className="w-full max-w-md mx-auto opacity-50">
             <ScribbleLine />
           </div>

           <div className="font-serif text-lg md:text-xl text-brand-dark leading-loose space-y-6">
              <p className="first-letter:text-5xl first-letter:font-sketch first-letter:text-brand-orange first-letter:mr-1 first-letter:float-left">
                Acreditamos que a mesa é um lugar sagrado. Não pelo ritual rígido, mas pela magia do encontro.
              </p>
              
              <p>
                A <strong className="text-brand-orange">Bergamota</strong> e a <strong className="text-brand-pink">Lubisca</strong> nasceram dessa vontade de conectar. De pegar a memória de um domingo na casa da avó e misturar com a técnica apurada de anos de cozinha profissional.
              </p>

              <blockquote className="font-sketch text-3xl text-brand-purple my-8 py-4 border-t border-b border-brand-purple/20">
                "Comida não é só nutrição. É afeto que se mastiga."
              </blockquote>

              <p>
                Este jantar não é apenas sobre o que está no prato. É sobre o som das taças brindando, a risada que escapa alta demais, o cheiro que te faz fechar os olhos e viajar no tempo.
              </p>
              
              <p>
                Cozinhamos para contar histórias. E queremos que você faça parte deste capítulo.
              </p>
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