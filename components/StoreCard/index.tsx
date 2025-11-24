

import React from 'react';
import { Section } from '../ui/Section';
import { PaperCard } from '../ui/PaperCard';
import { DiamondDivider, StarDoodle } from '../shared/Decorations';
import { BergamotIcon, SmallJarIcon, TicketIcon } from '../Icons';
import { PRODUCTS } from '../../constants';
import { useCart } from '../../contexts/CartContext';
import { ShoppingBag, Eye } from 'lucide-react';

interface StoreCardProps {
  onProductClick?: (id: number) => void;
}

export const StoreCard: React.FC<StoreCardProps> = ({ onProductClick }) => {
  const { addToCart } = useCart();

  const handleProductClick = (id: number) => {
    if (onProductClick) {
      onProductClick(id);
    }
  };

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation(); // Prevent triggering the card click
    addToCart(product);
  };

  return (
    <Section maxWidth="max-w-4xl">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 -right-10 w-40 h-40 bg-brand-pink rounded-full opacity-10 blur-3xl"></div>

      <PaperCard hasDashedBorder>
        <header className="text-center mb-12">
           <h1 className="font-sketch font-bold text-6xl text-brand-purple mb-4 relative inline-block">
             LOJINHA
             <StarDoodle className="absolute -top-4 -right-8 text-brand-orange w-8 h-8 animate-pulse" />
           </h1>
           <p className="font-serif italic text-brand-dark/60 text-lg">Leve um pouco da nossa cozinha para a sua.</p>
           <div className="mt-6">
             <DiamondDivider />
           </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              onClick={() => handleProductClick(product.id)}
              className={`group relative border bg-brand-cream/30 p-6 flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer ${product.type === 'ticket' ? 'border-brand-orange/40 bg-brand-orange/5' : 'border-brand-purple/10'}`}
            >
              
              {/* Product Type Icon */}
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {product.type === 'lubisca' && <SmallJarIcon className="w-16 h-16 text-brand-pink" />}
                {product.type === 'bergamota' && <BergamotIcon className="w-16 h-16 text-brand-orange" />}
                {product.type === 'merch' && <div className="w-16 h-16 rounded-full border-2 border-brand-purple flex items-center justify-center font-sketch text-2xl text-brand-purple">B/L</div>}
                {product.type === 'ticket' && <TicketIcon className="w-16 h-16 text-brand-orange drop-shadow-sm" />}
              </div>

              {/* Content */}
              <h3 className="font-serif font-bold text-2xl text-brand-dark mb-2 group-hover:text-brand-pink transition-colors">{product.name}</h3>
              <p className="font-sketch text-xl text-brand-purple/70 mb-4 flex-grow">{product.description}</p>
              
              <div className="w-full h-[1px] bg-brand-purple/10 mb-4"></div>
              
              <div className="font-sans font-bold text-lg text-brand-purple tracking-widest">
                {product.soldOut ? (
                   <span className="text-brand-dark/40 line-through decoration-brand-pink decoration-2">ESGOTADO</span>
                ) : (
                   product.displayPrice
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4 w-full justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                {!product.soldOut && (
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="flex items-center gap-2 bg-brand-purple text-brand-cream font-sketch text-xl px-4 py-2 rounded-full hover:bg-brand-pink transition-colors active:scale-95"
                  >
                    <ShoppingBag size={18} />
                    <span>Add</span>
                  </button>
                )}
                <button 
                   className="flex items-center gap-2 bg-white border border-brand-purple text-brand-purple font-sketch text-xl px-4 py-2 rounded-full hover:bg-brand-purple/5 transition-colors"
                >
                   <Eye size={18} />
                   <span>Ver</span>
                </button>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-brand-purple rounded-full opacity-0 group-hover:opacity-20"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-brand-purple rounded-full opacity-0 group-hover:opacity-20"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-sans text-xs text-brand-dark/50 uppercase tracking-[0.2em]">
            Retirada disponível apenas na noite do evento
          </p>
        </div>

      </PaperCard>
    </Section>
  );
};