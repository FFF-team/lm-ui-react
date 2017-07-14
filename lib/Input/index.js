'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ValidateValHOC = require('../ValidateValHOC');

var _ValidateValHOC2 = _interopRequireDefault(_ValidateValHOC);

var _tools = require('./tools');

var _Events = require('../Events');

var _Events2 = _interopRequireDefault(_Events);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | type | input的类型 | 'input' or 'textarea' | 'input' | 必要 |
 * | value | 输入的值 | all | 无 | 必要 |
 * | defaultText | 默认placeholder | all | '' | 必要 |
 * | onChange | 值更改时触发次函数 | fun | ()=>{} | 必要 |
 * | maxLength | textarea中最大长度，超出文字标红 | number | 200 | 可选 |
 * | validateData | 验证信息 | obj{ promptText: string, validateFun: fun }| 无 | 可选 |
 * | cleanBtn | 右侧清除按钮则配置 | obj{ state: true, cleanFun: fun } | 无 | 可选 |
 * | preffix | 输入框前缀 | node | 无 | 可选 |
 * | suffix | 输入框后缀 | node | 无 | 可选 |
 * | disabled | 是否不可操作 | bool | false | 可选 |
 * | style | 增加样式 |  obj | 无 | 可选 |
 *     
 *  <Input
 * 	type='input' 
 * 	validateData={{ promptText: '请输入正确的姓名', validateFun: (value) => { return !!value && (value.trim() != '') && /^[\.·\u4e00-\u9fa5]{2,20}$/.test(value); } }}
 * 	value={this.state.test5}
 * 	cleanBtn={{ state: true, cleanFun: () => {this.setState({test5: ''})} }}
 * 	defaultText={'aaa'}
 *  suffix={<GetCodeBtn onClick={() => {}} countNum={60} />} />
 * 	onChange={(e) => {this.setState({test5: e.target.value})}} />  
 */

//识别每个input实例的唯一id。
var id = 0;
var propTypes = {

	type: _react2.default.PropTypes.string.isRequired,
	value: _react2.default.PropTypes.any.isRequired,
	defaultText: _react2.default.PropTypes.string,
	preffix: _react2.default.PropTypes.node,
	suffix: _react2.default.PropTypes.node,
	onChange: _react2.default.PropTypes.func.isRequired,
	vaildate: _react2.default.PropTypes.object,
	validateData: _react2.default.PropTypes.object,
	cleanBtn: _react2.default.PropTypes.shape({

		state: _react2.default.PropTypes.bool,
		cleanFun: _react2.default.PropTypes.func

	}),
	maxLength: _react2.default.PropTypes.number

};

var defaultProps = {

	type: 'input',
	value: null,
	defaultText: '',
	preffix: false,
	suffix: false,
	onChange: function onChange() {},
	validate: {},
	cleanBtn: {},
	maxLength: 200

};

var contextTypes = {

	groupId: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])

};

var propsMap = ['type', 'value', 'defaultText', 'preffix', 'suffix', 'onChange', 'validate', 'validateData', 'cleanBtn', 'maxLength'];

