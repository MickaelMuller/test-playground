const array1 = require('../arrays').array1;
const array2 = require('../arrays').array2;

// Complete this function to merge 2 array. The result should be a new array containing all elements from both input arrays, sorted in ascending order.

/**
 * Merges two arrays into a single sorted array.
 *
 * @param {Array} array1 - The first sorted array.
 * @param {Array} array2 - The second sorted array.
 * @returns {Array} - A new sorted array containing all elements from both input arrays.
 *
 * @example
 * const array1 = [1, 3, 5, 7];
 * const array2 = [2, 4, 6, 8];
 * const result = mergeArrays(array1, array2);
 * // Result: [1, 2, 3, 4, 5, 6, 7, 8]
 */
const mergeArrays = (array1, array2) => {};

console.log(`Le tableau mergé: ${mergeArrays(array1, array2)}`);

module.exports = mergeArrays;
