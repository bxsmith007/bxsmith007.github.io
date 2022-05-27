module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "jest", "testing-library"],
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
};
