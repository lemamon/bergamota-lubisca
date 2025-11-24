import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  maxWidth?: string; // e.g. "max-w-4xl"
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = "", 
  id, 
  maxWidth = "max-w-4xl" 
}) => {
  return (
    <div id={id} className={`relative w-full ${maxWidth} mx-auto mt-8 mb-16 ${className}`}>
      {children}
    </div>
  );
};