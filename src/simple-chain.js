const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length;
  },
  addLink(value) {
    value === undefined ?
      this.arrChain.push("") :
      this.arrChain.push(value + "");
    return this;
  },
  removeLink(position) {
    if (!this.arrChain[position]) {
      this.arrChain = [];
      throw new Error();
    }
    this.arrChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
  },
  finishChain() {
    let newStr = `( ${ this.arrChain.join(" )~~( ") } )`;
    this.arrChain = [];
    return newStr;
  }
};

module.exports = {
  chainMaker
};
