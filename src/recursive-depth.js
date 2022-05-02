const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    let num = 0;
    let numMax = 0;
    if (Array.isArray(arr)) {
      numMax = num = 1;
      arr.forEach((element) => {
        num += this.calculateDepth(element);
        if (num > numMax) {
          numMax = num;
        }
        num = 1;
      });
    }
    return numMax;
  }
};

module.exports = {
  DepthCalculator
};
