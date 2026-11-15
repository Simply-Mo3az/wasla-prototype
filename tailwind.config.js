/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wasla: {
          primary: '#004095',
          'primary-dark': '#002D6B',
          'primary-light': '#EBF2FF',
          accent: '#10B981',
          danger: '#EF4444',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          'text-primary': '#0F172A',
          'text-secondary': '#475569',
          'text-muted': '#64748B',
        }
      },
      fontFamily: {
        alexandria: ['Alexandria', 'Cairo', 'sans-serif'],
      },
      boxShadow: {
        sheet: '0px -6px 25px rgba(0, 0, 0, 0.08)',
        btn: '0px 6px 18px rgba(0, 64, 149, 0.35)',
        card: '0px 4px 14px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
