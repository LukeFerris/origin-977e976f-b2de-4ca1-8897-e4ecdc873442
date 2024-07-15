module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "no-unused-vars": "off",
    "no-console": "off",
    "no-debugger": "off",
    semi: "off",
    quotes: "off",
    indent: "off",
    "comma-dangle": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/display-name": "off",
    "arrow-body-style": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "no-extra-semi": "off",
    "no-empty-pattern": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
