const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  let result = false;

  if (!Array.isArray(members)) {
    return result;
  }

  const firstLetters = [];

  for (const item of members) {
    if (typeof item === "string") {
      const trimmed = item.trim();

      if (trimmed.length > 0) {
        firstLetters.push(trimmed[0].toUpperCase());
      }
    }
  }

  firstLetters.sort();

  if (firstLetters.length > 0) {
    result = firstLetters.join("");
  }

  return result;
}

module.exports = {
  createDreamTeam,
};
