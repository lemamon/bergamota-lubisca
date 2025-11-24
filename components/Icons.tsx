import React from 'react';

// STRICT PALETTE APPLIED: #FF9F1C (Orange), #F23C96 (Pink), #451D88 (Purple), #FFFCF5 (Cream)

export const JarLogo = () => (
  <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-xl filter">
    <defs>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Center everything */}
    <g transform="translate(120, 120)">
      
      {/* TEXT PATHS */}
      {/* Top Arc: BERGAMOTA */}
      <path id="curveUp" d="M -85,10 A 85,85 0 0,1 85,10" fill="none" />
      <text className="font-logo font-bold fill-brand-orange text-[34px] tracking-[0.15em]" textAnchor="middle">
        <textPath href="#curveUp" startOffset="50%">BERGAMOTA</textPath>
      </text>

      {/* Bottom Arc: LUBISCA */}
      <path id="curveDown" d="M -80,25 A 80,80 0 0,0 80,25" fill="none" />
      <text className="font-logo font-bold fill-brand-pink text-[34px] tracking-[0.15em]" textAnchor="middle" dominantBaseline="hanging">
        <textPath href="#curveDown" startOffset="50%">LUBISCA</textPath>
      </text>

      {/* DECORATIVE STARS */}
      <g transform="translate(-100, 15)">
        <path d="M0 -10 L 3 -3 L 10 0 L 3 3 L 0 10 L -3 3 L -10 0 L -3 -3 Z" fill="#FF9F1C" />
      </g>
      <g transform="translate(100, 15)">
        <path d="M0 -10 L 3 -3 L 10 0 L 3 3 L 0 10 L -3 3 L -10 0 L -3 -3 Z" fill="#F23C96" />
      </g>

      {/* CENTRAL ILLUSTRATION: THE JAR */}
      <g transform="translate(0, 15) scale(1.1)">
        {/* Jar Outline */}
        <path d="M -30 -40 L 30 -40 L 35 -25 C 55 -15 60 10 60 30 C 60 60 30 70 0 70 C -30 70 -60 60 -60 30 C -60 10 -55 -15 -35 -25 Z" 
              fill="#FFFCF5" stroke="#451D88" strokeWidth="3" strokeLinejoin="round" />
        
        {/* Lid */}
        <path d="M -32 -40 L 32 -40 L 32 -25 L -32 -25 Z" fill="#F23C96" stroke="#451D88" strokeWidth="3" />
        <line x1="-32" y1="-40" x2="-32" y2="-25" stroke="#451D88" strokeWidth="3"/>
        <line x1="32" y1="-40" x2="32" y2="-25" stroke="#451D88" strokeWidth="3"/>
        {/* Lid Ridges */}
        <line x1="-20" y1="-40" x2="-20" y2="-25" stroke="#451D88" strokeWidth="2" />
        <line x1="-8" y1="-40" x2="-8" y2="-25" stroke="#451D88" strokeWidth="2" />
        <line x1="8" y1="-40" x2="8" y2="-25" stroke="#451D88" strokeWidth="2" />
        <line x1="20" y1="-40" x2="20" y2="-25" stroke="#451D88" strokeWidth="2" />

        {/* Liquid Level */}
        <path d="M -50 20 C -50 20 -20 10 0 20 C 20 30 50 20 50 20 C 50 45 40 65 0 65 C -40 65 -50 45 -50 20" 
              fill="#FF9F1C" fillOpacity="0.2" stroke="none" />

        {/* Fruit Slice Inside */}
        <g transform="translate(0, 30) rotate(-15)">
           <path d="M -25 0 A 25 25 0 0 0 25 0 Z" fill="#FF9F1C" stroke="#451D88" strokeWidth="2" />
           <path d="M 0 0 L -18 12 M 0 0 L -8 20 M 0 0 L 8 20 M 0 0 L 18 12" stroke="#FFFCF5" strokeWidth="1.5" />
           <path d="M -25 0 L 25 0" stroke="#451D88" strokeWidth="2" />
        </g>
        
        {/* Reflection Lines */}
        <path d="M -45 0 Q -50 20 -45 40" fill="none" stroke="#F23C96" strokeWidth="1.5" opacity="0.5" />
      </g>
    </g>
  </svg>
);

export const BergamotIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <g transform="translate(5,5)">
       {/* Leaf */}
       <path d="M 25 5 Q 35 -5 45 5 Q 35 15 25 5" fill="#451D88" fillOpacity="0.1" stroke="#451D88" />
       {/* Stem */}
       <path d="M 25 5 L 25 15" stroke="#451D88" />
       {/* Fruit Body */}
       <path d="M 25 15 C 10 15 0 25 5 40 C 10 50 40 50 45 40 C 50 25 40 15 25 15 Z" 
             fill="#FF9F1C" stroke="#451D88" />
       {/* Texture */}
       <circle cx="15" cy="30" r="0.5" fill="#451D88" stroke="none"/>
       <circle cx="35" cy="30" r="0.5" fill="#451D88" stroke="none"/>
       <circle cx="20" cy="40" r="0.5" fill="#451D88" stroke="none"/>
       <circle cx="30" cy="35" r="0.5" fill="#451D88" stroke="none"/>
       <circle cx="40" cy="38" r="0.5" fill="#451D88" stroke="none"/>
    </g>
  </svg>
);

export const SmallJarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <g transform="translate(10,5)">
      {/* Lid */}
      <rect x="5" y="0" width="30" height="10" rx="2" fill="#F23C96" stroke="#451D88" />
      <line x1="10" y1="0" x2="10" y2="10" stroke="#451D88" strokeWidth="1.5" />
      <line x1="20" y1="0" x2="20" y2="10" stroke="#451D88" strokeWidth="1.5" />
      <line x1="30" y1="0" x2="30" y2="10" stroke="#451D88" strokeWidth="1.5" />
      
      {/* Jar Body */}
      <path d="M 8 10 L 5 15 L 5 40 C 5 45 10 48 20 48 C 30 48 35 45 35 40 L 35 15 L 32 10" 
            fill="#FFFCF5" stroke="#451D88" />
      
      {/* Heart Label */}
      <path d="M 20 30 C 15 25 10 25 10 32 C 10 38 20 42 20 42 C 20 42 30 38 30 32 C 30 25 25 25 20 30" 
            fill="#F23C96" stroke="#451D88" />
    </g>
  </svg>
);

export const TicketIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <g transform="translate(5, 10)">
      {/* Ticket Shape */}
      <path d="M 2 5 L 48 5 L 48 35 L 2 35 Z" fill="#FFFCF5" stroke="#451D88" />
      
      {/* Side Notches */}
      <path d="M 2 15 A 5 5 0 0 1 2 25" fill="#FFFCF5" stroke="#451D88" />
      <path d="M 48 15 A 5 5 0 0 0 48 25" fill="#FFFCF5" stroke="#451D88" />
      
      {/* Dotted Line */}
      <path d="M 35 5 L 35 35" stroke="#451D88" strokeDasharray="3 3" />
      
      {/* Star */}
      <path d="M 18 15 L 20 22 L 27 22 L 21 26 L 23 33 L 18 29 L 13 33 L 15 26 L 9 22 L 16 22 Z" 
            fill="#FF9F1C" stroke="#451D88" strokeWidth="1.5" transform="scale(0.8) translate(10, -5)" />
    </g>
  </svg>
);