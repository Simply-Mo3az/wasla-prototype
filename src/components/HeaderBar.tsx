import React from 'react';
import { Bell, Moon, Sun } from 'lucide-react';

interface HeaderBarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <header className="relative z-20 pt-3 px-4">
      {/* Android System Status Bar */}
      <div className="flex items-center justify-between text-xs font-semibold px-2 pb-2 text-slate-800 dark:text-slate-200">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-3.5 h-2.5 border border-current rounded-[2px] relative before:absolute before:inset-[1px] before:bg-current before:rounded-[1px]"></span>
          <span className="text-[10px]">5G</span>
        </div>
      </div>

      {/* Floating App Header Card */}
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-full px-3 py-2 shadow-card flex items-center justify-between border border-slate-100 dark:border-slate-800 transition-colors">
        {/* Right side in RTL: Avatar + Greeting */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-wasla-primary flex items-center justify-center text-white font-bold text-sm shadow-sm">
            م
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight">مساء الخير 👋</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">معاذ أحمد</span>
          </div>
        </div>

        {/* Left side in RTL: Action Buttons (Theme Toggle + Notifications) */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle Button */}
          <button 
            type="button"
            onClick={onToggleDarkMode}
            aria-label={isDarkMode ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الليلي"}
            title={isDarkMode ? "الوضع الفاتح" : "الوضع الليلي"}
            className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-amber-400 active:scale-95 shadow-sm"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Notifications Button */}
          <button 
            type="button"
            aria-label="التنبيهات"
            className="relative w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 active:scale-95 shadow-sm"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-wasla-danger ring-2 ring-white dark:ring-slate-900"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
