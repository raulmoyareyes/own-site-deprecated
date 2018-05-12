const browsers = require('./browsers');

const colors = {
  'white': '#FBFAF9',
  'dark': '#323231',
  'highlight': '#1DCA7F',
}

const mediaQueries = {
  'example-viewport': "(min-width: 480px)",
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