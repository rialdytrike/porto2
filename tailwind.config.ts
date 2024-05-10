/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}","./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'porto': "url('/img/bg.png')",
        
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'latar':'#F1EBDD',
        'hitam':'#272727',
       
      },
    },
 
  },
  
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};