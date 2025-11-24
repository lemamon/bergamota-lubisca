import React from 'react';

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  hasDashedBorder?: boolean;
}

export const PaperCard: React.FC<PaperCardProps> = ({ 
  children, 
  className = "", 
  innerClassName = "",
  hasDashedBorder = false 
}) => {
  return (
    <div className={`bg-brand-cream relative shadow-[0_15px_50px_-10px_rgba(69,29,136,0.15)] border border-brand-purple/5 p-2 md:p-4 ${className}`}>
      {hasDashedBorder ? (
        <div className="border-[2px] border-dashed border-brand-pink p-1 h-full">
          <div className={`border-[2px] border-solid border-brand-purple h-full w-full py-12 px-6 md:px-12 relative bg-white/60 backdrop-blur-sm flex flex-col ${innerClassName}`}>
            {children}
          </div>
        </div>
      ) : (
        <div className={`border-[2px] border-solid border-brand-purple h-full w-full py-12 px-6 md:px-12 relative bg-white/60 backdrop-blur-sm flex flex-col ${innerClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};