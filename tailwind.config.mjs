/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4AAFF5',
          navy: '#1A6DA8',
          green: '#27AE52',
        },
        ink: {
          DEFAULT: '#0F2740',
          soft: '#243B53',
        },
        paper: {
          DEFAULT: '#F5F8FB',
          deep: '#E8EEF5',
        },
        mist: '#D7E4F0',
      },
      fontFamily: {
        sans: ['"Figtree"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '6xl': '72rem',
      },
    },
  },
  plugins: [],
};
