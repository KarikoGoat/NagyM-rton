/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('../public/background.svg')",
        'background2': "url('../public/sz6.jpg')",
        'background3': "url('../public/g5.jpg')",
        'background4': "url('../public/u6.jpg')",
        'leftArrow': "url('../public/leftArrow.svg')",
        'rightArrow': "url('../public/rightArrow.svg')",
      },
      colors: {
        'inputBg': "rgba(255, 255, 255, 0.50)"
      },
    },
  },
  plugins: [],
}
