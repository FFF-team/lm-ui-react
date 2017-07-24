'use strict';

exports.__esModule = true;
//回文
var strReverse = exports.strReverse = function strReverse(str) {

	return str.splite('').reverse().join('');
};
//修剪-空格
var strTirm = exports.strTirm = function strTirm(str) {

	if (!str) return str;
	if (String.prototype.trim) return String.prototype.trim.call(str);
	//fallback
	return str.replace(/(^\s*)|(\s*$)/g, '');
};
//修剪-空格-左边
var strTirmLeft = exports.strTirmLeft = function strTirmLeft(str) {

	if (!str) return str;

	return str.replace(/(^\s*)/g, '');
};
//修剪-空格-➡右边
var strTirmRight = exports.strTirmRight = function strTirmRight(str) {

	if (!str) return str;

	return str.replace(/(\s*$)/g, '');
};
//重复
var strRepeat = exports.strRepeat = function strRepeat(str) {
	var repeatCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


	var string = '';

	for (var i = 0; i < repeatCount; i++) {

		string += str;
	}

	return string;
};
//截断
var strTrunc = exports.strTrunc = function strTrunc(str) {
	var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;


	if (!str) return str;
	if (str.length <= total || total <= 3) return str;
	var tmplStr = str.substr(0, total - 3) + '...';
	return tmplStr;
};