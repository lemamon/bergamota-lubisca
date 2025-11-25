
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { PaperCard } from '../ui/PaperCard';
import { DiamondDivider, StarDoodle } from '../shared/Decorations';
import { useCart } from '../../contexts/CartContext';
import { View } from '../../types';
import { Trash2, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { JarLogo } from '../Icons';

interface CheckoutCardProps {
  onNavigate: (view: View) => void;
}

export const CheckoutCard: React.FC<CheckoutCardProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();
  const [step, setStep] = useState<'review' | 'success'>('review');
  const [loading, setLoading] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      clearCart();
    }, 1500);
  };

  // SUCCESS STATE
  if (step === 'success') {
    return (
      <Section maxWidth="max-w-2xl" className="animate-fade-in-up">
        <PaperCard innerClassName="p-4 md:p-8">
           <div className="border-[3px] border-dashed border-brand-orange p-6 flex flex-col items-center text-center">
              
              <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mb-6 animate-bounce">
                <ShoppingBag className="text-white w-10 h-10" strokeWidth={2} />
              </div>

              <h2 className="font-sketch text-5xl text-brand-purple mb-2">{t('checkout.success.title')}</h2>
              <p className="font-serif italic text-brand-dark/80 text-xl mb-8">
                {t('checkout.success.subtitle')}
              </p>

              {/* TICKET VISUAL */}
              <div className="bg-white border-2 border-brand-dark w-full max-w-md relative p-6 shadow-sm transform rotate-1">
                 <div className="absolute -left-3 top-1/2 w-6 h-6 bg-brand-cream rounded-full border-r-2 border-brand-dark transform -translate-y-1/2"></div>
                 <div className="absolute -right-3 top-1/2 w-6 h-6 bg-brand-cream rounded-full border-l-2 border-brand-dark transform -translate-y-1/2"></div>
                 
                 <div className="text-center border-b-2 border-dotted border-brand-dark/20 pb-4 mb-4">
                    <div className="text-xs font-bold tracking-[0.2em] text-brand-purple uppercase mb-1">CÓDIGO DE RETIRADA</div>
                    <div className="font-sketch text-4xl text-brand-dark tracking-widest">#BERG-882</div>
                 </div>

                 <div className="text-center">
                    <p className="font-serif text-sm text-brand-dark/60 italic">Apresente este código no balcão da lojinha.</p>
                 </div>
              </div>

              <button 
                onClick={() => onNavigate('store')}
                className="mt-10 text-brand-purple font-bold border-b-2 border-brand-purple hover:text-brand-orange hover:border-brand-orange transition-colors"
              >
                VOLTAR PARA LOJINHA
              </button>
           </div>
        </PaperCard>
      </Section>
    );
  }

  // EMPTY CART STATE
  if (items.length === 0) {
    return (
      <Section maxWidth="max-w-3xl">
        <PaperCard>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingBag className="w-24 h-24 text-brand-purple/20 mb-6" />
            <h2 className="font-sketch text-4xl text-brand-purple mb-4">Sua sacola está vazia</h2>
            <p className="font-serif text-brand-dark/60 mb-8 max-w-md">
              Ainda não escolheu suas lembrancinhas? Temos conservas, fermentados e mimos esperando por você.
            </p>
            <button 
              onClick={() => onNavigate('store')}
              className="px-8 py-3 border-2 border-brand-purple rounded-full font-sketch text-2xl hover:bg-brand-purple hover:text-brand-cream transition-colors uppercase tracking-widest"
            >
              Ir para Lojinha
            </button>
          </div>
        </PaperCard>
      </Section>
    );
  }

  // CHECKOUT FORM STATE
  return (
    <Section maxWidth="max-w-5xl">
      <h1 className="font-sketch text-6xl text-brand-purple text-center mb-8">{t('checkout.title')}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT COL: CART ITEMS */}
        <PaperCard className="h-full">
           <h3 className="font-sans font-bold text-xs tracking-[0.2em] text-brand-purple uppercase mb-6 border-b border-brand-purple/10 pb-2">
             {t('checkout.summary')}
           </h3>
           
           <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
             {items.map(item => (
               <div key={item.id} className="flex items-center justify-between group">
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-xl text-brand-dark">{item.name}</h4>
                    <p className="font-sans text-xs text-brand-purple/50">{item.displayPrice} unid.</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 border border-brand-purple/20 rounded-full px-2 py-1">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-brand-pink"><Minus size={14} /></button>
                      <span className="font-sketch text-xl w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-brand-pink"><Plus size={14} /></button>
                    </div>

                    <div className="font-sketch text-2xl text-brand-purple min-w-[80px] text-right">
                       R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-brand-dark/20 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
               </div>
             ))}
           </div>

           <div className="mt-8 pt-8 border-t-2 border-dashed border-brand-purple/20">
             <div className="flex justify-between items-end">
               <span className="font-serif italic text-brand-dark/60">Total do Pedido</span>
               <span className="font-sketch text-5xl text-brand-orange">
                 R$ {total.toFixed(2).replace('.', ',')}
               </span>
             </div>
           </div>
        </PaperCard>

        {/* RIGHT COL: PAYMENT FORM */}
        <PaperCard hasDashedBorder>
           <div className="relative">
             <StarDoodle className="absolute -top-2 -right-2 text-brand-pink w-6 h-6" />
             
             <h3 className="font-sans font-bold text-xs tracking-[0.2em] text-brand-purple uppercase mb-6">
               Seus Dados
             </h3>

             <form onSubmit={handleCheckout} className="space-y-6">
               <div className="space-y-4">
                  <div>
                    <label className="block font-sans text-xs font-bold text-brand-purple/60 mb-1">NOME COMPLETO</label>
                    <input required type="text" className="w-full bg-transparent border-b-2 border-brand-purple/20 focus:border-brand-pink outline-none py-2 font-sketch text-2xl text-brand-dark" placeholder="Quem vai retirar?" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-bold text-brand-purple/60 mb-1">EMAIL</label>
                    <input required type="email" className="w-full bg-transparent border-b-2 border-brand-purple/20 focus:border-brand-pink outline-none py-2 font-sketch text-2xl text-brand-dark" placeholder="Para o comprovante" />
                  </div>
                  
                  <div className="pt-4">
                     <label className="block font-sans text-xs font-bold text-brand-purple/60 mb-3">FORMA DE PAGAMENTO</label>
                     <div className="flex gap-4">
                       <label className="flex-1 border-2 border-brand-purple/20 rounded-lg p-3 cursor-pointer hover:border-brand-purple peer-checked:bg-brand-purple peer-checked:text-white transition-all">
                          <input type="radio" name="payment" className="hidden peer" defaultChecked />
                          <div className="text-center peer-checked:text-brand-pink font-sketch text-2xl">PIX</div>
                       </label>
                       <label className="flex-1 border-2 border-brand-purple/20 rounded-lg p-3 cursor-pointer hover:border-brand-purple transition-all">
                          <input type="radio" name="payment" className="hidden peer" />
                          <div className="text-center font-sketch text-2xl">CARTÃO</div>
                       </label>
                     </div>
                  </div>
               </div>

               <div className="pt-6">
                 <button 
                   type="submit" 
                   disabled={loading}
                   className="w-full bg-brand-pink text-white font-sketch text-3xl py-4 rounded-xl shadow-lg hover:bg-brand-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                 >
                   {loading ? (
                     <span className="animate-pulse">PROCESSANDO...</span>
                   ) : (
                     <>
                       <span>FINALIZAR COMPRA</span>
                       <Check size={24} />
                     </>
                   )}
                 </button>
                 <p className="text-center text-xs font-sans text-brand-dark/40 mt-3">
                   Ambiente seguro e fermentado com amor.
                 </p>
               </div>
             </form>

           </div>
        </PaperCard>

      </div>
    </Section>
  );
};
