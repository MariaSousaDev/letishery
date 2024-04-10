/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sunglo': {
          '50': '#fdf4f3',
          '100': '#fce6e4',
          '200': '#fad1ce',
          '300': '#f6b0ab',
          '400': '#ed756d',
          '500': '#e35950',
          '600': '#cf3d33',
          '700': '#ae2f27',
          '800': '#902b24',
          '900': '#782924',
          '950': '#41110e',
        },
        'dawn-pink': {
          '50': '#faf7f6',
          '100': '#f4eeec',
          '200': '#eee4e1',
          '300': '#ddcac4',
          '400': '#c8aaa1',
          '500': '#b28c81',
          '600': '#9b7367',
          '700': '#815e54',
          '800': '#6c5048',
          '900': '#5c4640',
          '950': '#30231f',
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        slide: 'slide 1s ease-in-out alternate infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slide: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(5px)' },
        },
      }
    },
  },
  plugins: [],
}

