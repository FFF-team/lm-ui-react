'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * 介绍：
 *  本组件拦截存在props.validateData的组件，
 *  并通过注入属性方式使WrappedComponent无感知的实现验证
 * 拦截props：
 * 	validateData
 * 主要方法：
 * 	hookFun 验证钩子函数
 * 	resetHookFun 重置状态钩子函数
 * 流程：
 *        in    if have     out   isObj
 *  props---> validateData ----> validate
 *        in     havent     out   isNull
 */

var ValidateValHOC = function ValidateValHOC(WrappedComponent) {
	return function (_React$Component) {
		_inherits(_class, _React$Component);

		function _class(props) {
			_classCallCheck(this, _class);

			var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

			_this.state = {

				validate: {},
				validateFun: null,
				resetHookFun: null,
				showValidateText: null,
				promptState: false,
				promptText: '请输入正确格式'

			};

			return _this;
		}

		_class.prototype.componentWillMount = function componentWillMount() {
			var validateData = this.props.validateData;
			/*
    * 通过判断有无验证信息(validateData)来判断是否需要用到次组件功能
    * 如果没有的话不会注入validate属性，对自组件来说无任何影响
    */

			if (validateData && validateData.validateFun) {

				this.setValidateState(true, validateData.validateFun);

				validateData.promptText && this.setState({ promptText: validateData.promptText });
			}
		};

		_class.prototype.hookFun = function hookFun(val) {

			var isPass = this.state.validateFun(val);

			if (isPass) {

				this.setValidateState(true);
				return { state: true, msg: '' };
			} else {

				this.setValidateState(false);
				return { state: false, msg: this.state.promptText };
				//并且显示错误提示信息
			}
		};

		_class.prototype.resetHookFun = function resetHookFun() {

			this.setValidateState(true);
		};

		_class.prototype.showValidateText = function showValidateText() {
			var _this2 = this;

			this.setState({ promptState: true });

			setTimeout(function () {

				_this2.setState({ promptState: false });
			}, 2000);
		};

		_class.prototype.setValidateState = function setValidateState(state, validateFun) {
			/*
    * 如果存在validateFun证明是第一次注册验证函数
    * 如果不存在validateFun证明是通过验证之后改变验证状态
    */
			var newData = validateFun ? {

				validate: {

					state: state,
					hookFun: this.hookFun.bind(this),
					resetHookFun: this.resetHookFun.bind(this),
					showValidateText: this.showValidateText.bind(this)

				},
				validateFun: validateFun

			} : {

				validate: {

					state: state,
					hookFun: this.hookFun.bind(this),
					resetHookFun: this.resetHookFun.bind(this),
					showValidateText: this.showValidateText.bind(this)

				}

			};

			this.setState(newData);
		};

		_class.prototype.render = function render() {

			var newProps = Object.assign({}, this.state.validate);
			var promptText = this.state.promptState ? _react2.default.createElement(
				'div',
				{ className: 'lm-ui-validate-text' },
				this.state.promptText
			) : null;

			return _react2.default.createElement(
				'div',
				{ className: 'lm-ui-validate-wrap' },
				_react2.default.createElement(WrappedComponent, _extends({}, this.props, { validate: newProps })),
				promptText
			);
		};

		return _class;
	}(_react2.default.Component);
};

exports.default = ValidateValHOC;
module.exports = exports['default'];