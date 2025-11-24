import React from 'react';
import { MenuItem as MenuItemType } from '../../types';
import { BergamotIcon, SmallJarIcon } from '../Icons';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="group flex flex-col items-center">
      {/* Chef/Dish Icon instead of Text Name */}
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {item.brand === 'bergamota' ? (
          <div className="flex flex-col items-center gap-2">
              <BergamotIcon className="h-16 w-16 text-brand-orange drop-shadow-sm" />
              <span className="text-[10px] tracking-[0.2em] font-bold text-brand-purple/50 uppercase">Bergamota</span>
          </div>
        ) : item.brand === 'lubisca' ? (
          <div className="flex flex-col items-center gap-2">
              <SmallJarIcon className="h-14 w-14 text-brand-pink drop-shadow-sm" />
              <span className="text-[10px] tracking-[0.2em] font-bold text-brand-purple/50 uppercase">Lubisca</span>
          </div>
        ) : (
          <h3 className="font-serif text-2xl font-bold text-brand-dark group-hover:text-brand-pink transition-colors mb-3 relative inline-block">
            {item.name}
          </h3>
        )}
      </div>
      
      {/* Name of Dish (if explicit) or generic description */}
      <h3 className="font-serif text-2xl font-bold text-brand-dark mb-3">{item.name}</h3>

      {/* Ingredients List */}
      {item.ingredients && (
        <ul className="flex flex-col gap-1 items-center">
          {item.ingredients.map((ing, j) => (
            <li key={j} className="font-sketch text-2xl text-brand-purple/70 leading-normal">
              {ing}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};