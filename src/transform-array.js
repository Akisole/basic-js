const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  const command = ["--discard-next", "--discard-prev" , "--double-next", "--double-prev"]

  let tmpArr = arr.slice();

  for (let i=0; i<tmpArr.length; i++){
    if (command.includes(tmpArr[i])) {

      let tmpCommand = tmpArr[i];
      delete tmpArr[i];  

      switch(tmpCommand) {
        case "--discard-next":
          if (i+1 == tmpArr.length) break;
          delete tmpArr[i+1];
          break;
        case "--discard-prev":
          if (i-1 < 0) break;
          delete tmpArr[i-1];
          break;
        case "--double-next":
          if (i+1 == tmpArr.length) break;
          tmpArr[i] = tmpArr[i+1];
          break;
        case "--double-prev": 
          if (i-1 < 0 || tmpArr[i-1] === undefined) break;
          tmpArr[i] = tmpArr[i-1];
          break;
      }     
    }
  }

  let res = [];

  tmpArr.forEach(element => {
    res.push(element);
  });

  return res;
};
