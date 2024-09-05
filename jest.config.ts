import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  // Add your custom paths here to match files like add-two-numbers.ts
  testMatch: ['<rootDir>/problems/**/?(*.)+(spec|test|add-two-numbers).ts'], // Explicitly match the add-two-numbers file or use specific test file patterns
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};

export default config;
