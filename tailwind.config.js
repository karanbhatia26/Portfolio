/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Dark theme colors
        'cyber': {
          'blue': '#00D9FF',
          'purple': '#7C3AED',
          'pink': '#F472B6',
          'green': '#10B981',
        },
        'dark': {
          '900': '#0F172A',
          '800': '#1E293B',
          '700': '#334155',
          '600': '#475569',
        },
        // Light theme colors
        'light': {
          '50': '#F8FAFC',
          '100': '#F1F5F9',
          '200': '#E2E8F0',
          '300': '#CBD5E1',
          '400': '#94A3B8',
          '500': '#64748B',
        },
        // Semantic color system
        'primary': 'var(--color-primary)',
        'surface': 'var(--color-surface)',
        'surface-hover': 'var(--color-surface-hover)',
        'border': 'var(--color-border)',
        'text': {
          'primary': 'var(--color-text-primary)',
          'secondary': 'var(--color-text-secondary)',
        },
        'accent': {
          'primary': 'var(--color-accent-primary)',
          'secondary': 'var(--color-accent-secondary)',
          'tertiary': 'var(--color-accent-tertiary)',
          'quaternary': 'var(--color-accent-quaternary)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px var(--color-accent-primary)' },
          '100%': { boxShadow: '0 0 20px var(--color-accent-primary), 0 0 30px var(--color-accent-primary)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: 'var(--color-accent-primary)' },
        }
      }
    },
  },
  plugins: [],
};