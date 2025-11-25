

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { PaperCard } from '../ui/PaperCard';
import { DiamondDivider, StarDoodle, ScribbleLine } from '../shared/Decorations';
import { BergamotIcon, SmallJarIcon, TicketIcon } from '../Icons';
import { PRODUCTS } from '../../constants';
import { useCart } from '../../contexts/CartContext';
import { ArrowLeft, ShoppingBag, Plus, Minus, Check } from 'lucide-react';

interface ProductDetailsCardProps {
  productId: number | null;
  onBack: () => void;
  onNavigateToCart: () => void;
}

export const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({ productId, onBack, onNavigateToCart }) => {
  const { t } = useTranslation();
  const product = PRODUCTS.find(p => p.id === productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) {
    return (
      <Section className="text-center py-20">
        <h2 className="font-sketch text-4xl text-brand-purple">{t('productDetails.notFound')}</h2>
        <button onClick={onBack} className="mt-4 underline">{t('productDetails.backToStore')}</button>
      </Section>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const getProductLabel = () => {
    if (product.type === 'lubisca') return t('productDetails.lubiscaFermented');
    if (product.type === 'bergamota') return t('productDetails.bergamotaKitchen');
    if (product.type === 'ticket') return t('productDetails.officialTicket');
    return t('productDetails.officialMerch');
  };

  return (
    <Section maxWidth="max-w-5xl">
      {/* Back Navigation */}
      <button 
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-brand-purple font-sketch text-2xl hover:text-brand-pink transition-colors group"
      >
        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span>{t('productDetails.backToStore')}</span>
      </button>

      <PaperCard className="overflow-hidden">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Image / Visual */}
            <div className="relative h-full min-h-[300px] bg-brand-cream/50 border-2 border-dashed border-brand-purple/20 rounded-lg flex items-center justify-center p-12 overflow-hidden">
               {/* Decorative background blobs */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-xl"></div>
               <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-pink/10 rounded-full blur-xl"></div>
               
               {/* Hero Icon */}
               <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  {product.type === 'lubisca' && <SmallJarIcon className="w-48 h-48 text-brand-pink drop-shadow-2xl" />}
                  {product.type === 'bergamota' && <BergamotIcon className="w-48 h-48 text-brand-orange drop-shadow-2xl" />}
                  {product.type === 'ticket' && <TicketIcon className="w-56 h-56 text-brand-orange drop-shadow-2xl" />}
                  {product.type === 'merch' && (
                    <div className="w-48 h-48 rounded-full border-4 border-brand-purple flex items-center justify-center bg-white shadow-xl">
                       <span className="font-sketch text-6xl text-brand-purple">B/L</span>
                    </div>
                  )}
               </div>

               {/* Sticker Effect */}
               <div className={`absolute top-6 left-6 -rotate-12 px-3 py-1 font-sans text-xs font-bold tracking-widest shadow-md ${product.type === 'ticket' ? 'bg-brand-orange text-brand-dark' : 'bg-brand-purple text-white'}`}>
                  {product.type === 'merch' ? 'EXCLUSIVO' : product.type === 'ticket' ? 'VAGAS LIMITADAS' : 'ARTESANAL'}
               </div>
            </div>

            {/* Right: Info & Actions */}
            <div className="flex flex-col h-full">
               
               <div className="flex justify-between items-start">
                 <div>
                    <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-pink uppercase mb-2">
                       {getProductLabel()}
                    </span>
                    <h1 className="font-serif font-bold text-4xl md:text-5xl text-brand-dark mb-4 leading-tight">
                      {product.name}
                    </h1>
                 </div>
                 <div className="hidden md:block">
                   <StarDoodle className="w-8 h-8 text-brand-orange animate-spin-slow" />
                 </div>
               </div>

               <div className="font-sketch text-3xl text-brand-purple/60 mb-8 border-l-4 border-brand-orange/30 pl-4">
                  {product.description}
                  <br/>
                  <span className="text-lg opacity-70 mt-2 block font-serif italic">
                    {product.type === 'ticket' ? 'Apresente o código QR na entrada.' : 'Feito com ingredientes locais e sazonais.'}
                  </span>
               </div>

               <div className="flex-grow">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="bg-brand-purple/5 p-4 rounded border border-brand-purple/10">
                        <span className="block text-xs font-bold text-brand-purple uppercase mb-1">
                          {product.type === 'ticket' ? 'Data' : 'Peso Líq.'}
                        </span>
                        <span className="font-sketch text-xl text-brand-dark">
                          {product.type === 'ticket' ? '20 de Maio' : '300g (aprox)'}
                        </span>
                     </div>
                     <div className="bg-brand-purple/5 p-4 rounded border border-brand-purple/10">
                        <span className="block text-xs font-bold text-brand-purple uppercase mb-1">
                           {product.type === 'ticket' ? 'Horário' : 'Validade'}
                        </span>
                        <span className="font-sketch text-xl text-brand-dark">
                           {product.type === 'ticket' ? '19h30' : '30 dias'}
                        </span>
                     </div>
                  </div>
               </div>
               
               {/* Footer Action Area */}
               <div className="mt-auto border-t-2 border-dashed border-brand-purple/20 pt-8">
                  <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                     
                     <div className="font-sketch text-5xl text-brand-dark">
                        {product.displayPrice}
                     </div>

                     {!product.soldOut ? (
                       <div className="flex items-center gap-4 w-full md:w-auto">
                          
                          {/* Quantity */}
                          <div className="flex items-center border-2 border-brand-purple rounded-full px-2 py-1 bg-white">
                             <button 
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-8 h-8 flex items-center justify-center text-brand-purple hover:bg-brand-purple/10 rounded-full transition-colors"
                             >
                               <Minus size={16} />
                             </button>
                             <span className="w-8 text-center font-sketch text-2xl pt-1">{quantity}</span>
                             <button 
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-brand-purple hover:bg-brand-purple/10 rounded-full transition-colors"
                             >
                               <Plus size={16} />
                             </button>
                          </div>

                          {/* Add Button */}
                          <button 
                            onClick={handleAddToCart}
                            disabled={justAdded}
                            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-full font-sketch text-xl transition-all duration-300 shadow-lg ${justAdded ? 'bg-green-500 text-white scale-95' : 'bg-brand-purple text-brand-cream hover:bg-brand-pink hover:scale-105 active:scale-95'}`}
                          >
                             {justAdded ? (
                               <>
                                 <Check size={20} />
                                 <span>Adicionado!</span>
                               </>
                             ) : (
                               <>
                                 <ShoppingBag size={20} />
                                 <span>Adicionar à Sacola</span>
                               </>
                             )}
                          </button>
                       </div>
                     ) : (
                        <div className="bg-brand-dark/10 text-brand-dark px-6 py-2 font-bold tracking-widest uppercase rounded-full">
                           Produto Esgotado
                        </div>
                     )}

                  </div>
               </div>

            </div>
         </div>
         
         <div className="mt-12 text-center opacity-40">
           <ScribbleLine />
         </div>

      </PaperCard>
    </Section>
  );
};