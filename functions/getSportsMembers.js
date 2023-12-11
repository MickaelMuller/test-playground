const sports = require('../sports').sports;
const users = require('../sports').users;

/* This involves writing a function getActivitiesMembers that receives two arguments:

an array representing artistic, sports, etc., activities.
a second array representing individuals and their hobbies.
 */

/**
 * Generates an array of objects linking activities to persons based on their hobbies.
 *
 * @param {Array} activities - An array representing various activities, such as artistic or sports activities.
 * @param {Array} persons - An array representing individuals and their hobbies, where each person object has a "name" property and an "activities" property containing an array of hobbies.
 * @returns {Array} - An array of objects, each containing an "activity" property representing an activity and a "persons" property with an array of names of individuals participating in that activity.
 *
 * @example
 * const activities = ['Painting', 'Swimming', 'Reading'];
 * const persons = [
 *   { name: 'Alice', activities: ['Painting', 'Reading'] },
 *   { name: 'Bob', activities: ['Swimming', 'Reading'] },
 *   // ... (other persons)
 * ];
 *
 * const result = getActivitiesMembers(activities, persons);
 * // Result:
 * // [
 * //   { activity: 'Painting', persons: ['Alice'] },
 * //   { activity: 'Swimming', persons: ['Bob'] },
 * //   { activity: 'Reading', persons: ['Alice', 'Bob'] },
 * // ]
 */
function getSportsMembers(sports, users) {}

console.log(`Sports par membres : ${getSportsMembers(sports, users)}`);

module.exports = getSportsMembers;
