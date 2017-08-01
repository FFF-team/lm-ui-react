'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
 * | text | 选择项显示的文字 | string or number | 无 | 必要 |
 * | value | 选择项实际的值 | string or number or bool | 无 | 必要 |
 */

var propTypes = {

	text: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	preffix: _react2.default.PropTypes.node,
	suffix: _react2.default.PropTypes.node,
	mode: _react2.default.PropTypes.string,
	uniqueId: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])

};

var defaultProps = {

	mode: 'form' //form || button

};

var contextTypes = {

	checkboxGroup: _react2.default.PropTypes.object

};

var Checkbox = function (_React$Component) {
	_inherits(Checkbox, _React$Component);

	function Checkbox() {
		_classCallCheck(this, Checkbox);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	Checkbox.prototype.clickHandler = function clickHandler() {
		var value = this.props.value;
		var _context$checkboxGrou = this.context.checkboxGroup,
		    selectedValue = _context$checkboxGrou.selectedValue,
		    onChange = _context$checkboxGrou.onChange;

		var index = selectedValue.indexOf(value);
		var newValue = [];

		if (index !== -1) {

			selectedValue.splice(index, 1);
			newValue = selectedValue;
		} else {

			newValue = selectedValue.concat([value]);
		}

		onChange(newValue);
	};

	Checkbox.prototype.render = function render() {
		var _props = this.props,
		    text = _props.text,
		    value = _props.value,
		    preffix = _props.preffix,
		    suffix = _props.suffix,
		    mode = _props.mode,
		    uniqueId = _props.uniqueId,
		    arg = _objectWithoutProperties(_props, ['text', 'value', 'preffix', 'suffix', 'mode', 'uniqueId']);

		var _context$checkboxGrou2 = this.context.checkboxGroup,
		    name = _context$checkboxGrou2.name,
		    selectedValue = _context$checkboxGrou2.selectedValue,
		    onChange = _context$checkboxGrou2.onChange;

		var optional = {};

		if (selectedValue !== undefined) {

			optional.checked = selectedValue.indexOf(value) !== -1;
		}

		optional.onChange = this.clickHandler.bind(this);

		switch (mode) {

			case 'form':

				return _react2.default.createElement(
					'div',
					{ className: 'lm-ui-checkbox-wrap' },
					_react2.default.createElement('input', _extends({
						name: name && name,
						type: 'checkbox',
						className: 'lm-ui-checkbox'
					}, optional, arg)),
					suffix && suffix,
					_react2.default.createElement('span', { className: 'lm-ui-icon-check' }),
					_react2.default.createElement(
						'div',
						{ className: 'lm-ui-checkbox-label' },
						text
					),
					preffix && preffix
				);

				break;

			case 'button':

				return _react2.default.createElement(
					'div',
					{ className: 'lm-ui-checkbox-wrap-btn' },
					_react2.default.createElement('input', _extends({
						id: uniqueId,
						name: name && name,
						type: 'checkbox',
						className: 'lm-ui-checkbox'
					}, optional)),
					_react2.default.createElement(
						'label',
						_extends({ htmlFor: uniqueId, className: 'lm-ui-checkbox-btn' }, arg),
						text
					)
				);

				break;

		}
	};

	return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;


Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.contextTypes = contextTypes;
module.exports = exports['default'];