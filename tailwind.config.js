/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif',
    },

    backgroundImage: {
      app: "url('/assets/app-bg.png')",
    },

    colors: {
      ignite: {
        500: '#129E57',
      },

      yellow: {
        500: '#F7DD43',
        700: '#E5CD3D',
      },

      white: {
        900: '#FFFFFF'
      },

      gray: {
        100: '#E1E1E6',
        300: '#8D8D99',
        600: '#323238',
        800: '#202024',
        900: '#121214',
      },
    },
  },
  plugins: [],
}
