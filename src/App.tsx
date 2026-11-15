import React, { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { HomeScreen } from './components/HomeScreen';
import { ScreenType } from './types';
import { Moon, Sun } from 'lucide-react';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center p-2 sm:p-6 font-alexandria transition-colors duration-300">
      {/* Device Shell Wrapper */}
      <div className="w-full max-w-[420px] transition-all duration-300">
        {currentScreen === 'splash' ? (
          <SplashScreen onStart={() => setCurrentScreen('home')} />
        ) : (
          <HomeScreen 
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
            onBackToSplash={() => setCurrentScreen('splash')} 
          />
        )}
      </div>

      {/* Screen Switcher & Theme Control (Helper for Reviewers) */}
      <footer className="mt-4 flex flex-wrap items-center justify-center gap-3 bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors">
        <span>عرض الشاشة:</span>
        <button
          onClick={() => setCurrentScreen('splash')}
          className={`px-3 py-1 rounded-full transition ${
            currentScreen === 'splash' 
              ? 'bg-wasla-primary text-white' 
              : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
          }`}
        >
          شاشة الترحيب (Splash)
        </button>
        <button
          onClick={() => setCurrentScreen('home')}
          className={`px-3 py-1 rounded-full transition ${
            currentScreen === 'home' 
              ? 'bg-wasla-primary text-white' 
              : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
          }`}
        >
          الرئيسية وحجز الرحلة (Home)
        </button>

        <span className="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-1"></span>

        {/* Global Dark Mode Switcher */}
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-amber-400 transition"
        >
          {isDarkMode ? (
            <>
              <Sun className="w-3.5 h-3.5" />
              <span>الوضع الفاتح</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-slate-600" />
              <span>الوضع الليلي</span>
            </>
          )}
        </button>
      </footer>
    </main>
  );
};

export default App;
