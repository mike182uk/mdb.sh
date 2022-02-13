const { spacing } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/*.js',
    './pages/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.rose['500'],
        primaryLight: colors.rose['100']
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif']
      },
      spacing: {
        mainContent: spacing['10']
      }
    }
  }
}
