

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { View } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface RightSidebarProps {
  activeView: View;
  onNavigate: (view: View) => void;
}

interface QuickLink {
  label: string;
  action?: () => void;
  href?: string;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ activeView, onNavigate }) => {
  const { itemCount } = useCart();

  // Logic for contextual links
  const getContextLinks = (): QuickLink[] => {
    switch (activeView) {
      case 'menu':
      case 'all':
        return [
          { label: 'SNACKS' },
          { label: 'ENTRADAS' },
          { label: 'PRINCIPAIS' },
          { label: 'SOBREMESAS' }
        ];
      case 'store':
        return [
          { label: 'FERMENTADOS' },
          { label: 'CONSERVAS' },
          { label: 'VESTUÁRIO' },
          { label: 'KITS' }
        ];
      case 'checkout':
        return [
          { label: 'CONTINUAR', action: () => onNavigate('store') },
          { label: 'LOJINHA', action: () => onNavigate('store') },
        ];
      case 'blog':
        return [
          { label: 'TÉCNICAS' },
          { label: 'HISTÓRIAS' },
          { label: 'BASTIDORES' },
        ];
      default:
        return [
          { label: 'O JANTAR', action: () => onNavigate('event') },
          { label: 'CARDÁPIO', action: () => onNavigate('menu') },
          { label: 'LOJINHA', action: () => onNavigate('store') },
          { label: 'BLOG', action: () => onNavigate('blog') },
          { label: 'RESERVAR', action: () => onNavigate('reservation') }
        ];
    }
  };

  const contextLinks = getContextLinks();
  const contextTitle = activeView === 'menu' || activeView === 'all' ? 'SEÇÕES' : 
                       activeView === 'store' ? 'CATEGORIAS' : 
                       activeView === 'blog' ? 'TEMAS' : 'ATALHOS';

  return (
    <aside className="hidden lg:flex w-64 flex-col border-l-2 border-dashed border-brand-purple/30 p-8 sticky top-0 h-screen text-right bg-brand-cream/80 backdrop-blur-sm">
       
       {/* Cart Widget */}
       <div 
         className="flex flex-col items-end gap-2 mb-12 group cursor-pointer" 
         onClick={() => onNavigate('checkout')}
       >
          <div className="relative transform group-hover:scale-105 transition-transform">
            <ShoppingBag size={48} className="text-brand-purple stroke-1" />
            <div className={`absolute -top-2 -right-2 bg-brand-orange text-brand-cream font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm border border-brand-purple transition-all ${itemCount > 0 ? 'scale-110' : ''}`}>
              {itemCount}
            </div>
          </div>
          <span className="text-3xl tracking-widest font-sketch text-brand-purple mt-2 group-hover:text-brand-pink transition-colors">SACOLA</span>
          <div className="h-1 w-full bg-brand-purple rounded-full group-hover:bg-brand-pink transition-colors"></div>
       </div>

       {/* Quick Filters / Context Links */}
       <div className="flex flex-col gap-1">
         <span className="text-xs font-bold tracking-widest text-brand-dark/40 mb-4">{contextTitle}</span>
         
         <div className="flex flex-col gap-3 text-brand-purple font-sketch text-2xl">
            {contextLinks.map((item) => (
              <button 
                key={item.label} 
                onClick={item.action}
                className={`flex items-center justify-end gap-2 hover:text-brand-pink transition-colors group ${!item.action ? 'cursor-default' : ''}`}
              >
                <span className="group-hover:mr-2 transition-all">{item.label}</span>
                <div className="w-2 h-2 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100"></div>
              </button>
            ))}
         </div>
       </div>

       {/* Location Info */}
       <div className="mt-auto mb-8 flex flex-col items-end gap-1">
         <div className="flex items-center gap-2 mb-2">
            <span className="text-brand-pink">▼</span>
            <span className="font-bold tracking-widest text-sm font-sans text-brand-dark">LOCALIZAÇÃO</span>
         </div>
         <div className="flex flex-col gap-1 text-sm font-bold font-sans text-brand-purple/60">
           <span className="hover:text-brand-orange cursor-default">RUA DAS FLORES, 123</span>
           <span className="hover:text-brand-orange cursor-default">CENTRO HISTÓRICO</span>
         </div>
       </div>
    </aside>
  );
};