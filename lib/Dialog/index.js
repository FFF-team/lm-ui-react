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
 *  dialogType
 *	headText
 *	contentText
 *	btnLeftText
 *  btnRightText
 *  btnLeftCbFun
 *  btnRightCbFun
 *  btnCommonFun
 */

var propTypes = {
	dialogType: _propTypes2.default.string.isRequired,
	showState: _propTypes2.default.bool.isRequired,
	opacity: _propTypes2.default.number,
	headText: _propTypes2.default.node,
	contentText: _propTypes2.default.node,
	btnLeftText: _propTypes2.default.string,
	btnRightText: _propTypes2.default.string,
	btnCommonFun: _propTypes2.default.func,
	btnLeftCbFun: _propTypes2.default.func,
	btnRightCbFun: _propTypes2.default.func

};

var defaultProps = {
	dialogType: "Confirm",
	opacity: 5,
	showState: false,
	headText: '提示',
	contentText: '提示标题',
	btnLeftText: '取消',
	btnRightText: '确定',
	btnCommonFun: function btnCommonFun() {},
	btnLeftCbFun: function btnLeftCbFun() {},
	btnRightCbFun: function btnRightCbFun() {}

};

var Dialog = function Dialog(props) {
	var dialogType = props.dialogType,
	    opacity = props.opacity,
	    showState = props.showState,
	    headText = props.headText,
	    contentText = props.contentText,
	    btnLeftText = props.btnLeftText,
	    btnRightText = props.btnRightText;


	var clickHandler = function clickHandler(dir) {
		var btnLeftCbFun = props.btnLeftCbFun,
		    btnRightCbFun = props.btnRightCbFun,
		    btnCommonFun = props.btnCommonFun;


		btnCommonFun();

		dir === 'left' ? btnLeftCbFun() : dir === 'right' ? btnRightCbFun() : null;
	};

	return _react2.default.createElement(
		'div',
		{ className: 'lm-ui-dialog' },
		_react2.default.createElement(
			'div',
			{ className: 'dialog-head' },
			headText
		),
		_react2.default.createElement(
			'div',
			{ className: 'dialog-content' },
			contentText
		),
		_react2.default.createElement(
			'div',
			{ className: 'dialog-btns' },
			dialogType === "Confirm" ? _react2.default.createElement(
				'a',
				{
					href: 'javascript:;',
					className: 'dialog-btn',
					onClick: clickHandler.bind(null, 'left') },
				btnLeftText
			) : null,
			_react2.default.createElement(
				'a',
				{
					href: 'javascript:;',
					className: 'dialog-btn special',
					onClick: clickHandler.bind(null, 'right') },
				btnRightText
			)
		)
	);
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

exports.default = (0, _index2.default)(Dialog);
module.exports = exports['default'];