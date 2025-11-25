

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { View } from '../../types';
import { NavButton } from './NavButton';

interface SidebarProps {
  activeView: View;
  onNavigate: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate }) => {
  const { t } = useTranslation();
  return (
    <aside className="hidden lg:flex w-72 flex-col justify-between border-r-2 border-dashed border-brand-purple/30 p-8 sticky top-0 h-screen bg-brand-cream/80 backdrop-blur-sm">
      <nav className="flex flex-col gap-4 mt-8">
        <Link 
          to="/"
          className="mb-8 text-brand-purple font-logo font-bold text-xl tracking-widest text-center border-b-2 border-brand-pink pb-4 cursor-pointer hover:text-brand-orange transition-colors"
        >
          {t('nav.home')}
        </Link>

        <NavButton text={t('nav.event')} isActive={activeView === 'event'} onClick={() => onNavigate('event')} to="/event" />
        <NavButton text={t('nav.menu')} isActive={activeView === 'menu'} onClick={() => onNavigate('menu')} to="/menu" />
        <NavButton text={t('nav.chefs')} isActive={activeView === 'chefs'} onClick={() => onNavigate('chefs')} to="/chefs" />
        <NavButton text={t('nav.team')} isActive={activeView === 'team'} onClick={() => onNavigate('team')} to="/team" />
        <NavButton text={t('nav.store')} isActive={activeView === 'store'} onClick={() => onNavigate('store')} to="/store" />
        <NavButton text={t('nav.blog')} isActive={activeView === 'blog'} onClick={() => onNavigate('blog')} to="/blog" />
        <NavButton text={t('nav.manifesto')} isActive={activeView === 'manifesto'} onClick={() => onNavigate('manifesto')} to="/manifesto" />
        <NavButton text={t('nav.contact')} isActive={activeView === 'contact'} onClick={() => onNavigate('contact')} to="/contact" />
        
        <div className="my-2 border-t border-dotted border-brand-purple/20"></div>
        
        <NavButton text={t('nav.fullMenu')} isActive={activeView === 'all'} onClick={() => onNavigate('all')} to="/all" />
        <NavButton text={t('nav.compact')} isActive={activeView === 'compact'} onClick={() => onNavigate('compact')} to="/compact" />
        
        <div className="mt-8 pt-8 border-t-2 border-dotted border-brand-purple/20">
          <div className="font-sketch text-4xl text-brand-orange mb-1 drop-shadow-[2px_2px_0px_rgba(69,29,136,0.2)]">{t('layout.affectiveGastronomy')}</div>
          <div className="font-sketch text-4xl text-brand-pink transform -rotate-2 drop-shadow-[2px_2px_0px_rgba(69,29,136,0.2)]">{t('layout.affectiveGastronomySecond')}</div>
        </div>
      </nav>
    </aside>
  );
};
