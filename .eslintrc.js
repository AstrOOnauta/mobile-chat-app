module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react-native/no-inline-styles': 0,
        'react-hooks/exhaustive-deps': 0,
        'dot-notation': 0,
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
            'no-inline-styles': false,
          },
        ],
      },
    },
  ],
};
