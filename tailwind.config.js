/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
      colors: {
           transparent: 'transparent',
      current: 'currentColor',
      test: '#000',
          black: {
              light: "#11111",
              dark: "#00000"
          },
          peach: {
              light: "#D5C9B9",
              dark: "#9C9388"
          },
          white: {
              medium: "#F9F9F9",
              light: "#F4F4F4",

          }

      },
           fontFamily: {
        pixer: "Pixer",
      },
      }

  },
  plugins: [],
}

