const darkAndLight = require('../functions/darkAndLight');
const jedis = require('../jedis');

test('darkAndLight', () => {
  const dark = jedis.filter((jedi) => jedi.side === 'Sith');
  const light = jedis.filter((jedi) => jedi.side === 'Jedi');

  expect(darkAndLight(jedis)).toEqual({ dark, light });
});
