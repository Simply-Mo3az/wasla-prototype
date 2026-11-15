import React from 'react';

interface MapBackgroundProps {
  isDarkMode?: boolean;
}

export const MapBackground: React.FC<MapBackgroundProps> = ({ isDarkMode = false }) => {
  return (
    <div 
      className={`absolute inset-x-0 top-0 h-[480px] overflow-hidden select-none pointer-events-none transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0F172A]' : 'bg-[#EBF0F5]'
      }`}
    >
      <svg className="w-full h-full" viewBox="0 0 412 480" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="nileGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D6E6F7" />
            <stop offset="100%" stopColor="#C2DCF5" />
          </linearGradient>
          <linearGradient id="nileGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>
        </defs>

        {/* River Nile Vector Contour */}
        <path
          d="M-40 190 Q90 230 180 170 T390 210 T460 190"
          fill="none"
          stroke={isDarkMode ? 'url(#nileGradientDark)' : 'url(#nileGradientLight)'}
          strokeWidth="56"
          strokeLinecap="round"
        />

        {/* City Blocks & Road Network */}
        <path
          d="M0 130 L412 150 M0 290 L412 270 M90 0 L130 480 M270 0 L250 480 M350 0 L370 480"
          stroke={isDarkMode ? '#1E293B' : '#FFFFFF'}
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M-10 200 L430 230 M150 0 L190 480"
          stroke={isDarkMode ? '#334155' : '#FEEA9A'}
          strokeWidth="6"
          strokeLinecap="round"
          opacity={isDarkMode ? 0.6 : 0.85}
        />

        {/* Road Label 1: Ring Road */}
        <g transform="translate(210, 138)">
          <rect 
            width="92" 
            height="20" 
            rx="10" 
            fill={isDarkMode ? '#1E293B' : '#FFFFFF'} 
            opacity="0.95" 
          />
          <text 
            x="46" 
            y="14" 
            fill={isDarkMode ? '#94A3B8' : '#64748B'} 
            fontSize="10" 
            fontWeight="600" 
            textAnchor="middle"
          >
            الطريق الدائري
          </text>
        </g>

        {/* Road Label 2: 26th of July Corridor */}
        <g transform="translate(60, 278)">
          <rect 
            width="98" 
            height="20" 
            rx="10" 
            fill={isDarkMode ? '#1E293B' : '#FFFFFF'} 
            opacity="0.95" 
          />
          <text 
            x="49" 
            y="14" 
            fill={isDarkMode ? '#94A3B8' : '#64748B'} 
            fontSize="10" 
            fontWeight="600" 
            textAnchor="middle"
          >
            محور 26 يوليو
          </text>
        </g>

        {/* User Location Pin (Interactive Glow) */}
        <g transform="translate(206, 230)">
          <circle 
            cx="0" 
            cy="0" 
            r="32" 
            fill={isDarkMode ? '#38BDF8' : '#004095'} 
            opacity="0.2" 
            className="animate-ping" 
          />
          <circle 
            cx="0" 
            cy="0" 
            r="16" 
            fill={isDarkMode ? '#0284C7' : '#004095'} 
            opacity="0.3" 
          />
          <circle 
            cx="0" 
            cy="0" 
            r="7" 
            fill={isDarkMode ? '#38BDF8' : '#004095'} 
          />
          <circle cx="0" cy="0" r="3" fill="#FFFFFF" />

          {/* Location Badge Callout */}
          <g transform="translate(0, -28)">
            <rect 
              x="-44" 
              y="-18" 
              width="88" 
              height="24" 
              rx="12" 
              fill={isDarkMode ? '#0284C7' : '#0F172A'} 
            />
            <text x="0" y="-3" fill="#FFFFFF" fontSize="11" fontWeight="600" textAnchor="middle">
              موقعك الحالي
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
