import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { JarLogo } from '../Icons';
import { Menu, Star, X } from 'lucide-react';
import { View } from '../../types';
import { Sidebar } from './Sidebar';
import { RightSidebar } from './RightSidebar';
import { MobileMenu } from './MobileMenu';
import { ReservationFAB } from './ReservationFAB';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Convert path to view for active state
  const getViewFromPath = (path: string): View => {
    const cleanPath = path.replace('/', '') || 'home';
    if (cleanPath.startsWith('product/')) return 'product-details';
    if (cleanPath.startsWith('blog/') && cleanPath !== 'blog') return 'blog-post';
    return cleanPath as View;
  };

  const activeView = getViewFromPath(location.pathname);

  const handleNavigate = (view: View) => {
    navigate(`/${view === 'home' ? '' : view}`);
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
        
        <Sidebar activeView={activeView} onNavigate={handleNavigate} />

        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-1 relative flex flex-col items-center">
          
          {/* Header Area (Centered Logo) - Conditionally rendered */}
          <header className={`w-full pt-10 pb-4 flex flex-col items-center justify-center relative transition-all duration-500 ${showHeaderLogo ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none absolute'}`}>
            
            {/* Logo Container with "Sunburst" effect behind it */}
            <div 
              className="relative w-32 h-32 md:w-48 md:h-48 group cursor-pointer"
              onClick={() => handleNavigate('home')}
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

        <RightSidebar activeView={activeView} onNavigate={handleNavigate} />

        {/* --- MOBILE OVERLAY MENU --- */}
        {mobileMenuOpen && (
          <MobileMenu onNavigate={handleNavigate} onClose={() => setMobileMenuOpen(false)} />
        )}

      </div>

      <ReservationFAB activeView={activeView} onNavigate={handleNavigate} />
      
      {/* Footer */}
      <footer className="w-full bg-brand-purple text-brand-cream p-4 text-center font-sketch text-xl border-t-4 border-brand-pink">
         <p>© 2024 Bergamota Lubisca. Uma experiência única.</p>
      </footer>
    </div>
  );
};
