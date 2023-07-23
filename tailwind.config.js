const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--space-mono-font)', ...fontFamily.mono],
        mono: ['var(--space-mono-font)', ...fontFamily.mono],
        vt: ['var(--vt323-font)', ...fontFamily.mono]
      },
      colors: {
        'white': '#FBFEFF',
        'black': '#181B1E',
        'dark-gray': '#363D42',
        'light-gray': '#6F777E',
        'purple': '#8E6AAD',
        'blue': '#2B82A3',
        'green': '#8DB37F',
        'yellow': '#FBC056',
        'orange': '#F47D3D',
        'red': '#EF474C'
      },
      fontSize: {
        h1: ['72px', {lineHeight: 'normal'}],
        h2: ['64px'],
        h3: ['36px'],
        body: ['20px'],
        link: ['24px']
      },
      backgroundImage: {
        rainbow: 'linear-gradient(to right, #EF474C80, #F47D3D80, #FBC05680, #8DB37F80, #2B82A380, #8E6AAD80);'
      }
    },
  },
  plugins: [],
}
