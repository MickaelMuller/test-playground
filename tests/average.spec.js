const average = require('../functions/average');
const jedis = require('../jedis');

test('average', () => {
  expect(average(jedis)).toBe(125.5);
});
