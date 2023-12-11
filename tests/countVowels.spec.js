const countVowels = require('../functions/countVowels');
const string = require('../string');

test('mergeArrays', () => {
  expect(countVowels(string)).toEqual(11);
});
