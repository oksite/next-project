module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: ['./tsconfig.json'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'plugin:jsx-a11y/recommended',

    // Prettier plugin and recommended rules
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Include .prettierrc.js rules
    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    '@typescript-eslint/explicit-module-boundary-types': [
      "error",
      {
        "allowedNames": ["ignoredFunctionName", "ignoredMethodName"]
      }
    ],
    "@typescript-eslint/explicit-function-return-type": {
      "allowExpressions": true
    }
    // 'react/prop-types': 'off',
  },
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     rules: {
  //       '@typescript-eslint/explicit-module-boundary-types': ['error'],
  //     },
  //   },
  // ],
}
