module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'prettier',
    'airbnb',
  ],
  ignorePatterns: ['*.module.css'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.module.css'],
      },
    },
  },
  rules: {
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-newline': 'off',
    'no-unused-expressions': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    semi: 'off',
    'import/no-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: ['error', 'single'],
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
  },
}
