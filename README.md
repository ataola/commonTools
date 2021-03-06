# commonTools

> 介绍： ataola童鞋打基础的Javascript工具库


## Random

随机数生成API

#### 方法

* letters(length): 生成一个大小写字母组成的指定长度字符串

```js
const {random} = require('zjtcommontools');
let data = random.letters(10);
console.log('data: ', data);
```

* numbers(length): 生成一个数字组成的指定长度的字符串

```js
const {random} = require('zjtcommontools');
let data = random.numbers(10);
console.log('data: ', data);
```

* upSetArray(array, {sort}): 数组升序、降序、随机排序

sort接收三个参数 `asc`, `desc`,`random`。

```js
const testArr = [2, 4, 3, 1, 10, 20, 7, 9, 66];
console.log(random.upSetArray(testArr, {sort: 'asc'}).toString());
console.log(random.upSetArray(testArr, {sort: 'desc'}).toString());
console.log(random.upSetArray(testArr, {sort: 'random'}).toString());
```

## Date

关于日期相关的函数

#### 方法

* timestampDuration(): 将时间戳转换成按天小时分钟秒格式的时间间隔格式

```js
const {date} = require('zjtcommontools');

console.log(date.timestampDuration(Date.now()));
console.log(date.timestampDuration(86400000));
console.log(date.timestampDuration(3600000));
console.log(date.timestampDuration(60000));
console.log(date.timestampDuration(1000));
```

* toString(): 日期转成 几分钟前 几小时前  昨天 前天  日期xxx

```js
const {date} = require('zjtcommontools');

console.log(date.toString("Wed May 06 2020 20:19:30 GMT+0800 (中国标准时间)"));
```

* dateFormat(): 转成 YYYY-MM-DD HH:MM:SS 或者 YYYY/MM/DD HH:MM:SS
```js
const {date} = require('zjtcommontools');
console.log(date.dateFormat("Wed May 06 2020 20:19:30 GMT+0800 (中国标准时间)", 'YYYY-MM-DD')); //2020-05-06
console.log(date.dateFormat("Wed May 06 2020 20:19:30 GMT+0800 (中国标准时间)", 'YYYY/MM/DD')); //2020/05/06
```

## File

#### 方法

* 读取一个文件

* 写入一个文件

* 读取流

* 写入流


## Util

通用工具包

#### 方法

* sleep(millisecond), 延迟函数

```js
const {utils} = require('zjtcommontools');
(async function() {
    console.log('action biu!')
    await utils.sleep(3000);
    console.log('after sleep 3 second!');
})();
```
* formatSentence(str, { initials, upper, lower})  大小写转换函数

initials是否支持首字母大小写， upper大写， lower小写

```js
const {utils} = require('zjtcommontools');
const str = 'ataola';
const str2 = 'hello world';
const str3 = 'ATAOLA';

console.log(utils.formatSentence(str, {
    initials: false,
    upper: true,
    lower: false
}));

console.log(utils.formatSentence(str, {
    initials: false,
    upper: false,
    lower: true
}));

console.log(utils.formatSentence(str3, {
    initials: false,
    upper: false,
    lower: true
}));

console.log(utils.formatSentence(str3, {
    initials: true,
    upper: false,
    lower: true
}));

console.log(utils.formatSentence(str2, {
    initials: true,
    upper: true,
    lower: false
}));
```
* valueType(value) 值类型检测

```js
const {utils} = require('zjtcommontools');
const str = 'hello world';
const num = 2020;
const bool = true;
const obj = {name: 'ataola'};
const arr = [2, 0, 2, 0];
const nuo = null;
function func() {};

const test = [str, num, bool, obj, arr, func, nuo];

for(const val of  test) {
    console.log(`${val} is ${utils.valueType(val)}`);
}
```


