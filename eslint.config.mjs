import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig, globalIgnores } from 'eslint/config'

import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

import prettierConfig from 'eslint-config-prettier/flat'
import prettierPlugin from 'eslint-plugin-prettier'

import boundaries from 'eslint-plugin-boundaries'
import { importX } from 'eslint-plugin-import-x'
import reactCompiler from 'eslint-plugin-react-compiler'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig([
  // 1. Глобальные игнорирования
  globalIgnores([
    '.next/**',
    'out/**',
    'dist/**',
    'coverage/**',
    'node_modules/**',
    'next-env.d.ts',
    '**/*.d.ts',
    'eslint.config.*',
  ]),

  // 2. Базовые пресеты Next.js и TS
  ...nextVitals,
  ...nextTs,

  // 3. Базовые языковые настройки для проекта
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
  },

  // 4. Плагины импортов, FSD и React Compiler
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      boundaries,
      'import-x': importX,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      prettier: prettierPlugin,
      'react-compiler': reactCompiler,
    },
    settings: {
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['./tsconfig.json'],
        },
        node: true,
      },
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**' },
        { type: 'widgets', pattern: 'src/widgets/**' },
        { type: 'features', pattern: 'src/features/**' },
        { type: 'entities', pattern: 'src/entities/**' },
        { type: 'shared', pattern: 'src/shared/**' },
      ],
    },
    rules: {
      // Интеграция React Compiler (ловит нарушения правил React 19)
      'react-compiler/react-compiler': 'error',

      // Интеграция Prettier
      'prettier/prettier': 'error',

      // Качество кода
      'eqeqeq': 'error',
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      '@typescript-eslint/no-explicit-any': 'error', // Строгий запрет any
      '@typescript-eslint/no-unused-vars': 'off', // Делегируем unused-imports

      // Неиспользуемые импорты
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // Сортировка импортов (настроено под FSD)
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Библиотеки (React, Next.js и сторонние пакеты)
            ['^react', '^next', '^@?\\w'],
            // FSD Слои (по убыванию значимости)
            ['^@/app(/.*|$)'],
            ['^@/widgets(/.*|$)'],
            ['^@/features(/.*|$)'],
            ['^@/entities(/.*|$)'],
            ['^@/shared(/.*|$)'],
            // Относительные импорты
            ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Стили
            ['^.+\\.?(css|scss|sass|less)$']
          ]
        }
      ],
      'simple-import-sort/exports': 'error',

      // Контроль Public API слайсов
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/widgets/*/*', '@/widgets/*/*/**'],
              message: 'Импортируй widgets строго через public API: "@/widgets/<slice>"',
            },
            {
              group: ['@/features/*/*', '@/features/*/*/**'],
              message: 'Импортируй features строго через public API: "@/features/<slice>"',
            },
            {
              group: ['@/entities/*/*', '@/entities/*/*/**'],
              message: 'Импортируй entities строго через public API: "@/entities/<slice>"',
            },
            {
              group: ['../**/widgets/**', '../../**/features/**', '../../../**/entities/**'],
              message: 'Используй абсолютные импорты "@/" для связи между слоями, а не относительные пути "../../"',
            }
          ],
        },
      ],

      // Strict FSD Boundaries (Слой не может зависеть от слоя выше и от соседних слайсов того же уровня)
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: 'app', allow: ['widgets', 'features', 'entities', 'shared'] },
            { from: 'widgets', allow: ['features', 'entities', 'shared'] },
            { from: 'features', allow: ['entities', 'shared'] },
            { from: 'entities', allow: ['shared'] },
            { from: 'shared', allow: ['shared'] },
          ],
        },
      ],
    },
  },

  // 5. Исключения для автосгенерированного кода API
  {
    files: ['src/shared/api/**/*.{ts,tsx}', 'src/shared/utils/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },

  // 6. Исключения для конфигурационных скриптов
  {
    files: ['**/*.config.*', '**/scripts/**'],
    rules: {
      'no-restricted-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off'
    },
  },
  
  // 7. Настройки Prettier в самом конце (чтобы переопределить конфликты)
  prettierConfig,
])
