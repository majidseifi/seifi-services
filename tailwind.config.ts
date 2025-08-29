import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          dark: '#0a0a0a',
          gray: '#111111',
        },
        accent: {
          yellow: '#FFB800',
          blue: '#009DFF',
        },
        text: {
          white: '#ffffff',
          gray: '#cccccc',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out',
        'slide-in': 'slideIn 1.5s ease-out 0.5s both',
        'hero-float': 'heroFloat 6s ease-in-out infinite',
        'modal-fade': 'modalFadeIn 0.3s ease-out',
        'modal-slide': 'modalSlideIn 0.3s ease-out',
        'shimmer': 'shimmer 2s infinite 3s',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { transform: 'scaleX(0)', transformOrigin: 'left' },
          to: { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        modalFadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        modalSlideIn: {
          from: { transform: 'translateY(-50px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config