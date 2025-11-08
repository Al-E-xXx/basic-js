const { NotImplementedError } = require("../lib");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

function getEmailDomain(email) {
  const i = email.indexOf("@");
  const result = email.slice(i + 1);

  if (result.indexOf("@") !== -1) {
    return getEmailDomain(result);
  } else {
    return result;
  }
}

module.exports = {
  getEmailDomain,
};
