/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        textShadow: {
            sm: '0 1px 2px var(--tw-shadow-color)',
            DEFAULT: '0 2px 4px var(--tw-shadow-color)',
            lg: '0 8px 6px var(--tw-shadow-color)',
        },
       colors: {
        primary: "#0055E9",
        secondary: "#0A0047",
        accent: "#EDF6FF",
      },
    },
  },
  plugins: [
      plugin(function ({ matchUtilities, theme }) {
          matchUtilities(
              {
                  'text-shadow': (value) => ({
                      textShadow: value,
                  }),
              },
              { values: theme('textShadow') }
          )
      }),
  ],
}

