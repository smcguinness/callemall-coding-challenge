module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
    "jest/globals": true,
  },
  extends: ['airbnb', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
  },
  plugins: ['react', 'jest'],
  rules: {
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
  },
}
