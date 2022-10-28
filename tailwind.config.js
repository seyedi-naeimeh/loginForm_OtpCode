/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '1px 3px 6px rgba(0, 0, 0, 0.25), 2px 6px 12px rgba(0, 0, 0, 0.15);',
      },
      fontFamily:{
        iranyekan:['iranyekan']
      },
      
       
    },
  },
  plugins: [],
}
