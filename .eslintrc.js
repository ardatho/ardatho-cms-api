module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import'],
  ignorePatterns: ['.eslintrc.js', 'src/generated/**'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['error'], // raise error for usage of <any> (default was "warning")
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: false
      }
    ],
  },
};
