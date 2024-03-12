/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      "color-text": "#0a0907",
      "color-background": "#fcf0dd",
      "color-primary": "#cb9261",
      "color-secondary": "#e4b983",
      "color-accent": "#f8be4a",
      "color-error": "rgb(172, 9, 9)",
    },
    extend: {},
  },
  plugins: [],
};
