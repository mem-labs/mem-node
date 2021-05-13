const { eslintSettings } = require("@mem-labs/toolchain-configurations");

module.exports = {
  env: eslintSettings.baseEnv,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ...eslintSettings.plugins.typescript.parserOptions,
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    ...eslintSettings.baseRules,
    ...eslintSettings.plugins.typescript.baseRules,
  },
  overrides: [
    ...eslintSettings.baseOverrides,
    ...eslintSettings.plugins.typescript.jsOverrides,
  ],
};
