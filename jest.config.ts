import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'json'],
    // Match all .ts files in the "problems" folder
    testMatch: ['<rootDir>/problems/**/*.ts'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    // Ignore specific files, like tempCodeRunnerFile.ts
    testPathIgnorePatterns: [
        '/node_modules/',
        '/tempCodeRunnerFile.ts', // Ignore tempCodeRunnerFile.ts
    ],
};

export default config;
