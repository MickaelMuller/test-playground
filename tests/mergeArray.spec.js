const array1 = require('../arrays').array1;
const array2 = require('../arrays').array2;
const mergeArrays = require('../functions/mergeArrays');

test('mergeArrays', () => {
  expect(mergeArrays(array1, array2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
