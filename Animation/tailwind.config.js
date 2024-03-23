/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customfont: ['custom-font', 'sans'], // 'nasalization-rg' is the font family name, 'sans' is the generic fallback
        nats: ['nats', 'sans'], // 'nasalization-rg' is the font family name, 'sans' is the generic fallback
      },
    },
  },
  plugins: [],
}