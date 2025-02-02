/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure these match your file structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
};
