const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};

// try {
//   // Выполняете тут код, если он выдаст ошибку, то выполнятся будет код в catch
//   date.toLocalString(); // если код выдаст ошибку, то выполнится логика в catch блоке 
// }
// catch(e) {
//   // 
//   if (e) throw new Error('Invalide date!') // Если в (e) у нас есть ошибка, то выполнится throw new Error
// } 

