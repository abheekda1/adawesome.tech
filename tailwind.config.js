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
        'inner': 'inset 1.5px 1px #444'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
