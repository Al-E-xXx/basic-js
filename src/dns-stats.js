const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let domMatrix = [];
  let resp = {};
  let domName = "";

  for (let i = 0; i < domains.length; i++) {
    domMatrix[i] = domains[i].split(".").reverse();
  }

  for (let i = 0; i < domMatrix.length; i++) {
    domName = "";
    for (let k = 0; k < domMatrix[i].length; k++) {
      domName += "." + domMatrix[i][k];
      if (domName in resp) {
        resp[domName] = resp[domName] + 1;
      } else {
        resp[domName] = 1;
      }
    }
  }

  return resp;
}

module.exports = {
  getDNSStats,
};
