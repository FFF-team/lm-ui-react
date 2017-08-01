'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.funDeepEqual = funDeepEqual;
exports.funDeepClone = funDeepClone;
var type = function type(data) {

	return Object.prototype.toString.call(data).match(/.*\s(.*)]/)[1].toLowerCase();
};
//deepEqual 分类处理所有数据类型
function funDeepEqual(arg1, arg2) {

	if (arg1 === arg2) {

		return true;
	}
	//解决Number类型 NaN 不等于 NaN
	if (typeof arg1 === 'number' && typeof arg2 === 'number' && isNaN(arg1) && isNaN(arg2)) {

		return true;
	}
	//比对function
	if (typeof arg1 === 'function' && typeof arg2 === 'function') {

		return arg1.toString() === arg2.toString();
	}
	//对比RegExp
	if (arg1 instanceof RegExp && arg2 instanceof RegExp) {

		return arg1.toString() === arg2.toString();
	}
	//Date类型
	if (arg1 instanceof Date && arg2 instanceof Date) {

		return arg1.getTime() === arg2.getTime();
	}
	//Object
	if (type(arg1) === 'object' && type(arg2) === 'object') {

		var arg1KeyList = Object.keys(arg1);
		var arg2KeyList = Object.keys(arg2);
		//keys长度判断
		if (arg1KeyList.length !== arg2KeyList.length) return false;

		var len = arg1KeyList.length;
		for (var i = 0; i <= len; i++) {
			//类型判断
			if (type(arg1[arg1KeyList[i]]) !== type(arg2[arg1KeyList[i]])) {

				return false;
			}
			if (!funDeepEqual(arg1[arg1KeyList[i]], arg2[arg1KeyList[i]])) {

				return false;
			}
		}

		return true;
	}
	//Array
	if (type(arg1) === 'array' && type(arg2) === 'array') {

		var arg1Length = arg1.length;
		var arg2Length = arg2.length;
		//长度判断
		if (arg1Length !== arg2Length) return false;
		for (var _i = 0; _i <= arg1Length; _i++) {

			//类型判断
			if (type(arg1[_i]) !== type(arg2[_i])) {

				return false;
			}

			if (!funDeepEqual(arg1[_i], arg2[_i])) {

				return false;
			}
		}

		return true;
	}

	return false;
};
//deepClone 分类处理所有数据类型
function funDeepClone(arg1) {

	var result = void 0;
	//undefined, null, '', 0, false
	if (!arg1) {

		return arg1;
	}
	//基础类型判断（string，number，boolean）
	var baseTypeList = ['string', 'number', 'boolean'];
	if (baseTypeList.indexOf(typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) !== -1) {

		return arg1;
	}
	//复杂类型判断
	if (type(arg1) === 'array') {

		result = [];

		arg1.forEach(function (item, index) {

			result[index] = funDeepClone(item);
		});
	} else if (type(arg1) === 'object') {

		result = {};

		var keyList = Object.keys(arg1);

		for (var i = 0, len = keyList.length; i < len; i++) {

			result[keyList[i]] = funDeepClone(arg1[keyList[i]]);
		}
	} else if (type(arg1) === 'function') {

		result = new Function(arg1);
	} else if (type(arg1) === 'date') {

		result = new Date(arg1);
	} else if (type(arg1) === 'regexp') {

		result = new RegExp(arg1);
	}

	return result;
};