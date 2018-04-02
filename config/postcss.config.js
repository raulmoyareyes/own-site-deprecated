const browsers = require('./browsers');

const colors = {
  'primary': 'rgba(0, 171, 97, 1)',
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