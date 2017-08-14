'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | text | 选择项显示的文字 | string or number | 无 | 必要 |
 * | value | 选择项实际的值 | string or number or bool | 无 | 必要 |
 */

var propTypes = {

	text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
	value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
	preffix: _propTypes2.default.node,
	suffix: _propTypes2.default.node,
	mode: _propTypes2.default.string,
	uniqueId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])

};

var defaultProps = {

	mode: 'form' //form || button

};

var contextTypes = {

	radioGroup: _propTypes2.default.object

};

var Radio = function Radio(props, context) {
	var text = props.text,
	    value = props.value,
	    preffix = props.preffix,
	    suffix = props.suffix,
	    mode = props.mode,
	    uniqueId = props.uniqueId,
	    arg = _objectWithoutProperties(props, ['text', 'value', 'preffix', 'suffix', 'mode', 'uniqueId']);

	var _context$radioGroup = context.radioGroup,
	    name = _context$radioGroup.name,
	    selectedValue = _context$radioGroup.selectedValue,
	    onChange = _context$radioGroup.onChange;

	var optional = {};

	if (selectedValue !== undefined) {

		optional.checked = value === selectedValue;
	}

	optional.onChange = onChange.bind(null, value);

	switch (mode) {

		case 'form':

			return _react2.default.createElement(
				'div',
				{ className: 'lm-ui-radio-wrap' },
				_react2.default.createElement('input', _extends({
					name: name && name,
					type: 'radio',
					className: 'lm-ui-radio'
				}, optional, arg)),
				suffix && suffix,
				_react2.default.createElement('span', { className: 'lm-ui-icon-check' }),
				_react2.default.createElement(
					'div',
					{ className: 'lm-ui-radio-label' },
					text
				),
				preffix && preffix
			);

			break;

		case 'button':

			return _react2.default.createElement(
				'div',
				{ className: 'lm-ui-radio-wrap-btn' },
				_react2.default.createElement('input', _extends({
					id: uniqueId,
					name: name && name,
					type: 'radio',
					className: 'lm-ui-radio'
				}, optional)),
				_react2.default.createElement(
					'label',
					_extends({ htmlFor: uniqueId, className: 'lm-ui-radio-btn' }, arg),
					text
				)
			);

			break;

	}
};

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.contextTypes = contextTypes;

exports.default = Radio;
module.exports = exports['default'];