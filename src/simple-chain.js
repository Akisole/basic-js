const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (value === undefined) this.links.push(" ");
    else this.links.push(value);

    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.links.length) {
      this.links = [];
      throw new Error;
    }
    this.links.splice(position-1, 1);

    return this;
  },
  reverseChain() {
    this.links.reverse();

    return this;
  },
  finishChain() {
    let res = "";

    let i;
    for (i=0; i<this.links.length - 1; i++)
      res += "( " + this.links[i] + " )~~";
    res += "( " + this.links[i] + " )"

    this.links = [];

    return res;
  }
};

module.exports = chainMaker;