var Input = function (_React$Component) {
	_inherits(Input, _React$Component);

	function Input(props) {
		_classCallCheck(this, Input);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.id = id++;
		_this.state = {

			closeIconState: false

		};

		_this.clickHandler = _this.clickHandler.bind(_this);
		_this.focusHandler = _this.focusHandler.bind(_this);
		_this.blurHandler = _this.blurHandler.bind(_this);

		return _this;
	}

	Input.prototype.clickHandler = function clickHandler(e) {
		var _props = this.props,
		    value = _props.value,
		    onChange = _props.onChange,
		    validate = _props.validate;

		var currentValue = e.target.value;

		//执行传入的回调函数
		onChange(e);
		//当错误状态时，用户传删除全部内容时状态验证状态重置
		if (currentValue === '' && validate && validate.state === false) {

			validate.resetHookFun();
		} else if (currentValue !== '') {
			//只要输入的内容不为空那么就，显示close按钮
			this.setState({ closeIconState: true });
		}
	};

	Input.prototype.clickCleanBtnHandler = function clickCleanBtnHandler(e) {
		var _props2 = this.props,
		    cleanBtn = _props2.cleanBtn,
		    value = _props2.value,
		    validate = _props2.validate;
		//清空value

		cleanBtn.cleanFun();
		//并重置验证状态。
		!(0, _tools.isEmptyObj)(validate) && validate.resetHookFun();
	};

	Input.prototype.focusHandler = function focusHandler() {
		var _props3 = this.props,
		    validate = _props3.validate,
		    value = _props3.value;


		if (value === '') return;

		if (validate.state === false) {

			validate.showValidateText();
		}

		this.setState({ closeIconState: true });
	};

	Input.prototype.blurHandler = function blurHandler() {
		var _this2 = this;

		/*
   * 正常执行顺序das
   * blurHandler -----> clickCleanBtnHandler
   * 期望clickCleanBtnHandler之后在执行blurHandler，
   * 就不会影响到close按钮的存在
   */

		setTimeout(function () {
			var _props4 = _this2.props,
			    value = _props4.value,
			    validate = _props4.validate;


			if (value === '') return;

			if (validate.hookFun) {
				//进行类型验证
				var validateResult = validate.hookFun(value);
				//将验证信息发送出去--->Form接收
				_Events2.default.emit('errorMsg', { id: _this2.id }, validateResult);
			}

			_this2.setState({ closeIconState: false });
		}, 0);
	};

	Input.prototype.getValidateName = function getValidateName() {
		var _props5 = this.props,
		    value = _props5.value,
		    validate = _props5.validate;
		/*
   * 情况：
   *   1.validate === null 说明用户不需要验证 所以一直为lm-ui-input
   *   2.validate.state === false 说明此时没通过验证，所以为lm-ui-input error
   *   3.validate.state === true  说明此时通过验证
   */

		if ((0, _tools.isEmptyObj)(validate)) {

			return 'lm-ui-input';
		} else if (!validate.state) {

			return 'lm-ui-input error';
		} else {

			return 'lm-ui-input';
		}
	};

	Input.prototype.getCloseIcon = function getCloseIcon() {
		var _props6 = this.props,
		    cleanBtn = _props6.cleanBtn,
		    validate = _props6.validate,
		    value = _props6.value;

		/*
   * 情况：
   *  1.cleanBtn为false 用户不需要显示close  return null
   *	2.cleanBtn为true&&纯input   <div className="lm-ui-input-close"></div>
   *  3.cleanBtn为true&&验证
   *    1）通过验证  <div className="lm-ui-input-close"></div>
   *    2）没通过验证 <div className="lm-ui-input-close lm-ui-close-error"></div>
   *  4.
   */

		if ((0, _tools.isEmptyObj)(cleanBtn) || !this.state.closeIconState || value === '') {

			return null;
		} else if ((0, _tools.isEmptyObj)(validate) || validate.state) {

			return 'lm-ui-input-close';
		} else if (!validate.state) {

			return 'lm-ui-input-close lm-ui-close-error';
		}
	};

	Input.prototype.renderInput = function renderInput() {
		var _props7 = this.props,
		    type = _props7.type,
		    value = _props7.value,
		    defaultText = _props7.defaultText,
		    preffix = _props7.preffix,
		    suffix = _props7.suffix,
		    onChange = _props7.onChange,
		    validate = _props7.validate,
		    validateData = _props7.validateData,
		    cleanBtn = _props7.cleanBtn,
		    maxLength = _props7.maxLength,
		    arg = _objectWithoutProperties(_props7, ['type', 'value', 'defaultText', 'preffix', 'suffix', 'onChange', 'validate', 'validateData', 'cleanBtn', 'maxLength']);

		var groupId = this.context.groupId;

		var validateClass = this.getValidateName();
		var closeIconClass = this.getCloseIcon();

		return _react2.default.createElement(
			'div',
			{ className: 'lm-ui-input-wrap' },
			preffix && preffix,
			_react2.default.createElement(
				'div',
				{ className: 'lm-ui-input-core' },
				_react2.default.createElement('input', _extends({
					type: 'text',
					id: groupId && groupId,
					value: value,
					className: validateClass,
					onChange: this.clickHandler,
					onFocus: this.focusHandler,
					onBlur: this.blurHandler,
					placeholder: defaultText,
					maxLength: maxLength
				}, arg)),
				closeIconClass && _react2.default.createElement('div', {
					onClick: this.clickCleanBtnHandler.bind(this),
					className: closeIconClass && closeIconClass })
			),
			suffix && suffix
		);
	};

	Input.prototype.renderTextarea = function renderTextarea() {
		var _props8 = this.props,
		    type = _props8.type,
		    value = _props8.value,
		    defaultText = _props8.defaultText,
		    preffix = _props8.preffix,
		    suffix = _props8.suffix,
		    onChange = _props8.onChange,
		    validate = _props8.validate,
		    validateData = _props8.validateData,
		    cleanBtn = _props8.cleanBtn,
		    maxLength = _props8.maxLength,
		    arg = _objectWithoutProperties(_props8, ['type', 'value', 'defaultText', 'preffix', 'suffix', 'onChange', 'validate', 'validateData', 'cleanBtn', 'maxLength']);

		var groupId = this.context.groupId;


		return _react2.default.createElement(
			'div',
			{ className: 'lm-ui-textarea-wrap' },
			_react2.default.createElement('textarea', _extends({
				className: 'lm-ui-textarea',
				id: groupId && groupId,
				value: value,
				onChange: onChange,
				rows: '4',
				maxLength: maxLength,
				placeholder: defaultText
			}, arg)),
			_react2.default.createElement(
				'div',
				{ className: 'lm-ui-textarea-counter' },
				_react2.default.createElement(
					'span',
					{ className: value.length > maxLength ? 'beyond' : '' },
					value.length
				),
				_react2.default.createElement(
					'span',
					null,
					'/'
				),
				_react2.default.createElement(
					'span',
					{ className: 'limit' },
					maxLength
				)
			)
		);
	};

	Input.prototype.render = function render() {
		var type = this.props.type;


		if (type === 'input') {

			return this.renderInput();
		} else if (type === 'textarea') {

			return this.renderTextarea();
		} else {

			return null;
		}
	};

	return Input;
}(_react2.default.Component);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
Input.contextTypes = contextTypes;

exports.default = (0, _ValidateValHOC2.default)(Input);
module.exports = exports['default'];