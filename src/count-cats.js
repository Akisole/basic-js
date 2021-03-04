const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let numCats = 0;

  matrix.forEach(element => {
    element.forEach(find => {
      if (find == '^^') numCats++;
    });
  });

  return numCats;
};
