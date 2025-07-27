module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: [
      '**/__tests__/**/*.js?(x)',
      '**/?(*.)+(spec|test).js?(x)',
    ],
    transform: {
      '^.+\\.[jt]sx?$': ['babel-jest', { presets: ['@babel/preset-env'] }],
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
  };