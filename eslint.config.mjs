/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-unresolved */

import path from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import TypeScriptESLint from '@typescript-eslint/eslint-plugin';
import TypeScriptESLintParser from '@typescript-eslint/parser';
import ESlintConfigPrettier from 'eslint-config-prettier';
import PluginUnusedImports from 'eslint-plugin-unused-imports';

const compat = new FlatCompat();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: [],
  },
  js.configs.recommended,
  ESlintConfigPrettier,
  ...compat.extends(
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ),
  {
    plugins: {
      TypeScriptESLint,
      // import: PluginImport,
      'unused-imports': PluginUnusedImports,
    },
    languageOptions: {
      parser: TypeScriptESLintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
    rules: {
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'implicit-arrow-linebreak': 'off',
      'function-paren-newline': 'off',
      'no-param-reassign': [2, { props: false }],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'object',
            'type',
            'index',
          ],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: '@/components/common',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/components/hooks',
              group: 'internal',
              position: 'before',
            },
          ],
        },
      ],
      'import/extensions': [
        'error',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'no-void': [
        'error',
        {
          allowAsStatement: true,
        },
      ],
      'import/no-extraneous-dependencies': 0,
      'jsx-a11y/html-has-lang': 'off',
    },
    settings: {
      react: {
        version: '18',
      },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
];
