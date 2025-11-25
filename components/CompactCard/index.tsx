import React from 'react';
import { HomeCard } from '../HomeCard';
import { EventCard } from '../EventCard';
import { MenuCard } from '../MenuCard/index';
import { ReservationCard } from '../ReservationCard';
import { ChefsCard } from '../ChefsCard';
import { ManifestoCard } from '../ManifestoCard';
import { ContactCard } from '../ContactCard';
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
        <HomeCard />
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