import React from 'react';

interface SplashScreenProps {
  onStart: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  return (
    <div 
      onClick={onStart}
      className="relative w-full max-w-[420px] h-[917px] bg-gradient-to-br from-[#004095] to-[#002D6B] rounded-[36px] overflow-hidden shadow-2xl flex flex-col justify-between p-6 text-white cursor-pointer select-none mx-auto"
    >
      {/* Android Status Bar */}
      <div className="flex items-center justify-between text-xs font-semibold px-2 pt-2 opacity-90">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-3.5 h-2.5 border border-white rounded-[2px] relative before:absolute before:inset-[1px] before:bg-white before:rounded-[1px]"></span>
          <span className="text-[10px]">5G</span>
        </div>
      </div>

      {/* Brand Centerpiece */}
      <div className="flex flex-col items-center justify-center -mt-12 space-y-6">
        {/* Geometric Wasla Logo Icon */}
        <div className="relative w-40 h-28 flex items-center justify-center">
          <svg viewBox="0 0 240 160" className="w-full h-full drop-shadow-lg" fill="currentColor">
            <path d="M220 20 h-35 v35 h-25 v-45 h-35 v45 h-45 v-35 h-35 v55 h80 v25 l-25 25 h35 l30 -25 v-25 h55 z" />
            <rect x="195" y="45" width="12" height="12" />
            <rect x="145" y="45" width="12" height="12" />
            <path d="M125 105 l-20 20 l20 20 v-12 h35 v-16 h-35 z" />
          </svg>
        </div>

        {/* Brand Name & Tagline */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight">وصلة</h1>
          <p className="text-lg font-medium text-wasla-primary-light">موصلك لكل حتة</p>
          <p className="text-xs font-semibold tracking-widest text-blue-300 uppercase">
            Wasla • Smart Commute
          </p>
        </div>
      </div>

      {/* Footer Info & Tap Hint */}
      <div className="flex flex-col items-center space-y-4 pb-4">
        <button 
          onClick={onStart}
          className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold transition border border-white/20 active:scale-95"
        >
          اضغط للبدء ↵
        </button>
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
        </div>
        <span className="text-[11px] text-blue-200/80">الإصدار 1.0 • مصر</span>
      </div>
    </div>
  );
};
