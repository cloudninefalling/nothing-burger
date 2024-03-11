/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "color-text": "#572e3b",
      "color-background": "#c5aa91",
      "color-primary": "#d34276",
      "color-complimentary": "#e5b890",
      "color-accent": "rgb(214, 146, 112)",
      "color-error": "rgb(172, 9, 9)",
    },
    extend: {},
  },
  plugins: [],
};
