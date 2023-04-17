const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * --discard-next excludes the next element of the array from the transformed array.
 * --discard-prev excludes the previous element of the array from the transformed array.
 * --double-next duplicates the next element of the array in the transformed array.
 * --double-prev duplicates the previous element of the array in the transformed array.
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!controls.includes(arr[i])) {
      newArr.push(arr[i]);
    }

    if (arr[i] === '--double-next') {
      if ((i + 1) !== arr.length && !controls.includes(arr[i + 1])) {
        newArr.push(arr[i + 1]);
      } 
    }

    if (arr[i] === '--double-prev') {
      if (i !== 0 && !controls.includes(arr[i - 1])) {
        newArr.push(arr[i - 1]);
      }
    }

    if (arr[i] === '--discard-next') {
      if ((i + 1) !== arr.length && (i + 2) !== arr.length && !controls.includes(arr[i + 1])) {
        i = i + 2;
        continue;
      }
    }

    if (arr[i] === '--discard-prev') {
      if (i !== 0 && !controls.includes(arr[i - 1])) {
        newArr.pop();
      }
    }
  }
  
  return newArr;  
}

module.exports = {
  transform
};
