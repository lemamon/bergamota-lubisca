import React from 'react';
import { Mail, MapPin, Instagram, Phone } from 'lucide-react';
import { StarDoodle } from '../shared/Decorations';
import { Section } from '../shared/Section';

export const ContactCard: React.FC = () => {
  return (
    <Section maxWidth="max-w-4xl">
      <div className="bg-brand-cream border-2 border-brand-purple relative p-8 md:p-12 overflow-hidden">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-bl-full opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink rounded-tr-full opacity-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
           
           {/* Left: Info */}
           <div className="space-y-8">
              <div>
                <h2 className="font-sketch text-5xl text-brand-dark mb-6">Fale Conosco</h2>
                <p className="font-serif italic text-brand-dark/70 text-lg">
                  Dúvidas sobre o menu? Restrições? Ou apenas quer dar um oi? Estamos por aqui.
                </p>
              </div>

              <div className="space-y-6 font-sans">
                 
                 <div className="flex items-start gap-4 group">
                    <div className="bg-brand-purple text-brand-cream p-3 rounded-full group-hover:bg-brand-pink transition-colors">
                       <Phone size={20} />
                    </div>
                    <div>
                       <div className="font-bold text-brand-purple text-xs tracking-widest uppercase mb-1">WhatsApp</div>
                       <a href="#" className="font-sketch text-2xl text-brand-dark hover:text-brand-orange transition-colors">
                         (11) 99999-9999
                       </a>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 group">
                    <div className="bg-brand-purple text-brand-cream p-3 rounded-full group-hover:bg-brand-pink transition-colors">
                       <Mail size={20} />
                    </div>
                    <div>
                       <div className="font-bold text-brand-purple text-xs tracking-widest uppercase mb-1">Email</div>
                       <a href="#" className="font-sketch text-2xl text-brand-dark hover:text-brand-orange transition-colors">
                         oi@bergamotalubisca.com.br
                       </a>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 group">
                    <div className="bg-brand-purple text-brand-cream p-3 rounded-full group-hover:bg-brand-pink transition-colors">
                       <Instagram size={20} />
                    </div>
                    <div>
                       <div className="font-bold text-brand-purple text-xs tracking-widest uppercase mb-1">Instagram</div>
                       <a href="#" className="font-sketch text-2xl text-brand-dark hover:text-brand-orange transition-colors block">
                         @bergamota.cozinha
                       </a>
                       <a href="#" className="font-sketch text-2xl text-brand-dark hover:text-brand-orange transition-colors block">
                         @lubisca.fermentados
                       </a>
                    </div>
                 </div>

              </div>
           </div>

           {/* Right: Map / Location visual */}
           <div className="relative">
              <div className="border-2 border-dashed border-brand-purple/30 p-2 h-full min-h-[300px] flex flex-col relative bg-white/50">
                 <div className="flex-1 bg-brand-purple/5 flex items-center justify-center relative overflow-hidden group">
                    
                    {/* Stylized Map Placeholder */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#451D88_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <MapPin className="text-brand-pink w-12 h-12 relative z-10 drop-shadow-md group-hover:-translate-y-2 transition-transform" />
                    <div className="absolute bottom-1/2 translate-y-8 w-8 h-2 bg-brand-dark/20 rounded-[100%] blur-sm group-hover:scale-75 transition-transform"></div>

                 </div>
                 <div className="mt-4 text-center">
                    <h3 className="font-sketch text-2xl text-brand-purple font-bold">O Encontro</h3>
                    <p className="font-serif text-brand-dark text-sm mt-1">
                      Rua das Flores, 123 <br/>
                      Centro Histórico
                    </p>
                 </div>
                 
                 <StarDoodle className="absolute -top-3 -right-3 w-8 h-8 text-brand-orange" />
              </div>
           </div>

        </div>
      </div>
    </Section>
  );
};