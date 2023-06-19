/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange' : {
        1 : '#FFB085',
        2 : '#FFCEB3',
        3 : '#FFD7C2',
      },
      'cyan' : {
        1 : '#00C0BA',
        2 : '#40D0CB',
        3 : '#80E0DC',
      },
      'pink' : {
        1 : '#E089D8',
        2 : '#E8A7E2',
        3 : '#EFC4EC',
      },
      'brown' : {
        1 : '#201611',
        2 : '#402C21',
        3 : '#604232',

      },

    },
  },
  
  plugins: [],
}