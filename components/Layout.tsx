import React, { useState } from 'react';
import { JarLogo } from './Icons';
import { SketchyArrowRight, ScribbleLine } from './shared/Decorations';
import { Menu, ShoppingBag, X, Star } from 'lucide-react';
import { View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeView: View;
  onNavigate: (view: View) => void;
}

const NavButton = ({ text, isActive, onClick }: { text: string; isActive: boolean; onClick: () => void }) => (
  <button onClick={onClick} className="w-full group flex items-center justify-between py-1 relative text-left">
    <span className={`z-10 text-3xl font-sketch transition-all duration-300 ${isActive ? 'text-brand-pink font-bold' : 'text-brand-purple group-hover:text-brand-orange'}`}>
      {text}
    </span>
    {/* Hover highlight */}
    <div className="absolute bottom-1 left-0 w-0 h-3 bg-brand-cream group-hover:w-full transition-all duration-300 -z-0 opacity-50"></div>
    
    <span className={`opacity-0 transition-opacity text-brand-pink ${isActive ? 'opacity-100' : 'group-hover:opacity-100'}`}>
      <SketchyArrowRight />
    </span>
  </button>
);

export const Layout: React.FC<LayoutProps> = ({ children, activeView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNav = (view: View) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  // Determine if we should show the big logo in the header
  const showHeaderLogo = activeView !== 'home';

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark flex flex-col font-sans relative overflow-hidden selection:bg-brand-pink selection:text-white">
      
      {/* Background Pattern - Polka dots using Brand Purple */}
      <div className="fixed inset-0 bg-[size:20px_20px] bg-dot-pattern opacity-[0.05] pointer-events-none z-0"></div>

      {/* Top Border Decoration */}
      <div className="h-3 w-full bg-brand-purple overflow-hidden flex items-center gap-4">
        {[...Array(30)].map((_, i) => (
           <div key={i} className="w-full border-t-2 border-brand-cream transform -rotate-12 scale-150"></div>
        ))}
      </div>

      <div className="flex-1 flex flex-col lg:flex-row relative z-10">
        
        {/* --- LEFT SIDEBAR (Navigation) --- */}
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
            <NavButton text="MANIFESTO" isActive={activeView === 'manifesto'} onClick={() => onNavigate('manifesto')} />
            <NavButton text="CONTATO" isActive={activeView === 'contact'} onClick={() => onNavigate('contact')} />
            <NavButton text="COMPACTO" isActive={activeView === 'compact'} onClick={() => onNavigate('compact')} />
            
            <div className="mt-8 pt-8 border-t-2 border-dotted border-brand-purple/20">
              <div className="font-sketch text-4xl text-brand-orange mb-1 drop-shadow-[2px_2px_0px_rgba(69,29,136,0.2)]">GASTRONOMIA</div>
              <div className="font-sketch text-4xl text-brand-pink transform -rotate-2 drop-shadow-[2px_2px_0px_rgba(69,29,136,0.2)]">AFETIVA</div>
            </div>
          </nav>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-1 relative flex flex-col items-center">
          
          {/* Header Area (Centered Logo) - Conditionally rendered */}
          <header className={`w-full pt-10 pb-4 flex flex-col items-center justify-center relative transition-all duration-500 ${showHeaderLogo ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none absolute'}`}>
            
            {/* Logo Container with "Sunburst" effect behind it */}
            <div 
              className="relative w-32 h-32 md:w-48 md:h-48 group cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="absolute inset-0 bg-brand-orange rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl transform scale-75"></div>
              <div className="relative z-10 w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                <JarLogo />
              </div>
            </div>
            
            {/* Tagline */}
            <div className="mt-4 font-sketch text-2xl text-brand-purple transform -rotate-1 text-center px-4">
              cozinha de <span className="text-brand-pink font-bold">alma</span> & <span className="text-brand-orange font-bold">amizade</span>
            </div>
          </header>

          {/* Mobile Menu Toggle */}
          <button 
              className="absolute top-6 right-6 lg:hidden text-brand-purple p-2 hover:bg-brand-purple/10 rounded-full z-40"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Children Content */}
          <div className="w-full px-4 md:px-12 pb-24">
             {/* Info Line (Only show on specific internal pages) */}
             {(activeView === 'menu' || activeView === 'reservation') && (
               <div className="w-full text-center mb-8 flex items-center justify-center gap-3 animate-pulse">
                 <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
                 <span className="text-brand-purple/80 font-bold tracking-widest text-xs uppercase font-sans border-b border-brand-pink">
                   VAGAS LIMITADAS PARA ESTA EXPERIÊNCIA
                 </span>
                 <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
               </div>
             )}

             {children}
          </div>

        </main>

        {/* --- RIGHT SIDEBAR (Cart/Context) --- */}
        <aside className="hidden lg:flex w-64 flex-col border-l-2 border-dashed border-brand-purple/30 p-8 sticky top-0 h-screen text-right bg-brand-cream/80 backdrop-blur-sm">
           
           {/* Cart Widget */}
           <div className="flex flex-col items-end gap-2 mb-12 group cursor-pointer">
              <div className="relative">
                <ShoppingBag size={48} className="text-brand-purple stroke-1" />
                <div className="absolute -top-2 -right-2 bg-brand-orange text-brand-cream font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm border border-brand-purple">
                  0
                </div>
              </div>
              <span className="text-3xl tracking-widest font-sketch text-brand-purple mt-2">TICKETS</span>
              <div className="h-1 w-full bg-brand-purple rounded-full"></div>
           </div>

           {/* Quick Filters */}
           <div className="flex flex-col gap-3 text-brand-purple font-sketch text-2xl">
             {['JANTAR', 'BEBIDAS', 'HARMONIZAÇÃO', 'LOJINHA'].map((item) => (
                <a key={item} href="#" className="flex items-center justify-end gap-2 hover:text-brand-pink transition-colors group">
                  <span className="group-hover:mr-2 transition-all">{item}</span>
                  <div className="w-2 h-2 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100"></div>
                </a>
             ))}
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

        {/* --- MOBILE OVERLAY MENU --- */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-brand-cream z-50 flex flex-col p-8 lg:hidden overflow-hidden">
             {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
            
            <div className="flex justify-end mb-8 relative z-10">
              <button onClick={() => setMobileMenuOpen(false)} className="text-brand-purple bg-white p-2 rounded-full border border-brand-purple shadow-lg">
                <X size={32} />
              </button>
            </div>
            
            <nav className="flex flex-col items-center gap-6 relative z-10">
              <button onClick={() => handleMobileNav('home')} 
                   className="font-sketch text-5xl text-brand-purple hover:text-brand-pink transition-colors">
                  HOME
              </button>
              <button onClick={() => handleMobileNav('event')} 
                   className="font-sketch text-5xl text-brand-purple hover:text-brand-pink transition-colors">
                  O EVENTO
              </button>
              <button onClick={() => handleMobileNav('menu')} 
                   className="font-sketch text-5xl text-brand-purple hover:text-brand-pink transition-colors">
                  CARDÁPIO
              </button>
              <button onClick={() => handleMobileNav('reservation')} 
                   className="font-sketch text-5xl text-brand-purple hover:text-brand-pink transition-colors">
                  RESERVAR
              </button>
              <button onClick={() => handleMobileNav('chefs')} 
                   className="font-sketch text-5xl text-brand-purple hover:text-brand-pink transition-colors">
                  AS CHEFS
              </button>
              <button onClick={() => handleMobileNav('manifesto')} 
                   className="font-sketch text-5xl text-brand-purple hover:text-brand-pink transition-colors">
                  MANIFESTO
              </button>
               <button onClick={() => handleMobileNav('contact')} 
                   className="font-sketch text-5xl text-brand-purple hover:text-brand-pink transition-colors">
                  CONTATO
              </button>
              <button onClick={() => handleMobileNav('compact')} 
                   className="font-sketch text-5xl text-brand-purple hover:text-brand-pink transition-colors">
                  COMPACTO
              </button>
            </nav>

            <div className="mt-auto flex justify-center relative z-10">
               <div className="w-32 h-32 animate-bounce-slow">
                 <JarLogo />
               </div>
            </div>
          </div>
        )}

      </div>

      {/* FIXED FAB RESERVATION BUTTON */}
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

             <span className="font-sketch text-3xl font-bold text-brand-purple leading-none mt-2">RESERVAR</span>
             <div className="w-3/4 h-[2px] bg-brand-purple/10 my-1 rounded-full"></div>
             <span className="font-sans text-[10px] font-bold text-brand-dark/60 tracking-[0.2em] uppercase mb-1 group-hover:text-brand-pink transition-colors">
               AGORA
             </span>
          </div>
      </button>
      
      {/* Footer */}
      <footer className="w-full bg-brand-purple text-brand-cream p-4 text-center font-sketch text-xl border-t-4 border-brand-pink">
         <p>© 2024 Bergamota Lubisca. Uma experiência única.</p>
      </footer>
    </div>
  );
};