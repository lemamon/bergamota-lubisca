
import React from 'react';
import { View } from '../../types';
import { NavButton } from './NavButton';

interface SidebarProps {
  activeView: View;
  onNavigate: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate }) => {
  return (
    <aside className="hidden lg:flex w-72 flex-col justify-between border-r-2 border-dashed border-brand-purple/30 p-8 sticky top-0 h-screen bg-brand-cream/80 backdrop-blur-sm">
      <nav className="flex flex-col gap-4 mt-8">
        {/* Logo Text Only for sidebar */}
        <div 
          className="mb-8 text-brand-purple font-logo font-bold text-xl tracking-widest text-center border-b-2 border-brand-pink pb-4 cursor-pointer hover:text-brand-orange transition-colors"
          onClick={() => onNavigate('home')}
        >
          HOME
        </div>

        <NavButton text="O EVENTO" isActive={activeView === 'event'} onClick={() => onNavigate('event')} />
        <NavButton text="CARDÁPIO" isActive={activeView === 'menu'} onClick={() => onNavigate('menu')} />
        <NavButton text="AS CHEFS" isActive={activeView === 'chefs'} onClick={() => onNavigate('chefs')} />
        <NavButton text="QUEM SOMOS" isActive={activeView === 'team'} onClick={() => onNavigate('team')} />
        <NavButton text="LOJINHA" isActive={activeView === 'store'} onClick={() => onNavigate('store')} />
        <NavButton text="BLOG" isActive={activeView === 'blog'} onClick={() => onNavigate('blog')} />
        <NavButton text="MANIFESTO" isActive={activeView === 'manifesto'} onClick={() => onNavigate('manifesto')} />
        <NavButton text="CONTATO" isActive={activeView === 'contact'} onClick={() => onNavigate('contact')} />
        
        <div className="my-2 border-t border-dotted border-brand-purple/20"></div>
        
        <NavButton text="MENU COMPLETO" isActive={activeView === 'all'} onClick={() => onNavigate('all')} />
        <NavButton text="COMPACTO" isActive={activeView === 'compact'} onClick={() => onNavigate('compact')} />
        
        <div className="mt-8 pt-8 border-t-2 border-dotted border-brand-purple/20">
          <div className="font-sketch text-4xl text-brand-orange mb-1 drop-shadow-[2px_2px_0px_rgba(69,29,136,0.2)]">GASTRONOMIA</div>
          <div className="font-sketch text-4xl text-brand-pink transform -rotate-2 drop-shadow-[2px_2px_0px_rgba(69,29,136,0.2)]">AFETIVA</div>
        </div>
      </nav>
    </aside>
  );
};
