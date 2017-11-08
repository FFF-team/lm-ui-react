'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.scss');

var _index = require('../ModelHOC/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * props:
 *  showState HOC
 *  dialogType Alert Confirm CustomPrompt CustomForm Custom
 *  headerType Alert Confirm CustomPrompt CustomForm
 *  footerType Alert Confirm Close
 *	headText
 *	contentText
 *	btnLeftText
 *  btnRightText
 *  btnLeftCbFun
 *  btnRightCbFun
 *  btnCommonFun
 *  btnCloseFun
 */
var TypeList = ["Alert", "Confirm", "CustomPrompt", "CustomForm", "Custom"];

var HeaderLit = ["Alert", "Confirm", "CustomPrompt", "CustomForm"];

var FooterList = ["Alert", "Confirm", "Close"];

var propTypes = {
	modelStyle: _propTypes2.default.object,
	showState: _propTypes2.default.bool.isRequired,
	opacity: _propTypes2.default.number,
	dialogStyle: _propTypes2.default.object,
	dialogType: _propTypes2.default.string.isRequired,
	headerType: _propTypes2.default.string,
	headerStyle: _propTypes2.default.object,
	headText: _propTypes2.default.node,
	contentStyle: _propTypes2.default.object,
	contentText: _propTypes2.default.node,
	footerType: _propTypes2.default.string,
	btnLeftText: _propTypes2.default.string,
	btnRightText: _propTypes2.default.string,
	btnCommonFun: _propTypes2.default.func,
	btnLeftCbFun: _propTypes2.default.func,
	btnRightCbFun: _propTypes2.default.func,
	btnCloseFun: _propTypes2.default.func
};

var defaultProps = {
	modelStyle: {},
	dialogStyle: {},
	headerStyle: {},
	contentStyle: {},
	dialogType: "Confirm",
	opacity: 5,
	showState: false,
	headText: '提示',
	headerType: "",
	footerType: "",
	contentText: '提示标题',
	btnLeftText: '取消',
	btnRightText: '确定',
	btnCommonFun: function btnCommonFun() {},
	btnLeftCbFun: function btnLeftCbFun() {},
	btnRightCbFun: function btnRightCbFun() {},
	btnCloseFun: function btnCloseFun() {}

};

var Dialog = function Dialog(props) {
	var dialogType = props.dialogType,
	    showState = props.showState,
	    headerType = props.headerType,
	    headerStyle = props.headerStyle,
	    contentStyle = props.contentStyle,
	    headText = props.headText,
	    footerType = props.footerType,
	    contentText = props.contentText,
	    btnLeftText = props.btnLeftText,
	    btnRightText = props.btnRightText,
	    dialogStyle = props.dialogStyle;


	if (TypeList.indexOf(dialogType) < 0) {
		alert("请传入正确dialogType！");
		return;
	}
	if (headerType && HeaderLit.indexOf(headerType) < 0) {
		alert("请传入正确headerType！");
		return;
	}
	if (footerType && FooterList.indexOf(footerType) < 0) {
		alert("请传入正确footerType！");
		return;
	}

	var clickHandler = function clickHandler(dir) {
		var btnLeftCbFun = props.btnLeftCbFun,
		    btnRightCbFun = props.btnRightCbFun,
		    btnCommonFun = props.btnCommonFun,
		    btnCloseFun = props.btnCloseFun;


		btnCommonFun();

		dir === 'left' ? btnLeftCbFun() : dir === 'right' ? btnRightCbFun() : dir === 'close' ? btnCloseFun() : null;
	};

	var dialogClass = "lm-ui-dialog";
	var headerClass = "dialog-head";
	var footerClass = "dialog-btns";
	var contentClass = "dialog-content";
	var headerTypeStr = "alert";
	var footerTypeStr = "alert";

	switch (dialogType) {
		case "Confirm":
			headerTypeStr = "confirm";
			footerTypeStr = "confirm";
			break;
		case "CustomPrompt":
			headerClass += " dialog-header-prompt";
			footerClass += " dialog-btn-prompt";
			contentClass += " dialog-prompt-content";
			dialogClass += " lm-ui-dialog-full";
			headerTypeStr = "prompt";
			footerTypeStr = "prompt";
			break;
		case "CustomForm":
			headerClass += " dialog-header-form";
			headerTypeStr = "form";
			dialogClass += " lm-ui-dialog-full";
			footerTypeStr = "custom";
			break;
		case "Custom":
			headerType === "Confirm" && (headerTypeStr = "confirm");
			footerType === "Confirm" && (footerTypeStr = "confirm");
			footerType === "Close" && (dialogClass += " lm-ui-dialog-full", footerTypeStr = "prompt", footerClass += " dialog-btn-prompt");
			headerType === "CustomPrompt" && (headerClass += " dialog-header-prompt", contentClass += " dialog-prompt-content", headerTypeStr = "prompt");
			headerType === "CustomForm" && (headerClass += " dialog-header-form", headerTypeStr = "form");
			!footerType && (footerTypeStr = "custom");
			!headerType && (headerTypeStr = "custom");
	}

	var Header = headerTypeStr !== "custom" ? _react2.default.createElement(
		'div',
		{ className: headerClass, style: headerStyle },
		headerTypeStr === "form" || headerTypeStr === "prompt" ? _react2.default.createElement(
			'p',
			{ className: 'header-form-title' },
			headText
		) : headText,
		headerTypeStr === "confirm" || headerTypeStr === "form" ? _react2.default.createElement('i', { className: 'header-close', onClick: clickHandler.bind(null, 'close') }) : null
	) : null;

	var Footer = footerTypeStr !== "custom" ? _react2.default.createElement(
		'div',
		{ className: footerClass },
		footerTypeStr === "confirm" ? _react2.default.createElement(
			'a',
			{ href: 'javascript:;',
				className: 'dialog-btn',
				onClick: clickHandler.bind(null, 'left') },
			btnLeftText
		) : null,
		_react2.default.createElement(
			'a',
			{ href: 'javascript:;',
				className: 'dialog-btn special',
				onClick: clickHandler.bind(null, footerTypeStr === "prompt" ? 'close' : 'right') },
			footerTypeStr === "prompt" ? "" : btnRightText
		)
	) : null;

	var Content = dialogType === 'Alert' || dialogType === 'Confirm' || dialogType === 'CustomPrompt' ? _react2.default.createElement(
		'div',
		{ className: contentClass, style: contentStyle },
		' ',
		contentText,
		' '
	) : props.children;

	return _react2.default.createElement(
		'div',
		{ className: dialogClass, style: dialogStyle },
		Header,
		Content,
		Footer
	);
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

exports.default = (0, _index2.default)(Dialog);
module.exports = exports['default'];