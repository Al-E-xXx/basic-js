const { NotImplementedError } = require("../lib");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  try {
    date.getUTCSeconds();
  } catch {
    throw new Error("Invalid date!");
  }

  const m = date.getMonth();

  if (m === 11 || m <= 1) return "winter";
  if (m > 1 && m <= 4) return "spring";
  if (m > 4 && m <= 7) return "summer";
  if (m > 7 && m <= 10) return "autumn";
}

module.exports = {
  getSeason,
};
