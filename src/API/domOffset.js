export const getOffSetLeft = (dom) => {

	let offsetLeft = 0;

	while (dom.offsetParent) {

		offsetLeft += dom.offsetLeft;
		dom = dom.offsetParent;

	}

	return offsetLeft

};
