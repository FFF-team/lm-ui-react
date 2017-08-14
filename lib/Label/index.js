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
 *	groupId (string || number) - - link label and other
 */

var propTypes = {};
var defaultProps = {};
var contextTypes = {

	groupId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])

};

var Label = function Label(props, context) {
	var children = props.children,
	    arg = _objectWithoutProperties(props, ['children']);

	var groupId = context.groupId;


	return _react2.default.createElement(
		'label',
		_extends({
			htmlFor: groupId && groupId,
			className: 'lm-ui-label'
		}, arg),
		children
	);
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
Label.contextTypes = contextTypes;

exports.default = Label;
module.exports = exports['default'];