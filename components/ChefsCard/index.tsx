import React from 'react';
import { useTranslation } from 'react-i18next';
import { StarDoodle, DiamondDivider } from '../shared/Decorations';
import { Section } from '../shared/Section';
import { PaperCard } from '../shared/PaperCard';
import { ChefProfile } from './ChefProfile';

export const ChefsCard: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Section>
       {/* Background Decor */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand-purple/5 -rotate-2 rounded-xl -z-10"></div>

       <PaperCard>
          <StarDoodle className="absolute top-6 left-6 w-6 h-6 text-brand-orange animate-spin-slow" />
          <StarDoodle className="absolute bottom-6 right-6 w-6 h-6 text-brand-pink animate-spin-slow" />

          <h2 className="font-sketch text-6xl text-brand-dark text-center mb-12">{t('chefs.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            
            <ChefProfile 
              type="bergamota" 
              title={t('chefs.bergamota.tagline')}
              description={t('chefs.bergamota.description')}
            />

            {/* DIVIDER FOR MOBILE */}
            <div className="md:hidden w-full">
              <DiamondDivider />
            </div>

            <ChefProfile 
              type="lubisca" 
              title={t('chefs.lubisca.tagline')}
              description={t('chefs.lubisca.description')}
            />

          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <DiamondDivider />
            <p className="mt-8 font-sketch text-3xl text-brand-purple">
              {t('chefs.together')}
            </p>
          </div>
       </PaperCard>
    </Section>
  );
};