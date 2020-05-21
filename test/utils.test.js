const {
    utils
} = require('../index');

// test 1
// (async function() {
//     console.log('action biu!')
//     await utils.sleep(3000);
//     console.log('after sleep 3 second!');
// })();

// test 2
// (async () => {
//     console.log('action biu!');
//     utils.sleep(3000);
//     console.log('not after sleep 3 second!');
// })();

// test 3

// (() => {
//     console.log('action biu!');
//     utils.sleepNotRecommended(3000);
//     console.log('after sleep 3 second!');
// })()

// test 4

// const str = 'ataola';
// const str2 = 'hello world';
// const str3 = 'ATAOLA';

// console.log(utils.formatSentence(str, {
//     initials: false,
//     upper: true,
//     lower: false
// }));

// console.log(utils.formatSentence(str, {
//     initials: false,
//     upper: false,
//     lower: true
// }));

// console.log(utils.formatSentence(str3, {
//     initials: false,
//     upper: false,
//     lower: true
// }));

// console.log(utils.formatSentence(str3, {
//     initials: true,
//     upper: false,
//     lower: true
// }));

// console.log(utils.formatSentence(str2, {
//     initials: true,
//     upper: true,
//     lower: false
// }));

// const str = 'hello world';
// const num = 2020;
// const bool = true;
// const obj = {name: 'ataoal'};
// const arr = [2, 0, 2, 0];
// const nuo = null;
// function func() {};

// const test = [str, num, bool, obj, arr, func, nuo];

// for(const val of  test) {
//     console.log(`${val} is ${utils.valueType(val)}`);
// }



