/*
 * @Author: ataola 
 * @Date: 2020-04-01 00:59:59 
 * @Descripton: 一个Javascript工具库，一个原则是尽量自己实现，不借助第三方库
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-07-11 11:34:02
 */


const random = require('./random')
const date = require('./date');
const utils = require('./utils');
const validate = require('./validate');

 module.exports = {
     random,
     date,
     utils,
     validate,
 }