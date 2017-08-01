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
 *	groupId (string || number) - - link label and other
 */

var propTypes = {};
var defaultProps = {};
var contextTypes = {

	groupId: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])

};

var Label = function (_React$Component) {
	_inherits(Label, _React$Component);

	function Label() {
		_classCallCheck(this, Label);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	Label.prototype.render = function render() {
		var _props = this.props,
		    children = _props.children,
		    arg = _objectWithoutProperties(_props, ['children']);

		var groupId = this.context.groupId;


		return _react2.default.createElement(
			'label',
			_extends({
				htmlFor: groupId && groupId,
				className: 'lm-ui-label'
			}, arg),
			children
		);
	};

	return Label;
}(_react2.default.Component);

exports.default = Label;


Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
Label.contextTypes = contextTypes;
module.exports = exports['default'];