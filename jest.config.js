module.exports = {
    rootDir: __dirname,
    globals: {
      __SYDEV__: true
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '^test/(.*)$': '<rootDir>/test/$1'
    },
    testMatch: ['<rootDir>/test/*.spec.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    "transform": {
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
    collectCoverageFrom: [
      'src/**/*.js',
      '!src/index.cjs.js'
    ]
  }
  