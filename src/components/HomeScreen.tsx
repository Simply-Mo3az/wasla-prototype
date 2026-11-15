import React, { useState } from 'react';
import { HeaderBar } from './HeaderBar';
import { MapBackground } from './MapBackground';
import { BookingSheet } from './BookingSheet';
import { BottomNav } from './BottomNav';
import { TabType } from '../types';

interface HomeScreenProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onBackToSplash: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ 
  isDarkMode, 
  onToggleDarkMode, 
  onBackToSplash 
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <div className="relative w-full max-w-[420px] h-[917px] bg-[#F8FAFC] dark:bg-slate-950 rounded-[36px] overflow-hidden shadow-2xl flex flex-col justify-between select-none mx-auto border border-slate-200 dark:border-slate-800 transition-colors">
      {/* Map Graphic Layer with Dark Mode support */}
      <MapBackground isDarkMode={isDarkMode} />

      {/* Floating Top App Header with Theme Toggle Button */}
      <HeaderBar isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />

      {/* Quick Back to Splash Button (For Demo Purposes) */}
      <div className="absolute left-4 top-20 z-20">
        <button
          onClick={onBackToSplash}
          className="text-[10px] font-semibold bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-slate-600 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 transition"
        >
          شاشة الترحيب ⟲
        </button>
      </div>

      {/* Booking Bottom Sheet (Floating bottom card) */}
      <BookingSheet />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />
    </div>
  );
};
