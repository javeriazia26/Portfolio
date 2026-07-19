/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080B10',
          900: '#0B0F16',
          850: '#10141C',
          800: '#151A24',
          700: '#1D2330',
          600: '#2A3242',
          500: '#3D4759',
          400: '#5B6579',
          300: '#8892A3',
          200: '#B7BFCC',
          100: '#E7EAEF',
        },
        signal: {
          DEFAULT: '#3FE0A5',
          dim: '#2BAE82',
          soft: '#B7F5DE',
        },
        amber: {
          DEFAULT: '#F2B84B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        blink: 'blink 1s step-start infinite',
        marquee: 'marquee 22s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
