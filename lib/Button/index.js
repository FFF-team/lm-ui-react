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

var propTypes = {
	size: _react2.default.PropTypes.string, //small middle big long
	btnType: _react2.default.PropTypes.string, //primary colorfulHollow  grayHollow
	icon: _react2.default.PropTypes.string,
	isDisabled: _react2.default.PropTypes.bool,
	isRadius: _react2.default.PropTypes.bool,
	onClick: _react2.default.PropTypes.func
};
var defaultProps = {
	size: 'small',
	btnType: 'primary',
	isDisabled: false,
	isRadius: true,
	onClick: function onClick() {}
};

var Button = function (_React$Component) {
	_inherits(Button, _React$Component);

	function Button(props) {
		_classCallCheck(this, Button);

		// debugger;
		return _possibleConstructorReturn(this, _React$Component.call(this, props));
	}

	Button.prototype.clickhandle = function clickhandle(e) {
		this.props.onClick(e.target);
	};

	Button.prototype.render = function render() {
		var _props = this.props,
		    children = _props.children,
		    size = _props.size,
		    btnType = _props.btnType,
		    isRadius = _props.isRadius,
		    isDisabled = _props.isDisabled,
		    onClick = _props.onClick,
		    icon = _props.icon,
		    arg = _objectWithoutProperties(_props, ['children', 'size', 'btnType', 'isRadius', 'isDisabled', 'onClick', 'icon']);

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
				onClick: isDisabled ? undefined : this.clickhandle.bind(this),
				className: classnames
			}, arg),
			_react2.default.createElement('img', { src: icon, className: icon ? 'lm-ui-btn-icon' : 'hide' }),
			children
		);
	};

	return Button;
}(_react2.default.Component);

exports.default = Button;


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
module.exports = exports['default'];