/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#060608',
          900: '#0a0a0d',
          850: '#101015',
          800: '#16161e',
          700: '#22222c',
          600: '#323240',
          500: '#4e4e60',
          400: '#7a7a8f',
          300: '#a3a3b5',
          200: '#cfcfe0',
          100: '#f0f0f5',
          50: '#f8f8fa',
        },
        acid: {
          DEFAULT: '#ccff00',
          hover: '#ddff33',
          dim: '#99cc00',
          glow: 'rgba(204, 255, 0, 0.25)',
        },
        graphite: '#191922',
        obsidian: '#0e0e12',
        concrete: '#8e8e96',
        bone: '#eae8e1',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syncopate', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'widest-xl': '0.35em',
      },
      boxShadow: {
        'acid-sm': '0 0 15px rgba(204, 255, 0, 0.2)',
        'acid-lg': '0 0 35px rgba(204, 255, 0, 0.35)',
        'noir-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
