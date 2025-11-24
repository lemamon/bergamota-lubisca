import React from 'react';
import { MenuSection as MenuSectionType } from '../../types';
import { MenuItem } from './MenuItem';
import { DiamondDivider } from '../shared/Decorations';

interface MenuSectionProps {
  section: MenuSectionType;
  isLast: boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ section, isLast }) => {
  return (
    <div className="flex flex-col items-center text-center">
      
      {/* Section Title */}
      <h2 className="inline-block relative font-sketch font-bold text-5xl text-brand-orange mb-10 tracking-widest px-6 transform -rotate-1">
        {section.title}
        {/* Scribble decoration */}
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-purple opacity-20 rounded-full"></div>
      </h2>

      {/* Items - Vertical flex stack */}
      <div className="flex flex-col gap-12 w-full max-w-2xl">
        {section.items.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </div>

      {/* Divider between sections */}
      {!isLast && (
        <div className="w-full mt-12">
            <DiamondDivider />
        </div>
      )}
    </div>
  );
};