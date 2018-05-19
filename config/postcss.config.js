const browsers = require('./browsers');

const colors = {
  'white': '#FBFAF9',
  'dark': '#323231',
  'highlight': '#1ecb7e',
}

const fonts = {
  'lato-font': 'Lato, Arial, Helvetica, sans-serif',
}

const mediaQueries = {
  'small-viewport': "(min-width: 480px)",
  'medium-viewport': "(min-width: 768px)",
  'large-viewport': "(min-width: 992px)",
  'hd-viewport': "(min-width: 1200px)",
  'extra-hd-viewport': "(min-width: 1440px)",
  'full-hd-viewport': "(min-width: 1920px)",
}

module.exports = ({ file, options }) => ({
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-cssnext': {
      'browsers': browsers,
      'features': {
        customProperties: {
          variables: {
            ...colors,
            ...fonts,
          },
        },
        customMedia: {
          extensions: {
            ...mediaQueries,
          },
        },
      },
    },
  }
});