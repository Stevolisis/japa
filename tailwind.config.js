/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
      }
    },
  },
  plugins: [],
}
