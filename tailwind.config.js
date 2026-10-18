/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f1f6f0',
          100: '#dde9da',
          200: '#bcd4b6',
          300: '#90b487',
          400: '#5e8c52',
          500: '#3d6f33',
          600: '#2c5625',
          700: '#22441e',
          800: '#1b3719',
          900: '#132a13',
          950: '#0a1809',
        },
        ivory: {
          50: '#fffef7',
          100: '#fdfae9',
          200: '#f9f1cf',
          300: '#f3e4ab',
          400: '#ecd07d',
          500: '#e3b94f',
        },
        earth: {
          50: '#faf6ef',
          100: '#f1e7d6',
          200: '#e3cdac',
          300: '#d2ac78',
          400: '#c28f54',
          500: '#b07644',
          600: '#975e39',
          700: '#7b4a31',
          800: '#623c2b',
          900: '#503225',
        },
        sand: '#f6f1e7',
        ink: '#132a13',
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.15)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 1.2s ease both',
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
