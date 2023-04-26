const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['./node_modules', './src'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(config);
