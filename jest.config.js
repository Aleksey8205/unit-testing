module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.[jt]sx?$': ['babel-jest', { presets: ['@babel/preset-env'] }],
    },
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['html'],
  };