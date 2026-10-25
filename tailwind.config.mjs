import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      boxShadow: {
        lg: '1.5ch 1.5ch #000',
        inner: 'inset 1.5px 1px #444',
      },
    },
  },
  plugins: [typography],
};

export default config;
