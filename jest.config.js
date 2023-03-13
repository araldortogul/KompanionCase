//const jestPreset = require("@testing-library/react-native/jest-preset")

// @type {import('jest').Config}
const config = {
  preset: "react-native",
  "moduleNameMapper": {
    "\\.svg": "<rootDir>/__mocks__/svgMock.js"
  },
  "transformIgnorePatterns": [
    "/node_modules/?!(react-navigation)"
  ],
  "fakeTimers": {
    "enableGlobally": true
  },
  "setupFiles": [
    "<rootDir>/__mocks__/asyncStorageMock.js",
    "<rootDir>/__setup__/jestfetchmock.setup.js"
    //...jestPreset.setupFiles
  ],
  "setupFilesAfterEnv": [
    "@testing-library/jest-native/extend-expect"
    //"<rootDir>/__setup__/jest.setup.js"
  ],
  "collectCoverage": true,
  "coverageReporters": ["json", "html"],
  "displayName": {
    "name": "Kompanion Case Study Tests",
    "color": "blue"
  },
  "resetMocks": false
};

module.exports = config;