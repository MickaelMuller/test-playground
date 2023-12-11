const jedis = require('../jedis');

// Complete this function to calculate the average age. Be careful! The assistant filled in the information incorrectly, and negative values were entered. It's up to you to handle the conversion.

/**
 * Calculates the average age of the Jedi.
 *
 * @param {Array} jedis - An array of objects representing the Jedi, each object should have an "age" property.
 * @returns {number} - The average age of the Jedi. Returns 0 if the array is empty.
 *
 * @example
 * const jedis = [
 *   { name: 'Luke Skywalker', age: 30, side: 'Jedi' },
 *   { name: 'Obi-Wan Kenobi', age: 55, side: 'Jedi' },
 *   // ... (other jedis)
 * ];
 *
 */
const average = (jedis) => {};

console.log(`L'age moyen des Jedis: ${average(jedis)}`);

module.exports = average;
