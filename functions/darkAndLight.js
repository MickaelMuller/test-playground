const jedis = require('../jedis');

// Complete this function to separates Jedi into two groups: dark (Sith) and light (Jedi)

/**
 * Separates Jedi into two groups: dark (Sith) and light (Jedi).
 *
 * @param {Array} jedis - An array of objects representing Jedi, each object should have a "side" property indicating whether they are Sith or Jedi.
 * @returns {Object} - An object with two properties: "dark" containing an array of Sith Jedi and "light" containing an array of Jedi.
 *
 * @example
 * const jedis = [
 *   { name: 'Darth Vader', side: 'Sith' },
 *   { name: 'Luke Skywalker', side: 'Jedi' },
 *   // ... (other jedis)
 * ];
 *
 * const result = darkAndLight(jedis);
 * // Result:
 * // {
 * //   dark: [{ name: 'Darth Vader', side: 'Sith' }, ...],
 * //   light: [{ name: 'Luke Skywalker', side: 'Jedi' }, ...],
 * // }
 */
const darkAndLight = (jedis) => {};

console.log(`Répartition des chevaliers: ${darkAndLight(jedis)}`);

module.exports = darkAndLight;
