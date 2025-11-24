import React from 'react';
import { BergamotIcon, SmallJarIcon } from './Icons';
import { StarDoodle, DiamondDivider } from './shared/Decorations';
import { Section } from './ui/Section';
import { PaperCard } from './ui/PaperCard';

export const ChefsCard: React.FC = () => {
  return (
    <Section>
       {/* Background Decor */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand-purple/5 -rotate-2 rounded-xl -z-10"></div>

       <PaperCard>
          <StarDoodle className="absolute top-6 left-6 w-6 h-6 text-brand-orange animate-spin-slow" />
          <StarDoodle className="absolute bottom-6 right-6 w-6 h-6 text-brand-pink animate-spin-slow" />

          <h2 className="font-sketch text-6xl text-brand-dark text-center mb-12">Quem Cozinha</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            
            {/* BERGAMOTA PROFILE */}
            <div className="flex flex-col items-center text-center group">
               <div className="w-48 h-48 rounded-full border-4 border-dashed border-brand-orange p-2 mb-6 relative transition-transform duration-500 group-hover:rotate-6">
                  <div className="w-full h-full bg-brand-orange/10 rounded-full flex items-center justify-center overflow-hidden relative">
                    <BergamotIcon className="w-24 h-24 text-brand-orange/80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/20 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-brand-cream border border-brand-purple px-3 py-1 font-sketch text-xl text-brand-dark rotate-3 shadow-sm">
                    A Bergamota
                  </div>
               </div>

               <h3 className="font-serif font-bold text-2xl text-brand-dark mb-2">Cozinha de Memória</h3>
               <div className="w-12 h-1 bg-brand-orange mb-4"></div>
               
               <p className="font-serif italic text-brand-dark/80 leading-relaxed px-4">
                 "Cozinhar é resgatar o que a gente nem sabia que tinha esquecido. Minha busca é pelo conforto, pelo abraço em forma de comida, mas sempre com aquele toque ácido que desperta o paladar."
               </p>
            </div>

            {/* DIVIDER FOR MOBILE */}
            <div className="md:hidden w-full">
              <DiamondDivider />
            </div>

            {/* LUBISCA PROFILE */}
            <div className="flex flex-col items-center text-center group">
               <div className="w-48 h-48 rounded-full border-4 border-dashed border-brand-pink p-2 mb-6 relative transition-transform duration-500 group-hover:-rotate-6">
                  <div className="w-full h-full bg-brand-pink/10 rounded-full flex items-center justify-center overflow-hidden relative">
                    <SmallJarIcon className="w-24 h-24 text-brand-pink/80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/20 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-brand-cream border border-brand-purple px-3 py-1 font-sketch text-xl text-brand-dark -rotate-3 shadow-sm">
                    A Lubisca
                  </div>
               </div>

               <h3 className="font-serif font-bold text-2xl text-brand-dark mb-2">Fermentação & Ousadia</h3>
               <div className="w-12 h-1 bg-brand-pink mb-4"></div>
               
               <p className="font-serif italic text-brand-dark/80 leading-relaxed px-4">
                 "O tempo é o melhor ingrediente. Minha cozinha é viva, colorida e paciente. Gosto de ver a transformação dos alimentos e trazer para a mesa sabores que desafiam e encantam."
               </p>
            </div>

          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <DiamondDivider />
            <p className="mt-8 font-sketch text-3xl text-brand-purple">
              Duas amigas. Duas cozinhas. Uma só mesa.
            </p>
          </div>
       </PaperCard>
    </Section>
  );
};