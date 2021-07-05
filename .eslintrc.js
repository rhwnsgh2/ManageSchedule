module.exports = {
  root: true,

  extends: '@react-native-community',

  rules: {
    'prettier/prettier': ['error', {singleQuote: true, endOfLine: 'auto'}],

    quotes: ['error', 'single'],

    'linebreak-style': ['error', 'windows'],
  },
};
