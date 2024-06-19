/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'raw': '(max-width: 375px)'},
      'tablet': {'raw': '(min-width: 376px) and (max-width: 768px)'},
      'desktop': {'raw': '(min-width: 769px) and (max-width: 1440px)'}
    },
    extend: {
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        Barlow: ["Barlow", "sans-serif"],
        BarlowCondensed: ["Barlow Condensed", "sans-serif"]
      },
      colors: {
        veryDarkNavy: 'var(--veryDarkNavy)',
        lightBlue: 'var(--lightBlue)',
        white: 'var(--white)',
      },
      backgroundImage: {
        'home-desktop': "url('./src/assets/img/home/background-home-desktop.jpg')",
        'home-mobile': "url('./src/assets/img/home/background-home-mobile.jpg')",
        'home-tablet': "url('./src/assets/img/home/background-home-tablet.jpg')",
        'destination-desktop': "url('./src/assets/img/destination/background-destination-desktop.jpg')",
        'destination-mobile': "url('./src/assets/img/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('./src/assets/img/destination/background-destination-tablet.jpg')",
        'crew-desktop': "url('./src/assets/img/crew/background-crew-desktop.jpg')",
        'crew-mobile': "url('./src/assets/img/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('./src/assets/img/crew/background-crew-tablet.jpg')",
        'technology-desktop': "url('./src/assets/img/technology/background-technology-desktop.jpg')",
        'technology-mobile': "url('./src/assets/img/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('./src/assets/img/technology/background-technology-tablet.jpg')"
      },
      boxShadow: {
        'buttonExplore': '0 0 0 88px rgba(255, 255, 255, 0.10)',
        'imgBottomBlur': '0 0px 10px 0px rgba(0, 0, 0, 1) inset'
      },
    },
  },
  plugins: [],
}
