const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here

    let elemDepth = 0;

    arr.forEach(element => {
      if (Array.isArray(element)){
        let tmpDepth = this.calculateDepth(element);
        elemDepth = tmpDepth > elemDepth ? tmpDepth : elemDepth;
      }
    });

    return elemDepth+1;
  }
};