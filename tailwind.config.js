/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerCurve: "#014768", // the curved teal header
        savingsBg: "#ccdce3",   // Savings card small badge background
        savingsText: "#004f71", // Savings balance text
        warmYellow: "#FFC107",  // active tab underline
        graySoft: "#F7F7F7",    // background
        borderGray: "#e0e0e0",  // borders for cards
      },
    },
  },
  plugins: [],
}