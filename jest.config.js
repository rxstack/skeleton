/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  setupFiles: ["./setEnvVars.js"],
  "bail": 1,
  "verbose": true,
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  "collectCoverageFrom": [
    "src/**/*.ts"
  ],
  "coveragePathIgnorePatterns": [
    "index.ts",
  ],
};
