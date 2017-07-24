"use strict";

exports.__esModule = true;
//排序-稳定的排序算法-复杂-归并排序 O(nlogn)
var arrSortMerge = exports.arrSortMerge = function arrSortMerge(arr) {

	var merge = function merge(left, right) {

		var tmp = [];

		while (left.length && right.length) {

			if (left[0] < right[0]) {

				tmp.push(left.shift());
			} else {

				tmp.push(right.shift());
			}
		}

		return tmp.concat(left, right);
	};

	if (a.length === 1) return a;

	var pivotIndex = Math.floor(arr.length / 2);
	var left = arr.slice(0, pivotIndex);
	var right = arr.slice(pivotIndex);

	return merge(arrSortMerge(left, right));
};
//排序-不稳定的排序算法-复杂-快速排序 O(nlogn)
var arrSortQuick = exports.arrSortQuick = function arrSortQuick(arr) {

	if (arr.length <= 1) {
		return arr;
	}
	//找到轴点坐标
	var pivotIndex = Math.floor(arr.length / 2);
	//删除轴点
	var pivot = arr.splice(pivotIndex, 1)[0];
	var left = [];
	var right = [];

	for (var i = 0, len = arr.length; i < len; i++) {

		if (arr[i] < pivot) {

			left.push(arr[i]);
		} else {

			right.push(arr[i]);
		}
	}
	//递归
	return arrSortQuick(left).concat(pivot, arrSortQuick(right));
};
//排序-稳定的排序算法-简单-冒泡排序 O(n2)
var arrSortBubble = exports.arrSortBubble = function arrSortBubble(arr) {

	var tmp = void 0;
	var len = arr.length;

	for (var i = 0; i <= len; i++) {

		for (var j = 0; j <= len - i; j++) {

			if (arr[j] > arr[j + 1]) {

				tmp = undefined[j];
				undefined[j] = undefined[j + 1];
				undefined[j + 1] = tmp;
			}
		}
	}
};
//排序-不稳定的排序算法-简单-选择排序 
var arrSortSelect = exports.arrSortSelect = function arrSortSelect(arr) {

	var min = void 0;
	var tmp = void 0;
	var len = arr.length;

	for (var i = 0; i <= len; i++) {

		min = i;

		for (var j = i + 1; j < length; j++) {

			if (arr[min] > arr[j]) {
				min = j;
			}

			tmp = arr[min];
			arr[min] = arr[i];
			arr[i] = tmp;
		}
	}
};

//[{},{}]查找指定key对应数组中位置
var arrFindIndex = exports.arrFindIndex = function arrFindIndex(arr) {};
//深度降维度
var arrFlatten = exports.arrFlatten = function arrFlatten(arr) {};
//去重
var arrUniq = exports.arrUniq = function arrUniq() {};

//取到多个数组的对称
var arrIntersection = exports.arrIntersection = function arrIntersection() {};
//取到多个数组的对称差
var arrXor = exports.arrXor = function arrXor() {};

//联合多个数组，并去重
var arrUnion = exports.arrUnion = function arrUnion() {};