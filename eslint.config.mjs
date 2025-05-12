import js from '@eslint/js'
import globals from 'globals'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  globalIgnores(['node_modules/*', 'dist/*', 'frontend/*', 'e2e-tests/*']),
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['models/**/*.js'],
  },
  eslintPluginPrettier,
])
