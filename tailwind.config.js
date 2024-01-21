/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode
        "black-color-bg" :"var(--black-color-bg)",
        "gray-color": "var(--gray-color)",
        "purple-color" : "var(--purple-color)",
        "purple-smoke-color" : "var(--purple-smoke-color)",
        "white-smoke-color" : "var(--white-smoke-color)",
        "white-color": "var(--white-color)",
        "gradient-color" : "var(--gradient-color)",

        // Light mode
        "white-color-bg" : "var(--white-color-bg)",
        "white-color-smoke-bg" : "var(--white-color-smoke-bg)",
        "purple-dark-color" : "var(--purple-dark-color)",
        "black-color" : "var(--black-color)",
        "white-gradient-color" : "var(--white-gradient-color)"
      }
    },
  },
  plugins: [],
}
