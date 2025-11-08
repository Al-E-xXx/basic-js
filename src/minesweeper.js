const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const y = matrix.length;
  const x = matrix[0].length;
  let response = [];
  let el = 0;

  for (let i = 0; i < y; i++) {
    response[i] = [];
    for (let j = 0; j < x; j++) {
      el = 0;
      if (i !== 0 && j !== 0) {
        if (matrix[i - 1][j - 1]) el++;
      }
      if (i !== 0) {
        if (matrix[i - 1][j]) el++;
        if (j + 1 < x) {
          if (matrix[i - 1][j + 1]) el++;
        }
      }
      if (j !== 0) {
        if (matrix[i][j - 1]) el++;
        if (i + 1 < y) {
          if (matrix[i + 1][j - 1]) el++;
        }
      }
      if (j + 1 < x) {
        if (matrix[i][j + 1]) el++;
      }
      if (i + 1 < y) {
        if (matrix[i + 1][j]) el++;
      }
      if (i + 1 < y && j + 1 <= x) {
        if (matrix[i + 1][j + 1]) el++;
      }

      response[i][j] = el;
    }
  }

  return response;
}

module.exports = {
  minesweeper,
};
