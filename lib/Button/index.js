'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
	size: _propTypes2.default.string, //small middle big long
	btnType: _propTypes2.default.string, //primary colorfulHollow  grayHollow
	icon: _propTypes2.default.string,
	isDisabled: _propTypes2.default.bool,
	isRadius: _propTypes2.default.bool,
	onClick: _propTypes2.default.func
};
var defaultProps = {
	size: 'small',
	btnType: 'primary',
	isDisabled: false,
	isRadius: true,
	onClick: function onClick() {}
};

var Button = function Button(props) {

	var clickhandle = function clickhandle(e) {

		props.onClick(e.target);
	};

	var children = props.children,
	    size = props.size,
	    btnType = props.btnType,
	    isRadius = props.isRadius,
	    isDisabled = props.isDisabled,
	    onClick = props.onClick,
	    icon = props.icon,
	    arg = _objectWithoutProperties(props, ['children', 'size', 'btnType', 'isRadius', 'isDisabled', 'onClick', 'icon']);

	var classnames = 'lm-ui-btn ';

	switch (btnType) {
		case 'primary':
			classnames += 'lm-ui-btn-primary ';
			break;
		case 'colorfulHollow':
			classnames += 'lm-ui-btn-colorful-hollow ';
			break;
		case 'grayHollow':
			classnames += 'lm-ui-btn-gray-hollow ';
			break;
	}

	if (isRadius) {
		classnames += 'lm-ui-btn-radius ';
	}

	if (isDisabled) {
		classnames += 'lm-ui-btn-disable ';
	}

	switch (size) {
		case 'small':
			classnames += 'lm-ui-btn-small ';
			break;
		case 'big':
			classnames += 'lm-ui-btn-big ';
			break;
		case 'long':
			classnames += 'lm-ui-btn-long ';
			break;
	}

	return _react2.default.createElement(
		'a',
		_extends({ href: 'javascript:;',
			onClick: isDisabled ? undefined : clickhandle,
			className: classnames
		}, arg),
		_react2.default.createElement('img', { src: icon, className: icon ? 'lm-ui-btn-icon' : 'hide' }),
		props.children
	);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;
module.exports = exports['default'];