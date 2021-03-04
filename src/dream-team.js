const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;

  let team = "";

  members.forEach(element => {
    if (isString(element)){
      let tmp = element.split(" ").join("");
      team += tmp[0].toUpperCase();
    }      
  });

  team = team.split("").sort().join("");

  return team;
};

function isString(val) {
  return (typeof val === "string" || val instanceof String);
}