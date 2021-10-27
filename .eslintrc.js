module.exports = {
  plugins: ["unused-imports"],
  extends: [
    "@cybozu/eslint-config/presets/react-typescript-prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  rules: {
    "import/order": ["error", { "newlines-between": "always" }],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
