const getSportsMembers = require('../functions/getSportsMembers');
const sports = require('../sports').sports;
const users = require('../sports').users;

const result = [
  {
    activity: 'Badminton',
    persons: ['Jay Fox', 'Jenson Gardner', 'Jaydon Gallagher', 'Tripp Cash'],
  },
  {
    activity: 'Tennis',
    persons: ['Jenson Gardner', 'Efrain Rollins'],
  },
  {
    activity: 'Volley-ball',
    persons: ['Nicholas Knight', 'Efrain Rollins'],
  },
  {
    activity: 'Base-ball',
    persons: ['Max Dean', 'Cody May', 'Nicholas Knight'],
  },
  { activity: 'Soccer', persons: ['Max Dean'] },
  {
    activity: 'Basket-ball',
    persons: ['Cody May', 'Fletcher Estes', 'Jaydon Gallagher'],
  },
  { activity: 'Cycling', persons: ['Ross Howard'] },
];

test('average', () => {
  expect(getSportsMembers(sports, users)).toEqual(result);
});
