/** @type {import('tailwindcss').Config} */
import { colors } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};

