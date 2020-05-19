const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789'
const _generateRandom = Symbol('_generateRandom')

class Random {

  _generateRandom(raw, length) {
    let random = null;
    let output = '';
    for (let i = 0; i <= length; i++) {
      output += raw.substring(random = Math.floor(Math.random() * raw.length), random + 1);
    }
    return output;
  }

  letters(length) {
    return this._generateRandom(LETTERS, length);
  }

  numbers(length) {
    return this._generateRandom(NUMBERS, length);
  }

  upSetArray(array, {sort} = {}) {
    if (array instanceof Array) {
      if (sort === 'asc') {
        return array.sort((a, b) => {
          return a < b ? -1 : 1;
        });
      } else if (sort === 'desc') {
        return array.sort((a, b) => {
          return a > b ? -1 : 1;
        });
      } else if(sort === 'random') {
        return array.sort((a, b) => {
          return Math.random() > .5 ? -1 : 1;
        });
      }else {
        return array;
      }
    } else {
      throw new Error('please input Array!');
    }
  }

  static createRandom() {
    return new Random();
  }

}

module.exports = Random.createRandom();