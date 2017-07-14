"use strict";

exports.__esModule = true;
var getOffSetLeft = exports.getOffSetLeft = function getOffSetLeft(dom) {

	var offsetLeft = 0;

	while (dom.offsetParent) {

		offsetLeft += dom.offsetLeft;
		dom = dom.offsetParent;
	}

	return offsetLeft;
};