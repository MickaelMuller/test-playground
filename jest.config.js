const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '((spec))\\.(js|jsx)$',
  coverageProvider: 'v8',
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'text-summary'],
  moduleDirectories: ['node_modules'],
  coveragePathIgnorePatterns: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
};

module.exports = customJestConfig;
