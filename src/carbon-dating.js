const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity !== "string" || sampleActivity === "") 
    return false;
  
  let num = Number(sampleActivity)

  if (isNaN(num) || num > MODERN_ACTIVITY || num < 1) return false;

  let k = Math.LN2/HALF_LIFE_PERIOD;
  let ln = Math.log(MODERN_ACTIVITY/num);

  return Math.ceil(ln/k)
};
