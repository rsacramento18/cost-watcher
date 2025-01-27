/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sectionBg: '#4F5D75',
        redHl: '#FF686B',
        greenHl: '#AFD5AA',
        fg: '#FFFFFF',
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      }
    },
  },
  plugins: [],
}

