import React from 'react';
import { Car, Home, User, Wallet } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onChangeTab }) => {
  const tabs = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'rides', label: 'رحلاتي', icon: Car },
    { id: 'wallet', label: 'المحفظة', icon: Wallet },
    { id: 'profile', label: 'حسابي', icon: User },
  ] as const;

  return (
    <nav className="relative z-30 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-2 transition-colors">
      <div className="flex items-center justify-between">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id as TabType)}
              className="relative flex flex-col items-center gap-1 py-1 transition flex-1"
            >
              {/* Active Top Line Indicator */}
              {isActive && (
                <span className="absolute -top-2 w-8 h-1 bg-wasla-primary dark:bg-blue-400 rounded-full"></span>
              )}
              <Icon
                className={`w-5 h-5 transition ${
                  isActive 
                    ? 'text-wasla-primary dark:text-blue-400 stroke-[2.2]' 
                    : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                }`}
              />
              <span
                className={`text-[11px] font-semibold transition ${
                  isActive 
                    ? 'text-wasla-primary dark:text-blue-400' 
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
