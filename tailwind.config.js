/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '1.5ch 1.5ch #000',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
