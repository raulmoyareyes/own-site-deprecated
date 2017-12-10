module.exports = {
  roots: ["../../src"],
  "collectCoverageFrom": [
    "**/*.{js,jsx,mjs}"
  ],
  "setupFiles": [
    "../polyfills.js",
    "./enzyme.js"
  ],
  "testMatch": [
    "**/__tests__/**/*.{js,jsx,mjs}",
    "**/?(*.)(spec|test).{js,jsx,mjs}"
  ],
  "testEnvironment": "node",
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(js|jsx|mjs)$": "../../node_modules/babel-jest",
    "^.+\\.css$": "./cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "./fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
  ],
  "moduleNameMapper": {
    "^react-native$": "react-native-web"
  },
  "moduleFileExtensions": [
    "web.js",
    "mjs",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ]
}