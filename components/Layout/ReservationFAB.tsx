import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { View } from '../../types';

interface ReservationFABProps {
  activeView: View;
  onNavigate: (view: View) => void;
}

export const ReservationFAB: React.FC<ReservationFABProps> = ({ activeView, onNavigate }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={() => onNavigate('reservation')}
      className={`fixed bottom-6 right-6 z-50 w-[150px] group transition-all duration-500 ease-in-out hover:scale-105 ${activeView === 'reservation' ? 'opacity-0 pointer-events-none translate-y-20' : 'opacity-100 translate-y-0'}`}
    >
        {/* Shadow/Background Layer */}
        <div className="absolute inset-0 bg-brand-pink rounded-xl shadow-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
        
        {/* Main Button Body */}
        <div className="relative bg-brand-cream border-2 border-brand-purple rounded-xl p-2 flex flex-col items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.1)] group-active:translate-y-1 group-active:shadow-none transition-all">
           {/* Decorative 'Pin' or Icon */}
           <div className="absolute -top-3 -right-3 bg-brand-orange text-white rounded-full p-1 border border-brand-purple shadow-sm transform group-hover:rotate-12 transition-transform">
              <Star size={16} fill="currentColor" />
           </div>

           <span className="font-sketch text-3xl font-bold text-brand-purple leading-none mt-2">{t('nav.reserve')}</span>
           <div className="w-3/4 h-[2px] bg-brand-purple/10 my-1 rounded-full"></div>
           <span className="font-sans text-[10px] font-bold text-brand-dark/60 tracking-[0.2em] uppercase mb-1 group-hover:text-brand-pink transition-colors">
             {t('nav.reserveNow')}
           </span>
        </div>
    </button>
  );
};