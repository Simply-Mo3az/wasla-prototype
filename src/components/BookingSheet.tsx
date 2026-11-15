import React, { useState } from 'react';
import { ArrowLeft, Clock, MapPin, X } from 'lucide-react';
import { TripChip } from '../types';

const RECENT_CHIPS: TripChip[] = [
  { id: '1', title: 'جامعة بنها', destination: 'جامعة بنها - القليوبية' },
  { id: '2', title: 'محطة عدلي منصور', destination: 'محطة عدلي منصور التبادلية المركزية' },
  { id: '3', title: 'القرية الذكية', destination: 'القرية الذكية - 6 أكتوبر' },
];

export const BookingSheet: React.FC = () => {
  const [origin, setOrigin] = useState('موقعي الحالي');
  const [destination, setDestination] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleSelectChip = (chip: TripChip) => {
    setDestination(chip.destination);
  };

  const handleStartTrip = () => {
    if (!destination.trim()) {
      alert('يرجى تحديد وجهتك أولاً');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsBooked(true);
      setTimeout(() => setIsBooked(false), 4000);
    }, 1200);
  };

  return (
    <div className="relative z-30 mt-auto bg-white dark:bg-slate-900 rounded-t-[32px] px-5 pt-3 pb-6 shadow-sheet border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4 transition-colors">
      {/* Sheet Drag Handle */}
      <div className="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto" />

      {/* Sheet Headline */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">هتروح فين النهارده؟</h2>
        {isBooked && (
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 animate-fade-in">
            ✓ جاري البحث عن كابتن...
          </span>
        )}
      </div>

      {/* Route Inputs Container */}
      <div className="relative flex flex-col gap-2.5">
        {/* Connecting Line Between Pins */}
        <div className="absolute right-[21px] top-[30px] bottom-[30px] w-0.5 border-r-2 border-dashed border-slate-300 dark:border-slate-700 pointer-events-none" />

        {/* Input 1: Pickup / Origin */}
        <div className="relative flex items-center bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-3 hover:border-slate-300 dark:hover:border-slate-600 transition">
          {/* Green Indicator Dot (Right in RTL) */}
          <div className="relative w-4 h-4 flex items-center justify-center shrink-0 ml-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-pulse"></span>
          </div>

          {/* Text Input */}
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="نقطة الانطلاق"
            className="w-full bg-transparent text-sm font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
          />

          {/* Quick Change Badge */}
          <button
            type="button"
            onClick={() => setOrigin(origin === 'موقعي الحالي' ? 'التحرير، وسط البلد' : 'موقعي الحالي')}
            className="shrink-0 px-3 py-1 bg-blue-50 dark:bg-blue-950/70 text-wasla-primary dark:text-blue-300 text-xs font-bold rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/60 transition mr-2 border border-transparent dark:border-blue-800/50"
          >
            تغيير
          </button>
        </div>

        {/* Input 2: Destination / Drop-off */}
        <div className="relative flex items-center bg-white dark:bg-slate-800/90 border-2 border-wasla-primary dark:border-blue-500 rounded-2xl px-3.5 py-3 shadow-sm">
          {/* Red Destination Pin (Right in RTL) */}
          <div className="w-4 h-4 flex items-center justify-center shrink-0 ml-3 text-red-500">
            <MapPin className="w-4 h-4 fill-red-500 text-red-500" />
          </div>

          {/* Text Input with Accessible Placeholder */}
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="رايح فين..؟ (مثلاً: التجمع الخامس، 6 أكتوبر)"
            className="w-full bg-transparent text-sm font-medium text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none"
          />

          {destination && (
            <button
              onClick={() => setDestination('')}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-400 hover:text-slate-200 transition"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Recent Trips Section ("مشاويرك") */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold px-1">
          <span>مشاويرك السابقة</span>
          <span className="text-[11px] text-wasla-primary dark:text-blue-400 hover:underline cursor-pointer">عرض الكل</span>
        </div>

        {/* Horizontal Chips Row (RTL natural flow) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {RECENT_CHIPS.map((chip) => (
            <button
              key={chip.id}
              onClick={() => handleSelectChip(chip)}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition border ${
                destination === chip.destination
                  ? 'bg-blue-50 dark:bg-blue-950/70 text-wasla-primary dark:text-blue-300 border-wasla-primary dark:border-blue-500'
                  : 'bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-wasla-primary dark:text-blue-400" />
              <span>{chip.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Action CTA Button ("وصلني") */}
      <button
        type="button"
        disabled={isLoading}
        onClick={handleStartTrip}
        className="w-full h-14 bg-wasla-primary hover:bg-wasla-primary-dark dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-2xl font-bold text-base shadow-btn flex items-center justify-center gap-2 transition active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center gap-2 text-sm font-semibold">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            جاري تأكيد الرحلة...
          </span>
        ) : (
          <>
            <span>وصلني</span>
            <ArrowLeft className="w-5 h-5 rtl:rotate-0" />
          </>
        )}
      </button>
    </div>
  );
};
