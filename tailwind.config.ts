import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    // ── Override defaults so nothing slips through as an arbitrary value ──
    fontFamily: {
      sans:    ['var(--font-inter)',    'system-ui', 'sans-serif'],
      display: ['var(--font-playfair)', 'Georgia',   'serif'],
      heading: ['var(--font-playfair)', 'Georgia',   'serif'],
      mono:    ['var(--font-geist-mono)', 'monospace'],
    },

    // ── Type scale ─────────────────────────────────────────────────────────
    fontSize: {
      xs:   ['0.75rem',  { lineHeight: '1rem',    letterSpacing: '0.01em'  }],
      sm:   ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em'  }],
      base: ['1rem',     { lineHeight: '1.625rem' }],
      lg:   ['1.125rem', { lineHeight: '1.75rem'  }],
      xl:   ['1.25rem',  { lineHeight: '1.875rem' }],
      '2xl':['1.5rem',   { lineHeight: '2rem',    letterSpacing: '-0.01em' }],
      '3xl':['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
      '4xl':['2.25rem',  { lineHeight: '2.5rem',  letterSpacing: '-0.025em'}],
      '5xl':['3rem',     { lineHeight: '1.1',     letterSpacing: '-0.03em' }],
      '6xl':['3.75rem',  { lineHeight: '1.05',    letterSpacing: '-0.035em'}],
      '7xl':['4.5rem',   { lineHeight: '1',       letterSpacing: '-0.04em' }],
      '8xl':['6rem',     { lineHeight: '1',       letterSpacing: '-0.045em'}],
    },

    extend: {
      // ── Brand color palette ─────────────────────────────────────────────
      colors: {
        neutral: {
          0:    '#ffffff',
          50:   '#fafaf9',
          100:  '#f5f5f3',
          200:  '#e8e8e4',
          300:  '#d4d4ce',
          400:  '#a3a39b',
          500:  '#737368',
          600:  '#525249',
          700:  '#3a3a34',
          800:  '#262620',
          900:  '#18180f',
          950:  '#0d0d08',
        },

        brand: {
          50:   '#eff6ff',
          100:  '#dbeafe',
          200:  '#bfdbfe',
          300:  '#93c5fd',
          400:  '#60a5fa',
          500:  '#3b82f6',
          600:  '#2563eb',
          700:  '#1d4ed8',
          800:  '#1e40af',
          900:  '#1e3a8a',
          950:  '#172554',
        },

        gold: {
          50:   '#fffbeb',
          100:  '#fef3c7',
          200:  '#fde68a',
          300:  '#fcd34d',
          400:  '#fbbf24',
          500:  '#f59e0b',
          600:  '#d97706',
          700:  '#b45309',
          800:  '#92400e',
          900:  '#78350f',
        },

        surface: {
          base:     'var(--surface-base)',
          raised:   'var(--surface-raised)',
          overlay:  'var(--surface-overlay)',
          sunken:   'var(--surface-sunken)',
        },

        ink: {
          primary:   'var(--ink-primary)',
          secondary: 'var(--ink-secondary)',
          tertiary:  'var(--ink-tertiary)',
          inverse:   'var(--ink-inverse)',
          brand:     'var(--ink-brand)',
        },

        edge: {
          subtle:  'var(--edge-subtle)',
          default: 'var(--edge-default)',
          strong:  'var(--edge-strong)',
          brand:   'var(--edge-brand)',
        },
      },

      spacing: {
        '4.5':  '1.125rem',
        '13':   '3.25rem',
        '15':   '3.75rem',
        '18':   '4.5rem',
        '22':   '5.5rem',
        '26':   '6.5rem',
        '30':   '7.5rem',
        '34':   '8.5rem',
        '128':  '32rem',
        '144':  '36rem',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      boxShadow: {
        'card-sm': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card':    '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'card-md': '0 10px 15px -3px rgb(0 0 0 / 0.06), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
        'card-lg': '0 20px 25px -5px rgb(0 0 0 / 0.07), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
        'card-xl': '0 25px 50px -12px rgb(0 0 0 / 0.12)',
        'glow-brand': '0 0 0 3px rgb(59 130 246 / 0.15)',
        'glow-gold':  '0 0 0 3px rgb(245 158 11 / 0.20)',
        'inner-sm':   'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'border':     '0 0 0 1px rgb(0 0 0 / 0.06)',
      },

      transitionTimingFunction: {
        'spring':     'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-in-expo':  'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      },

      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },

      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgb(59 130 246 / 0.4)' },
          '70%':  { transform: 'scale(1)',    boxShadow: '0 0 0 10px rgb(59 130 246 / 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgb(59 130 246 / 0)' },
        },
      },

      animation: {
        'fade-up':        'fade-up 0.5s cubic-bezier(0.19, 1, 0.22, 1) both',
        'fade-up-slow':   'fade-up 0.8s cubic-bezier(0.19, 1, 0.22, 1) both',
        'fade-in':        'fade-in 0.4s ease both',
        'scale-in':       'scale-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
        'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.19, 1, 0.22, 1) both',
        'shimmer':        'shimmer 2.5s linear infinite',
        'float':          'float 4s ease-in-out infinite',
        'pulse-ring':     'pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
      },

      backgroundImage: {
        'gradient-radial':    'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise':              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
        'grid-subtle':        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },

      maxWidth: {
        '8xl':  '88rem',
        '9xl':  '96rem',
        '10xl': '104rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};

export default config;
