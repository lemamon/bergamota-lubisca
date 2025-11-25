import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Section } from '../shared/Section';
import { PaperCard } from '../shared/PaperCard';
import { JarLogo } from '../Icons';

interface ReservationSuccessProps {
  formData: {
    name: string;
    email: string;
    qty: number;
    date: string;
    obs: string;
  };
}

export const ReservationSuccess: React.FC<ReservationSuccessProps> = ({ formData }) => {
  const { t } = useTranslation();
  
  return (
    <Section maxWidth="max-w-2xl" className="animate-fade-in-up">
      <PaperCard innerClassName="p-4 md:p-8">
         <div className="border-[3px] border-dashed border-brand-orange p-6 flex flex-col items-center text-center">
            
            <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center mb-6 animate-bounce">
              <Check className="text-white w-10 h-10" strokeWidth={3} />
            </div>

            <h2 className="font-sketch text-5xl text-brand-purple mb-2">{t('reservation.success.title')}</h2>
            <p className="font-serif italic text-brand-dark/80 text-xl mb-8">
              {t('reservation.success.subtitle')}
            </p>

            {/* TICKET STUB VISUAL */}
            <div className="bg-white border-2 border-brand-dark w-full max-w-md relative p-6 shadow-sm transform -rotate-1">
               <div className="absolute -left-3 top-1/2 w-6 h-6 bg-brand-cream rounded-full border-r-2 border-brand-dark transform -translate-y-1/2"></div>
               <div className="absolute -right-3 top-1/2 w-6 h-6 bg-brand-cream rounded-full border-l-2 border-brand-dark transform -translate-y-1/2"></div>
               
               <div className="text-left border-b-2 border-dotted border-brand-dark/20 pb-4 mb-4">
                  <div className="text-xs font-bold tracking-[0.2em] text-brand-purple uppercase mb-1">{t('reservation.success.guest')}</div>
                  <div className="font-sketch text-3xl text-brand-dark">{formData.name}</div>
               </div>

               <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs font-bold tracking-[0.2em] text-brand-purple uppercase mb-1">{t('reservation.success.tableFor')}</div>
                    <div className="font-sketch text-3xl text-brand-pink">{formData.qty} {t('reservation.success.people')}</div>
                  </div>
                  <div className="text-right">
                     <JarLogo /> 
                     <div className="w-12 h-12 absolute bottom-4 right-4 opacity-10"></div>
                  </div>
               </div>
            </div>

            <div className="mt-10">
              <p className="font-sans text-xs text-brand-purple/60 uppercase tracking-widest">
                {t('reservation.success.confirmationSent')} {formData.email}
              </p>
            </div>
         </div>
      </PaperCard>
    </Section>
  );
};