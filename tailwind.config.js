/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightYellow: 'rgba(255, 229, 100, 1)', // Brighter yellow
        brightYellowTransparent: 'rgba(255, 229, 100, 0)', // Transparent end
      },
    },
  },
  plugins: [],
}
