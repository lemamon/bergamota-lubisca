import React from 'react';
import { HomeCard } from '../HomeCard/index';
import { EventCard } from '../EventCard/index';
import { MenuCard } from '../MenuCard/index';
import { ReservationCard } from '../ReservationCard/index';
import { ChefsCard } from '../ChefsCard/index';
import { ManifestoCard } from '../ManifestoCard/index';
import { ContactCard } from '../ContactCard/index';
import { DiamondDivider } from '../shared/Decorations';
import { View } from '../../types';

interface CompactCardProps {
  onNavigate: (view: View) => void;
}

export const CompactCard: React.FC<CompactCardProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* 
        This component aggregates all sections into a single vertical scroll.
        It simulates the 'original' one-page experience.
      */}
      
      <section id="home">
        <HomeCard onNavigate={onNavigate} />
      </section>

      <div className="w-full flex justify-center opacity-50">
        <DiamondDivider />
      </div>

      <section id="event">
        <EventCard />
      </section>

      <section id="menu">
        <MenuCard />
      </section>

      <section id="reservation">
        <ReservationCard />
      </section>

      <section id="chefs">
        <ChefsCard />
      </section>

      <section id="manifesto">
        <ManifestoCard />
      </section>

      <section id="contact">
        <ContactCard />
      </section>
    </div>
  );
};