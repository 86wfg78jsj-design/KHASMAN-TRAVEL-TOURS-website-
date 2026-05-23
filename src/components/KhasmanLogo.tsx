import React from "react";

interface KhasmanLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const KhasmanLogo: React.FC<KhasmanLogoProps> = ({ 
  className = "", 
  showText = true,
  size = "md" 
}) => {
  // Dimensions based on size prop
  const iconSize = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-24 h-24"
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Decorative Golden Graphic SVG */}
      <div className={`relative ${iconSize} flex-shrink-0 bg-navy-light/40 border border-gold-gold/20 p-1 rounded-xl shadow-inner gold-glow transition-all duration-300 hover:border-gold-gold/50`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-gold-gold"
        >
          <defs>
            {/* Rich gold metallic gradient */}
            <linearGradient id="gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#AA7C11" /> {/* gold-dark */}
              <stop offset="30%" stopColor="#D4AF37" /> {/* gold-gold */}
              <stop offset="50%" stopColor="#F3E5AB" /> {/* gold-light */}
              <stop offset="70%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#AA7C11" />
            </linearGradient>
            
            {/* Shimmer gradient for hover effect */}
            <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background Mountains contour */}
          {/* Left Peak with shading */}
          <path
            d="M 12 58 L 32 32 L 48 58 Z"
            fill="url(#gold-metallic)"
            opacity="0.55"
          />
          <path
            d="M 32 32 L 34 58 L 48 58 Z"
            fill="#AA7C11"
            opacity="0.3"
          />

          {/* Right Peak with shading */}
          <path
            d="M 52 56 L 70 34 L 88 56 Z"
            fill="url(#gold-metallic)"
            opacity="0.7"
          />
          <path
            d="M 70 34 L 72 56 L 88 56 Z"
            fill="#AA7C11"
            opacity="0.4"
          />

          {/* Main Central Peak */}
          <path
            d="M 24 55 L 48 20 L 72 55 Z"
            fill="url(#gold-metallic)"
          />
          {/* Central Peak Right shading side */}
          <path
            d="M 48 20 L 50 55 L 72 55 Z"
            fill="#AA7C11"
            opacity="0.45"
          />

          {/* Three Small Pine/Fir Trees on the Left */}
          <path d="M 16 58 L 19 53 L 22 58 Z" fill="url(#gold-metallic)" />
          <path d="M 21 58 L 23.5 54 L 26 58 Z" fill="url(#gold-metallic)" />
          <path d="M 25 58 L 27 55 L 29 58 Z" fill="url(#gold-metallic)" />

          {/* Sweeping flight trail starting as road and flying up into sky */}
          {/* Curve 1: The winding road starting on left */}
          <path
            d="M 15 52 C 25 45, 38 48, 48 44 C 60 40, 75 32, 85 22"
            stroke="url(#gold-metallic)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Curve 2: The bottom curve making the thick road trail */}
          <path
            d="M 17 56 C 28 49, 40 52, 50 47 C 62 42, 78 32, 88 20"
            stroke="url(#gold-metallic)"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Ascending Airplane taking off at top-right */}
          <g transform="translate(85, 20) rotate(-28) scale(0.65)">
            {/* Airplane Body */}
            <path
              d="M -12 0 C -6 -1.5, 6 -1.5, 12 0 C 6 1.5, -6 1.5, -12 0 Z"
              fill="url(#gold-metallic)"
            />
            {/* Front wing (top) */}
            <path
              d="M -2 -1 L 2 -12 L 6 -12 L 1 -1 Z"
              fill="url(#gold-metallic)"
            />
            {/* Back wing (bottom) */}
            <path
              d="M -2 1 L 2 12 L 6 12 L 1 1 Z"
              fill="url(#gold-metallic)"
            />
            {/* Tail fin */}
            <path
              d="M -10 0 L -13 5 L -11 5 L -8 0 Z"
              fill="url(#gold-metallic)"
            />
          </g>

          {/* Prado 4x4 Offroader Silhouette parked on the foreground right */}
          <g transform="translate(56, 48) scale(0.35)">
            {/* SUV Body and Chasis */}
            <path
              d="M 2 18 L 1 14 L 3 11 L 11 9 L 26 9 L 34 11 L 37 14 L 37 18 L 35 18 C 34 16, 31 16, 30 18 L 13 18 C 12 16, 9 16, 8 18 Z"
              fill="url(#gold-metallic)"
            />
            {/* SUV Windshield & Cabin windows outline */}
            <path
              d="M 12 10.5 L 25 10.5 L 29 13 L 29 14.5 L 4 14.5 Z"
              fill="#081B33"
              opacity="0.8"
            />
            {/* Front and Back Wheels */}
            <circle cx="8" cy="19" r="3.5" fill="url(#gold-metallic)" />
            <circle cx="8" cy="19" r="1.5" fill="#040E1B" />
            <circle cx="31" cy="19" r="3.5" fill="url(#gold-metallic)" />
            <circle cx="31" cy="19" r="1.5" fill="#040E1B" />
          </g>

          {/* Elegant horizontal ground line */}
          <line
            x1="10"
            y1="58"
            x2="90"
            y2="58"
            stroke="url(#gold-metallic)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Decorative Brand Text Branding matching the logo style */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-display font-extrabold text-lg md:text-xl tracking-[0.14em] text-white">
              KHASMAN
            </span>
            <span className="font-display font-bold text-[10px] md:text-[11px] text-navy-dark bg-gradient-to-r from-gold-gold to-gold-light tracking-wider px-1.5 py-0.5 rounded shadow">
              TOURS
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.22em] text-gray-300 font-medium flex items-center mt-1">
            <span className="w-1.5 h-[1px] bg-gold-gold/60 mr-1.5 inline-block"></span>
            Travel &amp; Tours
            <span className="w-1.5 h-[1px] bg-gold-gold/60 ml-1.5 inline-block"></span>
          </span>
        </div>
      )}
    </div>
  );
};
