/*
 *	babel-register模块改写require命令，为它加上一个钩子。
 *	此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码。
 */
require('babel-register');

var config = require('./webpack/webpack.config'); 

module.exports = config;