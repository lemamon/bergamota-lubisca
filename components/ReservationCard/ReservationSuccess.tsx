import React from 'react';
import { Check } from 'lucide-react';
import { Section } from '../shared/Section';
import { PaperCard } from '../shared/PaperCard';
import { JarLogo } from '../Icons';

interface ReservationSuccessProps {
  formData: {
    name: string;
    email: string;
    guests: number;
    date: string;
  };
}

export const ReservationSuccess: React.FC<ReservationSuccessProps> = ({ formData }) => {
  return (
    <Section maxWidth="max-w-2xl" className="animate-fade-in-up">
      <PaperCard innerClassName="p-4 md:p-8">
         <div className="border-[3px] border-dashed border-brand-orange p-6 flex flex-col items-center text-center">
            
            <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center mb-6 animate-bounce">
              <Check className="text-white w-10 h-10" strokeWidth={3} />
            </div>

            <h2 className="font-sketch text-5xl text-brand-purple mb-2">Reserva Confirmada!</h2>
            <p className="font-serif italic text-brand-dark/80 text-xl mb-8">
              Mal podemos esperar para te receber nesta noite especial.
            </p>

            {/* TICKET STUB VISUAL */}
            <div className="bg-white border-2 border-brand-dark w-full max-w-md relative p-6 shadow-sm transform -rotate-1">
               <div className="absolute -left-3 top-1/2 w-6 h-6 bg-brand-cream rounded-full border-r-2 border-brand-dark transform -translate-y-1/2"></div>
               <div className="absolute -right-3 top-1/2 w-6 h-6 bg-brand-cream rounded-full border-l-2 border-brand-dark transform -translate-y-1/2"></div>
               
               <div className="text-left border-b-2 border-dotted border-brand-dark/20 pb-4 mb-4">
                  <div className="text-xs font-bold tracking-[0.2em] text-brand-purple uppercase mb-1">CONVIDADO</div>
                  <div className="font-sketch text-3xl text-brand-dark">{formData.name}</div>
               </div>

               <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs font-bold tracking-[0.2em] text-brand-purple uppercase mb-1">MESA PARA</div>
                    <div className="font-sketch text-3xl text-brand-pink">{formData.guests} Pessoas</div>
                  </div>
                  <div className="text-right">
                     <JarLogo /> 
                     <div className="w-12 h-12 absolute bottom-4 right-4 opacity-10"></div>
                  </div>
               </div>
            </div>

            <div className="mt-10">
              <p className="font-sans text-xs text-brand-purple/60 uppercase tracking-widest">
                Um e-mail de confirmação foi enviado para {formData.email}
              </p>
            </div>
         </div>
      </PaperCard>
    </Section>
  );
};