'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.scss');

var _index = require('../ModelHOC/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	dialogType: _react2.default.PropTypes.string.isRequired,
	showState: _react2.default.PropTypes.bool.isRequired,
	opacity: _react2.default.PropTypes.number,
	headText: _react2.default.PropTypes.node,
	contentText: _react2.default.PropTypes.node,
	btnLeftText: _react2.default.PropTypes.string,
	btnRightText: _react2.default.PropTypes.string,
	btnCommonFun: _react2.default.PropTypes.func,
	btnLeftCbFun: _react2.default.PropTypes.func,
	btnRightCbFun: _react2.default.PropTypes.func

};

var defaultProps = {
	dialogType: "Confirm",
	opacity: 5,
	showState: false,
	headText: 'head',
	contentText: '提示标题',
	btnLeftText: '取消',
	btnRightText: '确定',
	btnCommonFun: function btnCommonFun() {},
	btnLeftCbFun: function btnLeftCbFun() {},
	btnRightCbFun: function btnRightCbFun() {}

};

var Dialog = function (_React$Component) {
	_inherits(Dialog, _React$Component);

	function Dialog() {
		_classCallCheck(this, Dialog);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	Dialog.prototype.clickHandler = function clickHandler(dir) {
		var _props = this.props,
		    btnLeftCbFun = _props.btnLeftCbFun,
		    btnRightCbFun = _props.btnRightCbFun,
		    btnCommonFun = _props.btnCommonFun;


		btnCommonFun();

		dir === 'left' ? btnLeftCbFun() : dir === 'right' ? btnRightCbFun() : null;
	};

	Dialog.prototype.render = function render() {
		var _props2 = this.props,
		    dialogType = _props2.dialogType,
		    opacity = _props2.opacity,
		    showState = _props2.showState,
		    headText = _props2.headText,
		    contentText = _props2.contentText,
		    btnLeftText = _props2.btnLeftText,
		    btnRightText = _props2.btnRightText;


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
						onClick: this.clickHandler.bind(this, 'left') },
					btnLeftText
				) : null,
				_react2.default.createElement(
					'a',
					{
						href: 'javascript:;',
						className: 'dialog-btn special',
						onClick: this.clickHandler.bind(this, 'right') },
					btnRightText
				)
			)
		);
	};

	return Dialog;
}(_react2.default.Component);

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

exports.default = (0, _index2.default)(Dialog);
module.exports = exports['default'];