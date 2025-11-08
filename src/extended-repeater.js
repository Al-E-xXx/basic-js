const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let repeatTimes = 0;
  let separator = "+";
  let addition = "";
  let add = "";
  let additionRepeatTimes = 1;
  let additionSeparator = "|";
  let result = String(str);

  if (options.repeatTimes !== undefined) {
    repeatTimes = options.repeatTimes;
  }

  if (options.separator !== undefined) {
    separator = String(options.separator);
  }

  if (options.addition !== undefined) {
    addition = String(options.addition);
  }

  if (options.additionRepeatTimes !== undefined) {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  if (options.additionSeparator !== undefined) {
    additionSeparator = String(options.additionSeparator);
  }

  add = addition;
  for (let i = 0; i < repeatTimes; i++) {
    add = "";
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j + 1 === additionRepeatTimes) {
        add += addition;
      } else {
        add += addition + additionSeparator;
      }
    }

    if (i + 1 === repeatTimes) {
      break;
    }

    result += add + separator + str;
  }

  result += add;

  return result;
}

module.exports = {
  repeater,
};
