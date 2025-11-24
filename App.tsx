

import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout/index';
import { HomeCard } from './components/HomeCard/index';
import { EventCard } from './components/EventCard/index';
import { MenuCard } from './components/MenuCard/index';
import { ReservationCard } from './components/ReservationCard/index';
import { ChefsCard } from './components/ChefsCard/index';
import { ManifestoCard } from './components/ManifestoCard/index';
import { ContactCard } from './components/ContactCard/index';
import { CompactCard } from './components/CompactCard/index';
import { AllCard } from './components/AllCard/index';
import { StoreCard } from './components/StoreCard/index';
import { CheckoutCard } from './components/CheckoutCard/index';
import { ProductDetailsCard } from './components/ProductDetailsCard/index';
import { BlogCard } from './components/BlogCard/index';
import { BlogPostDetailCard } from './components/BlogPostDetailCard/index';
import { TeamCard } from './components/TeamCard/index';
import { View } from './types';
import { CartProvider } from './contexts/CartContext';

const App: React.FC = () => {
  // Initialize state based on URL hash to support direct access to /#compact
  const [currentView, setCurrentView] = useState<View>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'compact') return 'compact';
      if (hash === 'all') return 'all';
      if (hash === 'store') return 'store';
      if (hash === 'checkout') return 'checkout';
      if (hash === 'blog') return 'blog';
      if (hash === 'team') return 'team';
      // Basic check if the hash matches other views, otherwise default to home
      if (['home', 'event', 'menu', 'reservation', 'chefs', 'manifesto', 'contact'].includes(hash)) {
        return hash as View;
      }
    }
    return 'home';
  });

  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  // Sync URL hash with current view (optional, but good UX)
  useEffect(() => {
    if (currentView !== 'product-details' && currentView !== 'blog-post') {
       window.location.hash = currentView;
    }
  }, [currentView]);

  const handleProductSelect = (id: number) => {
    setSelectedProductId(id);
    setCurrentView('product-details');
  };

  const handlePostSelect = (id: number) => {
    setSelectedPostId(id);
    setCurrentView('blog-post');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomeCard onNavigate={setCurrentView} />;
      case 'event':
        return <EventCard />;
      case 'menu':
        return <MenuCard />;
      case 'reservation':
        return <ReservationCard />;
      case 'chefs':
        return <ChefsCard />;
      case 'team':
        return <TeamCard />;
      case 'manifesto':
        return <ManifestoCard />;
      case 'contact':
        return <ContactCard />;
      case 'compact':
        return <CompactCard onNavigate={setCurrentView} />;
      case 'all':
        return <AllCard onNavigate={setCurrentView} />;
      case 'store':
        return <StoreCard onProductClick={handleProductSelect} />;
      case 'checkout':
        return <CheckoutCard onNavigate={setCurrentView} />;
      case 'blog':
        return <BlogCard onPostClick={handlePostSelect} />;
      case 'blog-post':
        return (
          <BlogPostDetailCard 
            postId={selectedPostId} 
            onBack={() => setCurrentView('blog')} 
          />
        );
      case 'product-details':
        return (
          <ProductDetailsCard 
            productId={selectedProductId} 
            onBack={() => setCurrentView('store')} 
            onNavigateToCart={() => setCurrentView('checkout')}
          />
        );
      default:
        return <HomeCard onNavigate={setCurrentView} />;
    }
  };

  return (
    <CartProvider>
      <Layout activeView={currentView} onNavigate={setCurrentView}>
        <div className="py-4 animate-fade-in-up">
          {renderContent()}
        </div>
      </Layout>
    </CartProvider>
  );
};

export default App;
