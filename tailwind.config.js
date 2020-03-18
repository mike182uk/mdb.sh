const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#f55555',
        primaryLight: '#fee6e5'
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif']
      },
      spacing: {
        mainContent: defaultTheme.spacing['10']
      }
    }
  }
}
