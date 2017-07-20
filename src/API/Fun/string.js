//回文
export const strReverse = (str) => {

	return str.splite('').reverse().join('');

};
//修剪-空格
export const strTirm = (str) => {

	if (!str) return str;
	if (String.prototype.trim) return String.prototype.trim.call(str);
	//fallback
	return str.replace(/(^\s*)|(\s*$)/g, '');

};
//修剪-空格-左边
export const strTirmLeft = (str) => {

	if (!str) return str;

	return str.replace(/(^\s*)/g, '');

};
//修剪-空格-➡右边
export const strTirmRight = (str) => {

	if (!str) return str;

	return str.replace(/(\s*$)/g, '');

};
//重复
export const strRepeat = (str, repeatCount = 1) => {

	let string = '';

	for (let i = 0; i < repeatCount; i++) {

		string += str;

	}

	return string;

};
//截断
export const strTrunc = (str, total = 10) => {

	if (!str) return str;
	if (str.length <= total || total <= 3) return str;
	let tmplStr = str.substr(0, total-3) + '...';
	return tmplStr;

}






