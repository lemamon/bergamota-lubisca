import React from "react";
import {
  EVENT_TITLE,
  EVENT_SUBTITLE,
  EVENT_INTRO,
  MENU_CONTENT,
  EVENT_CLOSING,
  EVENT_CTA,
} from "../../constants";
import { BergamotIcon, SmallJarIcon } from "../Icons";
import { StarDoodle, DiamondDivider } from "../shared/Decorations";
import { Section } from "../shared/Section";
import { View } from "../../types";

interface AllCardProps {
  onNavigate: (view: View) => void;
}

export const AllCard: React.FC<AllCardProps> = ({ onNavigate }) => {
  return (
    <Section maxWidth="max-w-4xl">
      {/* Container Principal "Papel Longo" */}
      <div className="relative bg-[#FFFCF5] shadow-2xl py-16 px-6 md:px-12 lg:px-20 mx-auto border-2 border-brand-purple">
        {/* Estrelas nos Cantos (Borda Decorativa) */}
        <div className="absolute top-2 left-2 text-brand-purple">
          <StarDoodle className="w-6 h-6" />
        </div>
        <div className="absolute top-2 right-2 text-brand-purple">
          <StarDoodle className="w-6 h-6" />
        </div>
        <div className="absolute bottom-2 left-2 text-brand-purple">
          <StarDoodle className="w-6 h-6" />
        </div>
        <div className="absolute bottom-2 right-2 text-brand-purple">
          <StarDoodle className="w-6 h-6" />
        </div>

        {/* Borda tracejada interna simulando costura/papel */}
        <div className="absolute inset-4 border-2 border-dotted border-brand-pink/30 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* --- HEADER --- */}
          <header className="mb-12 max-w-2xl">
            <h1 className="font-serif italic text-6xl md:text-7xl text-brand-purple mb-4">
              {EVENT_TITLE}
            </h1>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-pink"></div>
              <h2 className="font-sans text-xs font-bold tracking-[0.2em] text-brand-dark uppercase">
                {EVENT_SUBTITLE}
              </h2>
              <div className="h-[1px] w-12 bg-brand-pink"></div>
            </div>

            <div className="font-serif italic text-brand-dark/80 text-lg leading-relaxed space-y-4">
              {EVENT_INTRO.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 opacity-50">
              <DiamondDivider />
            </div>
          </header>

          {/* --- MENU SECTIONS --- */}
          <div className="w-full space-y-12">
            {MENU_CONTENT.map((section) => (
              <div key={section.title} className="flex flex-col items-center">
                <h3 className="font-sketch text-5xl text-brand-orange mb-2 uppercase tracking-widest relative inline-block">
                  {section.title}
                  <div className="absolute bottom-1 left-0 w-full h-2 bg-brand-orange/10 -rotate-1 rounded-full"></div>
                </h3>

                <div className="w-24 h-1 border-b-2 border-brand-dark/10 mb-10"></div>

                <div className="space-y-12">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      {/* Ícone da Marca (Centralizado) */}
                      <div className="mb-4">
                        {item.brand === "bergamota" ? (
                          <BergamotIcon className="w-12 text-brand-orange" />
                        ) : item.brand === "lubisca" ? (
                          <SmallJarIcon className="w-10 text-brand-pink" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-brand-purple mb-2"></div>
                        )}
                      </div>

                      {/* Lista de Ingredientes como itens principais */}
                      {item.ingredients && (
                        <ul className="flex flex-col gap-2 items-center">
                          {item.ingredients.map((ing, i) => (
                            <li
                              key={i}
                              className="font-sans font-light text-brand-dark/70 uppercase tracking-widest text-sm md:text-base"
                            >
                              {ing}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-12 w-full flex justify-center opacity-30 text-brand-purple">
                  <span>♦</span>
                  <span className="mx-2">◇</span>
                  <span>♦</span>
                </div>
              </div>
            ))}
          </div>

          {/* --- MANIFESTO --- */}
          <section className="max-w-2xl mt-16 mb-16">
            {/* <h3 className="font-sketch text-5xl text-brand-pink mb-8 uppercase tracking-widest">
              Manifesto
            </h3> */}

            <div className="font-serif italic text-brand-dark space-y-4 text-lg">
              {EVENT_CLOSING.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <div className="my-16 w-full opacity-50">
                <DiamondDivider />
              </div>

              <p className="font-bold mt-6 text-brand-purple">{EVENT_CTA}</p>
            </div>
          </section>

          {/* --- CTA BUTTON --- */}
          <button
            onClick={() => onNavigate("reservation")}
            className="px-10 py-4 border-2 border-brand-purple rounded-full font-sans text-xs font-bold tracking-[0.3em] uppercase text-brand-purple hover:bg-brand-purple hover:text-white transition-colors duration-300"
          >
            Reservar Agora
          </button>
        </div>
      </div>
    </Section>
  );
};
