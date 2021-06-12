const { colors, spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/*.js',
    './pages/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.red['500'],
        primaryLight: colors.red['100']
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
