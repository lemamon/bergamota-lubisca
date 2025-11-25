
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from '../../types';
import { X } from 'lucide-react';
import { JarLogo } from '../Icons';

interface MobileMenuProps {
  onNavigate: (view: View) => void;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ onNavigate, onClose }) => {
  const { t } = useTranslation();
  const handleMobileNav = (view: View) => {
    onNavigate(view);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-brand-cream z-50 flex flex-col p-8 lg:hidden overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
      
      <div className="flex justify-end mb-8 relative z-10">
        <button onClick={onClose} className="text-brand-purple bg-white p-2 rounded-full border border-brand-purple shadow-lg">
          <X size={32} />
        </button>
      </div>
      
      <nav className="flex flex-col items-center gap-6 relative z-10 overflow-y-auto max-h-[70vh]">
        <button onClick={() => handleMobileNav('home')} 
             className="font-sketch text-4xl text-brand-purple hover:text-brand-pink transition-colors">
            {t('nav.home')}
        </button>
        <button onClick={() => handleMobileNav('event')} 
             className="font-sketch text-4xl text-brand-purple hover:text-brand-pink transition-colors">
            {t('nav.event')}
        </button>
        <button onClick={() => handleMobileNav('menu')} 
             className="font-sketch text-4xl text-brand-purple hover:text-brand-pink transition-colors">
            {t('nav.menu')}
        </button>
         <button onClick={() => handleMobileNav('store')} 
             className="font-sketch text-4xl text-brand-purple hover:text-brand-pink transition-colors">
            {t('nav.store')}
        </button>
        <button onClick={() => handleMobileNav('blog')} 
             className="font-sketch text-4xl text-brand-purple hover:text-brand-pink transition-colors">
            {t('nav.blog')}
        </button>
        <button onClick={() => handleMobileNav('reservation')} 
             className="font-sketch text-4xl text-brand-purple hover:text-brand-pink transition-colors">
            {t('nav.reserve')}
        </button>
        <button onClick={() => handleMobileNav('chefs')} 
             className="font-sketch text-4xl text-brand-purple hover:text-brand-pink transition-colors">
            {t('nav.chefs')}
        </button>
        <button onClick={() => handleMobileNav('team')} 
             className="font-sketch text-4xl text-brand-purple hover:text-brand-pink transition-colors">
            {t('nav.team')}
        </button>
        <button onClick={() => handleMobileNav('manifesto')} 
             className="font-sketch text-4xl text-brand-purple hover:text-brand-pink transition-colors">
            {t('nav.manifesto')}
        </button>
         <button onClick={() => handleMobileNav('contact')} 
             className="font-sketch text-4xl text-brand-purple hover:text-brand-pink transition-colors">
            {t('nav.contact')}
        </button>
        <div className="w-16 border-t border-brand-purple/20 my-2"></div>
        <button onClick={() => handleMobileNav('all')} 
             className="font-sketch text-4xl text-brand-orange hover:text-brand-pink transition-colors">
            {t('nav.fullMenu')}
        </button>
      </nav>

      <div className="mt-auto flex justify-center relative z-10 pt-4">
         <div className="w-24 h-24 animate-bounce-slow">
           <JarLogo />
         </div>
      </div>
    </div>
  );
};
