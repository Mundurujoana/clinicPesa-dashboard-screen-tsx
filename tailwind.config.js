/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerCurve: "#004464", 
        savingsBg: "#ccdce3",   
        appText: "#004f71", 
        warmYellow: "#ffcb05", 
        graySoft: "#f1f1f1",    
        borderGray: "#e0e0e0",  
        grayText: "#666666", 
        tabgrayText:"#afafaf",
        white: "#ffffff",


      },
      fontFamily: {
        leagueSpartan: ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
