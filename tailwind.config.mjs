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
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
