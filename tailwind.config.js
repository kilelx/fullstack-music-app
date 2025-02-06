/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "#FACD66",
        "grey": "rgba(239,238,224,.25)",
        "white-light": "rgba(255,255,255,.5)",
        "dark": {
          "base": "#1D2123",
          "alt": "#1A1E1F"
        }
      },
      boxShadow: {
        'light': '0 0 5px 0 rgba(0, 0, 0, 0.5)',
        'yellow': '0 0 10px 0 rgb(255, 205, 102)',
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"]
      }
    },
  },
  plugins: [],
}