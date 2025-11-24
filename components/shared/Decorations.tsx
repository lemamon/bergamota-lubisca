import React from 'react';

export const DiamondDivider = () => (
  <div className="flex items-center justify-center gap-2 my-6 opacity-80">
    <div className="w-1.5 h-1.5 bg-brand-pink rotate-45"></div>
    <div className="w-20 h-[1px] bg-brand-purple/20"></div>
    <div className="w-2.5 h-2.5 border border-brand-purple rotate-45 flex items-center justify-center">
      <div className="w-1 h-1 bg-brand-orange rounded-full"></div>
    </div>
    <div className="w-20 h-[1px] bg-brand-purple/20"></div>
    <div className="w-1.5 h-1.5 bg-brand-pink rotate-45"></div>
  </div>
);

export const SketchyArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="overflow-visible">
    <path d="M5 12h12" className="animate-pulse" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export const ScribbleLine = () => (
  <svg viewBox="0 0 200 20" className="w-full h-auto text-brand-orange" preserveAspectRatio="none">
    <path d="M0,10 Q20,0 40,10 T80,10 T120,10 T160,10 T200,10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
  </svg>
);

export const StarDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`w-6 h-6 text-brand-pink ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
  </svg>
);