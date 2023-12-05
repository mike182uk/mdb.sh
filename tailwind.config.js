// https://tailwindcss.com/docs/configuration

const { spacing } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.tsx", "./src/app/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: colors.rose["500"],
        primaryLight: colors.rose["100"],
      },
      fontFamily: {
        body: ["var(--font-roboto)", "sans-serif"],
      },
      spacing: {
        mainContent: spacing["10"],
      },
    },
  },
}
