const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const addrArr = n.split('-');

  for (let i = 0; i < addrArr.length; i++) {
    if (addrArr[i].length !== 2) {
      return false;
    }
    for (let j = 0; j < addrArr[i].length; j++) {
      if (!symbols.includes(addrArr[i][j])) {
        return false;
      }
    }
  }
  
  return true;
}

console.log(isMAC48Address('not a MAC-48 address'));


module.exports = {
  isMAC48Address
};
