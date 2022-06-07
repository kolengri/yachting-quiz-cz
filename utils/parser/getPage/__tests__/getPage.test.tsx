import { getPage as fnToTest } from '../getPage';

const testCases = {
  'regular result check': {
    fnResult: fnToTest({}),
    expectedResults: undefined,
  },
};

describe('parser -> getPage test cases', () => {
  for (const [testCaseName, { fnResult, expectedResults }] of Object.entries(testCases)) {
    describe(`for ${testCaseName}`, () => {
      it(`should return correct value`, () => {
        expect(fnResult).toEqual(expectedResults);
      });
    });
  }
});
