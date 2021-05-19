module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'never'],
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'object-curly-newline': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
