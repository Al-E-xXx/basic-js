const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let summ = 0;

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (y > 0) {
        if (matrix[y - 1][x] !== 0) {
          summ = summ + matrix[y][x];
        }
      }
      if (y === 0) {
        summ = summ + matrix[y][x];
      }
    }
  }

  return summ;
}

module.exports = {
  getMatrixElementsSum,
};
