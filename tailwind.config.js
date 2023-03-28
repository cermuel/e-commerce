/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pry-color": "#5D5FEF",
        "input-grey": "#9796A1",
      },
      fontFamily: {
        ibm: ["IBM", "sans-serif"],
      },
    },
  },
  plugins: [],
};
