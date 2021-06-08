const { eslintSettings } = require("@mem-labs/toolchain-configurations");

const {
  base,
  plugins: { typescript, importOrder, prettier },
} = eslintSettings;

module.exports = {
  ...base,
  parser: typescript.parser,
  parserOptions: {
    ...typescript.parserOptions,
  },
  plugins: [...importOrder.plugins, ...typescript.plugins, ...prettier.plugins],
  extends: [...base.extends, ...typescript.extends, ...prettier.extends, ...importOrder.extends],
  rules: {
    ...base.rules,
    ...typescript.baseRules,
    ...importOrder.baseRules,
  },
  settings: { ...importOrder.configSettings },
  overrides: [...base.overrides, ...typescript.jsOverrides],
};
