module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.tsx",
    "!<rootDir>/src/**/*.spec.tsx",
  ],
  coverageReporters: ["lcov"],
};
