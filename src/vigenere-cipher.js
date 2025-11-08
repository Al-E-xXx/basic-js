const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(direction) {
    if (direction === false) {
      this.reverse = true;
    }

    this.ALPH = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    const strWithoutSpaces = message.split(/\s+/).join("");
    let spaceIndx = [];
    let resultArr = [];
    let keyCnt = 0;
    let newSymbolInd;
    let newSymbol;

    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") {
        spaceIndx.push(i);
      }
    }

    for (let i = 0; i < strWithoutSpaces.length; i++) {
      if (this.ALPH.includes(strWithoutSpaces[i])) {
        newSymbolInd =
          (this.ALPH.indexOf(strWithoutSpaces[i]) +
            this.ALPH.indexOf(key[keyCnt])) %
          26;
        newSymbol = this.ALPH[newSymbolInd];

        resultArr.push(newSymbol);

        if (keyCnt === key.length - 1) {
          keyCnt = 0;
        } else {
          keyCnt++;
        }
      } else {
        resultArr.push(strWithoutSpaces[i]);
      }
    }

    for (let i = 0; i < spaceIndx.length; i++) {
      resultArr.splice(spaceIndx[i], 0, " ");
    }

    if (this.reverse) {
      resultArr.reverse();
    }

    return resultArr.join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    const strWithoutSpaces = message.split(/\s+/).join("");
    let spaceIndx = [];
    let resultArr = [];
    let keyCnt = 0;
    let newSymbol;

    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") {
        spaceIndx.push(i);
      }
    }

    for (let i = 0; i < strWithoutSpaces.length; i++) {
      if (this.ALPH.includes(strWithoutSpaces[i])) {
        let newSymbolInd =
          this.ALPH.indexOf(strWithoutSpaces[i]) -
          this.ALPH.indexOf(key[keyCnt]);

        if (newSymbolInd < 0) {
          newSymbolInd = newSymbolInd + 26;
        }

        newSymbol = this.ALPH[newSymbolInd];
        resultArr.push(newSymbol);

        if (keyCnt === key.length - 1) {
          keyCnt = 0;
        } else {
          keyCnt++;
        }
      } else {
        resultArr.push(strWithoutSpaces[i]);
      }
    }

    for (let i = 0; i < spaceIndx.length; i++) {
      resultArr.splice(spaceIndx[i], 0, " ");
    }

    if (this.reverse) {
      resultArr.reverse();
    }

    return resultArr.join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
