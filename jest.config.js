module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.svg$': '<rootDir>/jest/jestSvgTransform.js',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|js)?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['<rootDir>/setupEnzyme.ts'],
    moduleNameMapper: {
      '^Theme(.*)$': '<rootDir>/src/theme$1',
      '^Assets(.*)$': '<rootDir>/src/assets$1',
      '^Mocks(.*)$': '<rootDir>/src/mocks$1',
      '^components(.*)$': '<rootDir>/src/components$1',
      '.(css|jpg|png)$': '<rootDir>/jest/empty-module.js',
      '.svg$': 'svg-inline-loader',
    },
  }
  