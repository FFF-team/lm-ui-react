export function getDomSize(dom) {

	//兼容判断
	if (!document.documentElement.getBoundingClientRect) {

		return {

			width: 0,
			height: 0,
			error_msg: '浏览器不支持getBoundingClientRect'

		}

	}

	let domSize = dom.getBoundingClientRect();

	return {

		width: domSize.width,
		height: domSize.height

	}

};