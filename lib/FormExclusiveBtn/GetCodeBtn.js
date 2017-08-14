'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./GetCodeBtn.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | text | 按钮显示的文字 | string | '获取验证码' | 可选 |
 * | countNum | 倒计时时间 | number | 60 | 可选 |
 * | onClick | 点击时调用的函数 | func | () => {} | 可选 |
 *
 * <GetCodeBtn 
 *     text={ '获取验证码'}
 *     countNum={60}
 *     onClick={() => {}} />
 */

var propTypes = {

	text: _propTypes2.default.string,
	countNum: _propTypes2.default.number,
	onClick: _propTypes2.default.func

};
var defaultProps = {

	text: '获取验证码',
	countNum: 60,
	onClick: function onClick() {}

};

var GetCodeBtn = function (_React$Component) {
	_inherits(GetCodeBtn, _React$Component);

	function GetCodeBtn(props) {
		_classCallCheck(this, GetCodeBtn);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.timer = null;

		_this.state = {

			canUse: true,
			second: _this.props.countNum

		};

		return _this;
	}

	GetCodeBtn.prototype.clickHandler = function clickHandler() {

		this.countDown();
		this.state.canUse ? this.props.onClick() : '';
	};

	GetCodeBtn.prototype.countDown = function countDown() {
		var _this2 = this;

		var _props = this.props,
		    countNum = _props.countNum,
		    onClick = _props.onClick;
		var _state = this.state,
		    canUse = _state.canUse,
		    second = _state.second;
		//判断此时是否是可点击状态

		if (!canUse) {
			return;
		}
		this.setState({ canUse: false });
		//打开定时器

		this.timer = setInterval(function () {

			if (second == 0) {

				clearInterval(_this2.timer);

				_this2.setState({

					canUse: true,
					second: countNum

				});
			} else {

				var newSecond = --second;

				_this2.setState({

					second: newSecond

				});
			}
		}, 1000);
	};

	GetCodeBtn.prototype.componentWillUnmount = function componentWillUnmount() {

		clearInterval(this.timer);
	};

	GetCodeBtn.prototype.render = function render() {
		var _props2 = this.props,
		    text = _props2.text,
		    countNum = _props2.countNum,
		    onClick = _props2.onClick,
		    arg = _objectWithoutProperties(_props2, ['text', 'countNum', 'onClick']);

		var _state2 = this.state,
		    canUse = _state2.canUse,
		    second = _state2.second;

		var showText = canUse ? text : second + 's\u540E\u91CD\u53D1';
		var clsName = canUse ? "lm-ui-get-code-btn" : "lm-ui-get-code-btn-disable";

		return _react2.default.createElement(
			'a',
			_extends({
				href: 'javascript:;',
				className: clsName,
				onClick: this.clickHandler.bind(this)
			}, arg),
			showText
		);
	};

	return GetCodeBtn;
}(_react2.default.Component);

exports.default = GetCodeBtn;


GetCodeBtn.propTypes = propTypes;
GetCodeBtn.defaultProps = defaultProps;
module.exports = exports['default'];