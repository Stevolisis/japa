/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      lg:'950px',
      md:'768px',
      sm:"640px"
    },
    extend: {
      colors:{
        bgPrimary:'#ffffff',
        bgSecondary:'#8030ec',
        bgBlue:'#a5e9ff',
        bgOrange:'#fee5a5',
        bgRed:'#faa6a4',
        txtPrimary:'#444444',
        txtRed:'#d39d9f',
        txtinput:'#c7c7c7',
        txtLinks:'#ab91e5'
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
