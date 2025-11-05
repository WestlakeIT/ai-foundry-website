import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        primaryDark: '#4f46e5',
        accent: '#06ffa5',
        dark: '#0a0a0a',
        darkLighter: '#1a1a1a',
        text: '#ffffff',
        textMuted: '#9ca3af'
      },
      backgroundImage: {
        gradientBrand:
          'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 100%)'
      },
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulseFade: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        }
      },
      animation: {
        gradientShift: 'gradientShift 15s ease infinite',
        float: 'float 6s ease-in-out infinite',
        pulseFade: 'pulseFade 2s infinite'
      }
    }
  },
  plugins: []
};

export default config;

