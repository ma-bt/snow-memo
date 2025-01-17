import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: [
      "dist/**",
      "**/*.config.js",
      "!**/eslint.config.js",
      "**.*.cjs",
      "**.*.js",
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: "readonly",
      },
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "off",
    },
    rules: {
      "react/prop-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
]
