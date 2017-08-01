'use strict';

exports.__esModule = true;
var isEmptyObj = exports.isEmptyObj = function isEmptyObj(obj) {

	if (!Object.keys) {
		console.warn('you client don`t support Object.keys');
		return;
	}

	return Object.keys(obj).length === 0;
};