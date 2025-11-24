import React, { useState } from 'react';
import { JarLogo } from './Icons';
import { StarDoodle, ScribbleLine, DiamondDivider } from './shared/Decorations';
import { Check, Calendar } from 'lucide-react';
import { Section } from './ui/Section';
import { PaperCard } from './ui/PaperCard';

export const ReservationCard: React.FC = () => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 2,
    date: '2024-05-20',
    dietary: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setStep('success'), 800);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (step === 'success') {
    return (
      <Section maxWidth="max-w-2xl" className="animate-fade-in-up">
        <PaperCard innerClassName="p-4 md:p-8">
           <div className="border-[3px] border-dashed border-brand-orange p-6 flex flex-col items-center text-center">
              
              <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center mb-6 animate-bounce">
                <Check className="text-white w-10 h-10" strokeWidth={3} />
              </div>

              <h2 className="font-sketch text-5xl text-brand-purple mb-2">Reserva Confirmada!</h2>
              <p className="font-serif italic text-brand-dark/80 text-xl mb-8">
                Mal podemos esperar para te receber nesta noite especial.
              </p>

              {/* TICKET STUB VISUAL */}
              <div className="bg-white border-2 border-brand-dark w-full max-w-md relative p-6 shadow-sm transform -rotate-1">
                 <div className="absolute -left-3 top-1/2 w-6 h-6 bg-brand-cream rounded-full border-r-2 border-brand-dark transform -translate-y-1/2"></div>
                 <div className="absolute -right-3 top-1/2 w-6 h-6 bg-brand-cream rounded-full border-l-2 border-brand-dark transform -translate-y-1/2"></div>
                 
                 <div className="text-left border-b-2 border-dotted border-brand-dark/20 pb-4 mb-4">
                    <div className="text-xs font-bold tracking-[0.2em] text-brand-purple uppercase mb-1">CONVIDADO</div>
                    <div className="font-sketch text-3xl text-brand-dark">{formData.name}</div>
                 </div>

                 <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs font-bold tracking-[0.2em] text-brand-purple uppercase mb-1">MESA PARA</div>
                      <div className="font-sketch text-3xl text-brand-pink">{formData.guests} Pessoas</div>
                    </div>
                    <div className="text-right">
                       <JarLogo /> 
                       <div className="w-12 h-12 absolute bottom-4 right-4 opacity-10"></div>
                    </div>
                 </div>
              </div>

              <div className="mt-10">
                <p className="font-sans text-xs text-brand-purple/60 uppercase tracking-widest">
                  Um e-mail de confirmação foi enviado para {formData.email}
                </p>
              </div>
           </div>
        </PaperCard>
      </Section>
    );
  }

  return (
    <Section maxWidth="max-w-3xl">
      
      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-purple rounded-full opacity-5 blur-xl"></div>
      <div className="absolute bottom-10 -right-10 w-40 h-40 bg-brand-orange rounded-full opacity-10 blur-xl"></div>

      <PaperCard innerClassName="py-10 px-6 md:px-12 bg-white/50">
            {/* Corner Decor */}
            <StarDoodle className="absolute top-4 left-4 w-6 h-6 text-brand-pink" />
            <StarDoodle className="absolute top-4 right-4 w-6 h-6 text-brand-orange" />

            <header className="text-center mb-10">
              <h2 className="font-sketch text-6xl text-brand-dark mb-2">Reserva</h2>
              <ScribbleLine />
              <p className="font-serif italic text-brand-purple mt-4 text-lg">
                Garanta seu lugar à nossa mesa.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto w-full">
              
              {/* Inputs */}
              <div className="space-y-6">
                
                {/* Name */}
                <div className="relative group">
                  <label className="block font-sans text-xs font-bold text-brand-purple tracking-widest mb-1 uppercase">Seu Nome</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full bg-transparent border-b-2 border-brand-purple/30 focus:border-brand-pink outline-none py-2 font-sketch text-3xl text-brand-dark placeholder-brand-dark/20 transition-colors"
                    placeholder="Como podemos te chamar?"
                  />
                  <StarDoodle className="absolute right-0 bottom-2 w-4 h-4 text-brand-orange opacity-0 group-focus-within:opacity-100 transition-opacity" />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block font-sans text-xs font-bold text-brand-purple tracking-widest mb-1 uppercase">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-transparent border-b-2 border-brand-purple/30 focus:border-brand-pink outline-none py-2 font-sketch text-2xl text-brand-dark"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="relative group">
                    <label className="block font-sans text-xs font-bold text-brand-purple tracking-widest mb-1 uppercase">WhatsApp</label>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-b-2 border-brand-purple/30 focus:border-brand-pink outline-none py-2 font-sketch text-2xl text-brand-dark"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                {/* Date & Guests Row */}
                <div className="bg-brand-purple/5 p-6 rounded-lg border border-dashed border-brand-purple/20 flex flex-col md:flex-row gap-8 items-center justify-between">
                   
                   {/* Date Display */}
                   <div className="flex items-center gap-3">
                      <div className="bg-brand-purple text-brand-cream p-3 rounded-full">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-purple uppercase tracking-widest">DATA</div>
                        <div className="font-sketch text-2xl text-brand-dark">20 de Maio, 2024</div>
                        <div className="font-serif text-sm italic text-brand-pink">Sábado, às 19h30</div>
                      </div>
                   </div>

                   {/* Guests Counter */}
                   <div className="flex items-center gap-4">
                      <div className="text-right md:mr-2">
                        <div className="text-xs font-bold text-brand-purple uppercase tracking-widest">LUGARES</div>
                        <div className="font-serif text-xs italic text-brand-dark/60">Quantas pessoas?</div>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-full border border-brand-purple">
                        <button 
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-purple/10 text-brand-purple font-bold text-xl"
                        >
                          -
                        </button>
                        <span className="font-sketch text-3xl w-6 text-center">{formData.guests}</span>
                        <button 
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, guests: Math.min(10, prev.guests + 1) }))}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-purple/10 text-brand-purple font-bold text-xl"
                        >
                          +
                        </button>
                      </div>
                   </div>
                </div>

                {/* Dietary */}
                <div className="relative">
                  <label className="block font-sans text-xs font-bold text-brand-purple tracking-widest mb-2 uppercase">
                    Restrições Alimentares?
                  </label>
                  <textarea 
                    rows={2}
                    value={formData.dietary}
                    onChange={(e) => handleInputChange('dietary', e.target.value)}
                    className="w-full bg-white/50 border-2 border-dashed border-brand-purple/30 focus:border-brand-pink outline-none p-4 rounded-lg font-serif italic text-brand-dark placeholder-brand-dark/30 resize-none transition-colors"
                    placeholder="Alergias, intolerâncias ou preferências..."
                  />
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center">
                <button 
                  type="submit"
                  className="group relative inline-block focus:outline-none"
                >
                  <span className="absolute inset-0 translate-x-1 translate-y-1 bg-brand-dark transition-transform group-hover:translate-x-2 group-hover:translate-y-2 rounded-full"></span>
                  <span className="relative inline-block bg-brand-pink border-2 border-brand-dark px-12 py-3 rounded-full font-sketch text-3xl text-white uppercase tracking-widest transition-transform group-active:translate-y-1">
                    Confirmar Reserva
                  </span>
                </button>
              </div>

            </form>
            
            <div className="mt-8 text-center">
               <DiamondDivider />
               <p className="font-serif text-sm text-brand-dark/60 mt-4">
                 Dúvidas? Entre em contato pelo WhatsApp <br/>
                 <span className="text-brand-purple font-bold">(11) 99999-9999</span>
               </p>
            </div>
      </PaperCard>
    </Section>
  );
};