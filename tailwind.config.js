/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Indigo-600 - High contrast, professional
        secondary: '#10B981', // Emerald-500 - Success/positive actions
        dark: '#111827', // Gray-900 - Deep dark for text
        accent: '#F59E0B', // Amber-500 - Urgency/attention
        success: '#22C55E', // Green-500 - Positive feedback
        warning: '#EF4444', // Red-500 - Alerts
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'pulse-dot': 'pulse-dot 2s infinite',
        'scale-in': 'scale-in 0.8s ease-out forwards',
      },
      boxShadow: {
        'cta': '0 20px 25px -5px rgba(79, 70, 229, 0.25), 0 10px 10px -5px rgba(79, 70, 229, 0.1)',
        'cta-hover': '0 25px 50px -12px rgba(79, 70, 229, 0.35), 0 20px 25px -5px rgba(79, 70, 229, 0.2)',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.fixed-gradient': {
          position: 'relative',
          left: 'calc(50% - 11rem)',
          aspectRatio: '1155 / 678',
          width: '36.125rem',
          transform: 'translateX(-50%) rotate(30deg)',
          background: `linear-gradient(to top right, ${theme('colors.primary')}30, ${theme('colors.blue.600')}30)`,
          opacity: '0.3',
          '@media (min-width: 640px)': {
            left: 'calc(50% - 30rem)',
            width: '72.1875rem',
          },
        },
        '.fixed-gradient-bottom': {
          position: 'relative',
          left: 'calc(50% + 3rem)',
          aspectRatio: '1155 / 678',
          width: '36.125rem',
          transform: 'translateX(-50%)',
          background: `linear-gradient(to top right, ${theme('colors.primary')}20, ${theme('colors.blue.600')}20)`,
          opacity: '0.3',
          '@media (min-width: 640px)': {
            left: 'calc(50% + 36rem)',
            width: '72.1875rem',
          },
        },
      })
    })
  ],
}

