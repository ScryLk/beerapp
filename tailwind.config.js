/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6359E7',
        whiteBackground: '#FFFFF',
        inputWeaknessColor: '#A5B0C0',
        ButtonsHeader: '#F7F7F7',
        ButtonUnvaible: '#7B7B7B',
        textColor: '#181F2A',
        inputColor: '#E8EAED',
        budgetButton: '#8493A7',
        configInputColors: 'F5F9FE'
        },
     },
  },
  plugins: [],
}


