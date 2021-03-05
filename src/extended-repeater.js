const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (options === undefined) return "";

  let tmpStr = "";
  let separator = options.separator === undefined 
    ? '+' : options.separator;
  let repeatTimes = options.repeatTimes === undefined 
    ? 0 : options.repeatTimes;
  
  let addition = "";
  let additionSeparator = options.additionSeparator === undefined 
    ? '|' : options.additionSeparator;
  let additionRepeatTimes = options.additionRepeatTimes === undefined 
    ? 0 : options.additionRepeatTimes;

  
  if (options.additionRepeatTimes === undefined && options.addition !== undefined)
    addition += options.addition;
  else {
    for (let i=0; i < additionRepeatTimes; i++){
      addition += options.addition + additionSeparator;
    }
    addition = addition.slice(0, -1*additionSeparator.length);
  }
  
  if (options.repeatTimes === undefined && str !== undefined)
    tmpStr += str + addition;
  else {
    for (let i=0; i < repeatTimes; i++){
      tmpStr += str + addition + separator;
    }
    tmpStr = tmpStr.slice(0, -1*separator.length);
  }

  return tmpStr;
};
  