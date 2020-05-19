const {random} = require('../index');

const testArr = [2, 4, 3, 1, 10, 20, 7, 9, 66];

console.log('8 leter:', random.letters(8));
console.log('8 number:', random.numbers(8));
console.log(random.upSetArray(testArr, {sort: 'asc'}).toString());
console.log(random.upSetArray(testArr, {sort: 'desc'}).toString());
console.log(random.upSetArray(testArr, {sort: 'random'}).toString());