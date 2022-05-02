const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(param) {
    this.directReverse = param === undefined ? true : param;
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let encrStr = "";
    let keyKey = 0;

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        encrStr += message[i];
        continue;
      }
      encrStr += this.alphabet[
        (this.alphabet.indexOf(message[i]) +
          this.alphabet.indexOf(key[keyKey++ % key.length])) %
        this.alphabet.length
      ];
    }
    return this.directReverse ? encrStr : encrStr.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error();
    }
    encryptedMessage = encryptedMessage.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let decrStr = "";
    let keyKey = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!this.alphabet.includes(encryptedMessage[i])) {
        decrStr += encryptedMessage[i];
        continue;
      }
      decrStr += this.alphabet[
        (this.alphabet.indexOf(encryptedMessage[i]) -
          this.alphabet.indexOf(key[keyKey++ % key.length]) +
          this.alphabet.length) %
        this.alphabet.length
      ];
    }
    return this.directReverse ? decrStr : decrStr.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
