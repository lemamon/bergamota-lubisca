import React from 'react';
import { useTranslation } from 'react-i18next';
import { BergamotIcon, SmallJarIcon } from '../Icons';

interface ChefProfileProps {
  type: 'bergamota' | 'lubisca';
  title: string;
  description: string;
}

export const ChefProfile: React.FC<ChefProfileProps> = ({ type, title, description }) => {
  const { t } = useTranslation();
  const isBergamota = type === 'bergamota';
  const colorClass = isBergamota ? 'brand-orange' : 'brand-pink';
  const borderColorClass = isBergamota ? 'border-brand-orange' : 'border-brand-pink';
  const bgColorClass = isBergamota ? 'bg-brand-orange/10' : 'bg-brand-pink/10';
  const rotationClass = isBergamota ? 'group-hover:rotate-6' : 'group-hover:-rotate-6';
  const chefName = isBergamota ? t('chefs.bergamota.name') : t('chefs.lubisca.name');
  
  return (
    <div className="flex flex-col items-center text-center group">
       <div className={`w-48 h-48 rounded-full border-4 border-dashed ${borderColorClass} p-2 mb-6 relative transition-transform duration-500 ${rotationClass}`}>
          <div className={`w-full h-full ${bgColorClass} rounded-full flex items-center justify-center overflow-hidden relative`}>
            {isBergamota ? (
              <BergamotIcon className={`w-24 h-24 text-${colorClass}/80`} />
            ) : (
              <SmallJarIcon className={`w-24 h-24 text-${colorClass}/80`} />
            )}
            <div className={`absolute inset-0 bg-gradient-to-t from-${colorClass}/20 to-transparent`}></div>
          </div>
          <div className={`absolute -bottom-2 ${isBergamota ? '-right-2 rotate-3' : '-left-2 -rotate-3'} bg-brand-cream border border-brand-purple px-3 py-1 font-sketch text-xl text-brand-dark shadow-sm`}>
            {chefName}
          </div>
       </div>

       <h3 className="font-serif font-bold text-2xl text-brand-dark mb-2">{title}</h3>
       <div className={`w-12 h-1 bg-${colorClass} mb-4`}></div>
       
       <p className="font-serif italic text-brand-dark/80 leading-relaxed px-4">
         {description}
       </p>
    </div>
  );
};