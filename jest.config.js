module.exports = {
  rootDir: "./src",
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  globals: {
    "ts-jest": {},
  },
  moduleFileExtensions: ["js", "ts"],
  setupFilesAfterEnv: ["jest-extended"],
};
