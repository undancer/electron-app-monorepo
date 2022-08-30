/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import { Config } from 'jest'

/**
 * @type Config
 */
export default {
  preset: 'jest-playwright-preset',
  roots: [
    'test/src',
    'test/e2e',
  ],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.(t|j)s',
  ],
  coverageDirectory: './dist/coverage',
}
