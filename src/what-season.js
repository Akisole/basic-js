const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) 
    return "Unable to determine the time of year!";
  // if (!(date instanceof Date)) 
  //   throw Error;
  if (Object.getOwnPropertyNames(date).length !== 0) 
    throw Error;

  let month = date.getMonth();
  let season;
  if (month < 2 || month == 11) season =  'winter';
  else if (month < 5) season =  'spring';
  else if (month < 8) season =  'summer';
  else season =  'autumn';

  return season;
};
