# commonTools

> 介绍： ataola童鞋打基础的Javascript工具库


## Random

随机数生成API

#### 方法

* letters(length): 生成一个大小写字母组成的指定长度字符串

```js
const {random} = require('commonTools');
let data = random.letters(10);
console.log('data: ', data);
```

* numbers(length): 生成一个数字组成的指定长度的字符串

```js
const {random} = require('commonTools');
let data = random.numbers(10);
console.log('data: ', data);
```