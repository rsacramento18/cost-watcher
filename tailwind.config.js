/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appBg: '#2D3142',
        sectionBg: '#4F5D75',
        fg: '#FFFFFF',
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      }
    },
  },
  plugins: [],
}

