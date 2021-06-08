const path = require("path");

const { jestSettings } = require("@mem-labs/toolchain-configurations");

const {
  base,
  utils: { rootAddressModuleNameMapper },
  plugins: { tsJest, jestExtended },
} = jestSettings;

const testSetupFile = path.resolve(
  process.cwd(),
  "src",
  "utils",
  "testing",
  "afterEnvSetupFile.ts"
);

module.exports = {
  ...base,
  transform: {
    ...tsJest.transform,
  },
  setupFilesAfterEnv: [...jestExtended.setupFilesAfterEnv, testSetupFile],
  moduleNameMapper: {
    ...rootAddressModuleNameMapper,
  },
};
