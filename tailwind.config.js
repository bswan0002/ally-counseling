const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "sans": ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
        "serif": ["Newsreader", ...defaultTheme.fontFamily.serif],
        "display": ["'Playfair Display'"],
        "sans-display": ["Inter"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
