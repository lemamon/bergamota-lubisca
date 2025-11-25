import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Layout } from './components/Layout/index';
import { HomeCard } from './components/HomeCard';
import { EventCard } from './components/EventCard';
import { MenuCard } from './components/MenuCard/index';
import { ReservationCard } from './components/ReservationCard';
import { ChefsCard } from './components/ChefsCard';
import { ManifestoCard } from './components/ManifestoCard';
import { ContactCard } from './components/ContactCard';
import { CompactCard } from './components/CompactCard/index';
import { AllCard } from './components/AllCard/index';
import { StoreCard } from './components/StoreCard/index';
import { CheckoutCard } from './components/CheckoutCard/index';
import { ProductDetailsCard } from './components/ProductDetailsCard/index';
import { BlogCard } from './components/BlogCard/index';
import { BlogPostDetailCard } from './components/BlogPostDetailCard/index';
import { TeamCard } from './components/TeamCard/index';
import { CartProvider } from './contexts/CartContext';
import { ScrollToTop } from './components/ScrollToTop';

// Wrapper components to handle navigation with React Router
const CompactWrapper: React.FC = () => {
  const navigate = useNavigate();
  return <CompactCard onNavigate={(view) => navigate(`/${view}`)} />;
};

const AllWrapper: React.FC = () => {
  const navigate = useNavigate();
  return <AllCard onNavigate={(view) => navigate(`/${view}`)} />;
};

const StoreWrapper: React.FC = () => {
  const navigate = useNavigate();
  return <StoreCard onProductClick={(id) => navigate(`/product/${id}`)} />;
};

const CheckoutWrapper: React.FC = () => {
  const navigate = useNavigate();
  return <CheckoutCard onNavigate={(view) => navigate(`/${view}`)} />;
};

const BlogWrapper: React.FC = () => {
  const navigate = useNavigate();
  return <BlogCard onPostClick={(id) => navigate(`/blog/${id}`)} />;
};

const BlogPostWrapper: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  return (
    <BlogPostDetailCard 
      postId={id ? parseInt(id) : null} 
      onBack={() => navigate('/blog')} 
    />
  );
};

const ProductDetailsWrapper: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  return (
    <ProductDetailsCard 
      productId={id ? parseInt(id) : null} 
      onBack={() => navigate('/store')} 
      onNavigateToCart={() => navigate('/checkout')}
    />
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<HomeCard />} /> */}
      <Route path="/" element={<AllWrapper />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/event" element={<EventCard />} />
      <Route path="/menu" element={<MenuCard />} />
      <Route path="/reservation" element={<ReservationCard />} />
      <Route path="/chefs" element={<ChefsCard />} />
      <Route path="/team" element={<TeamCard />} />
      <Route path="/manifesto" element={<ManifestoCard />} />
      <Route path="/contact" element={<ContactCard />} />
      <Route path="/compact" element={<CompactWrapper />} />
      <Route path="/all" element={<AllWrapper />} />
      <Route path="/store" element={<StoreWrapper />} />
      <Route path="/product/:id" element={<ProductDetailsWrapper />} />
      <Route path="/checkout" element={<CheckoutWrapper />} />
      <Route path="/blog" element={<BlogWrapper />} />
      <Route path="/blog/:id" element={<BlogPostWrapper />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <Layout>
          <div className="py-4 animate-fade-in-up">
            <AppRoutes />
          </div>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
