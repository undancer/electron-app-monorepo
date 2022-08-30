/**
 * @type {import('eslint').Linter.Config}
 * @see https://eslint.org/docs/user-guide/configuring/
 */
const config = {
  extends: '@antfu',
  ignorePatterns: [
    'dist',
    'public',
    'tsconfig*.json',
  ],
  overrides: [
    {
      files: [
        'scripts/*.{ts,mjs}',
        'vite.config.ts',
        '*.js',
        '*.ts',
        '*.vue',
      ],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['*.js', '*.ts', '*.vue'],
      //   files: 'packages/**/*.{ts,js,vue}',
      rules: {
        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/brace-style': ['error', '1tbs'/* , { allowSingleLine: true } */],
        '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'no-type-imports' }], // nestjs do not need type imports here
        'curly': ['error', 'all'],
        // 'no-useless-call': 'off',
      },
    },
  ],
}

module.exports = config
