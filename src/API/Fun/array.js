//排序-稳定的排序算法-复杂-归并排序 O(nlogn)
export const arrSortMerge = (arr) => {

	let merge = (left, right) => {

		let tmp = [];

		while(left.length && right.length) {

			if (left[0] < right[0]) {

				tmp.push(left.shift());

			} else {

				tmp.push(right.shift());

			}

		}

		return tmp.concat(left, right);

	};

	if (a.length === 1) return a;

	let pivotIndex = Math.floor(arr.length/2);
	let left = arr.slice(0, pivotIndex);
	let right = arr.slice(pivotIndex);
	
	return merge(arrSortMerge(left, right));

};
//排序-不稳定的排序算法-复杂-快速排序 O(nlogn)
export const arrSortQuick = (arr) => {

	if (arr.length <= 1) { return arr }
	//找到轴点坐标
	let pivotIndex = Math.floor(arr.length/2);
	//删除轴点
	let pivot = arr.splice(pivotIndex, 1)[0];
	let left = [];
	let right = [];

	for (let i = 0, len = arr.length; i < len; i++) {

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
export const arrSortBubble = (arr) => {

	let tmp;
	let len = arr.length;

	for (let i = 0; i <= len; i++) {

		for (let j = 0; j <= len - i; j++) {

			if (arr[j] > arr[j+1]) {

				tmp = this[j];
				this[j] = this[j+1];
				this[j+1] = tmp;

			}

		}

	}

};
//排序-不稳定的排序算法-简单-选择排序 
export const arrSortSelect = (arr) => {

	let min;
	let tmp;
	let len = arr.length;

	for (let i = 0; i <= len; i++) {

		min = i;

		for (let j = i + 1; j < length; j++) {

			if (arr[min] > arr[j]) { min = j; }

			tmp = arr[min];
			arr[min] = arr[i];
			arr[i] = tmp;

		}

	}

};

//[{},{}]查找指定key对应数组中位置
export const arrFindIndex = (arr) => {

};
//深度降维度
export const arrFlatten = (arr) => {

};
//去重
export const arrUniq = () => {
	
}

//取到多个数组的对称
export const arrIntersection = () => {

}
//取到多个数组的对称差
export const arrXor = () => {
	
}

//联合多个数组，并去重
export const arrUnion = () => {
	
}