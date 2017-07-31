const type = (data) => {

	return Object.prototype.toString.call(data).match(/.*\s(.*)]/)[1].toLowerCase();

};
//deepEqual 分类处理所有数据类型
export function funDeepEqual (arg1, arg2) {

	if (arg1 === arg2) {

		return true;

	}
	//解决Number类型 NaN 不等于 NaN
	if (typeof arg1 === 'number' && typeof arg2 === 'number' && isNaN(arg1) && isNaN(arg2)) {

		return true

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

		let arg1KeyList = Object.keys(arg1);
		let arg2KeyList = Object.keys(arg2);
		//keys长度判断
		if (arg1KeyList.length !== arg2KeyList.length) return false;

		let len = arg1KeyList.length;
		for (let i = 0; i <= len; i++) {
			//类型判断
			if (type(arg1[arg1KeyList[i]]) !== type(arg2[arg1KeyList[i]])) {

				return false

			}
			if (!funDeepEqual(arg1[arg1KeyList[i]], arg2[arg1KeyList[i]])) {

				return false

			}

		}

		return true

	}
	//Array
	if (type(arg1) === 'array' && type(arg2) === 'array') {

		let arg1Length = arg1.length;
		let arg2Length = arg2.length;
		//长度判断
		if (arg1Length !== arg2Length) return false;
		for (let i = 0; i <= arg1Length; i++) {

			//类型判断
			if (type(arg1[i]) !== type(arg2[i])) {

				return false

			}

			if (!funDeepEqual(arg1[i], arg2[i])) {

				return false

			}

		}

		return true

	}

	return false;

};
//deepClone 分类处理所有数据类型
export function funDeepClone (arg1) {

	let result;
	//undefined, null, '', 0, false
	if (!arg1) {

		return arg1;

	}
	//基础类型判断（string，number，boolean）
	let baseTypeList = ['string', 'number', 'boolean'];
	if (baseTypeList.indexOf(typeof arg1) !== -1) {

		return arg1

	}
	//复杂类型判断
	if (type(arg1) === 'array') {

		result = [];

		arg1.forEach((item, index) => {

			result[index] = funDeepClone(item)

		})

	} else if (type(arg1) === 'object') {

		result = {};

		let keyList = Object.keys(arg1);

		for (let i = 0, len = keyList.length; i < len; i++) {

			result[keyList[i]] = funDeepClone(arg1[keyList[i]])

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