const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 * chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '( 1 )~~( 2 )~~( 3 )'
 * chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() => '( 2 )~~( 3 )'
 * chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() => '( 2 )~~( 1 )~~( 3 )'
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    
    return this;
  },
  removeLink(position) {
    if (position - 1 < this.getLength() && position - 1 >= 0 ) {
      this.chain.splice(position - 1, 1);
      
      return this;
    } else {
      this.chain = [];
      
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    
    return result;
  }
};

module.exports = {
  chainMaker
};
