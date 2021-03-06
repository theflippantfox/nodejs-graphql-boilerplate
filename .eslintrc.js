module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    semi: [2, 'never'],
    'no-unused-vars': [0],

    // Import
    'import/prefer-default-export': [0],
    'import/no-unresolved': [0],
    'import/extensions': [0],
  },
}
