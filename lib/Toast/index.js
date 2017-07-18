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
 * toastType: Hint Loading Success Fail Netless
 * opacity 0-10
 * showState true|false
 * message 
 */

var propTypes = {

	toastType: _react2.default.PropTypes.string.isRequired,
	opacity: _react2.default.PropTypes.number,
	showState: _react2.default.PropTypes.bool.isRequired,
	message: _react2.default.PropTypes.string
};

var defaultProps = {

	toastType: "Hint",
	showState: false,
	opacity: 5

};

var Toast = function (_React$Component) {
	_inherits(Toast, _React$Component);

	function Toast(props) {
		_classCallCheck(this, Toast);

		return _possibleConstructorReturn(this, _React$Component.call(this, props));
	}

	Toast.prototype.render = function render() {
		var _props = this.props,
		    toastType = _props.toastType,
		    message = _props.message;


		var resultDom = null;

		if (toastType === "Hint") {

			resultDom = _react2.default.createElement(
				'div',
				{ className: 'lm-ui-toast toast-text-content' },
				_react2.default.createElement(
					'p',
					null,
					message || '\u63D0\u793A'
				)
			);
		} else if (toastType === "Loading") {

			resultDom = _react2.default.createElement(
				'div',
				{ className: 'lm-ui-toast' },
				_react2.default.createElement('i', { className: 'lm-ui-toast-icon icon-loading' }),
				_react2.default.createElement(
					'p',
					null,
					message || '\u52A0\u8F7D\u4E2D'
				)
			);
		} else if (toastType === "Success") {

			resultDom = _react2.default.createElement(
				'div',
				{ className: 'lm-ui-toast' },
				_react2.default.createElement('i', { className: 'lm-ui-toast-icon icon-success' }),
				_react2.default.createElement(
					'p',
					null,
					message || '\u63D0\u4EA4\u6210\u529F'
				)
			);
		} else if (toastType === "Fail") {

			resultDom = _react2.default.createElement(
				'div',
				{ className: 'lm-ui-toast' },
				_react2.default.createElement('i', { className: 'lm-ui-toast-icon icon-fail' }),
				_react2.default.createElement(
					'p',
					null,
					message || '\u52A0\u8F7D\u5931\u8D25'
				)
			);
		} else if (toastType === "Netless") {

			resultDom = _react2.default.createElement(
				'div',
				{ className: 'lm-ui-toast' },
				_react2.default.createElement('i', { className: 'lm-ui-toast-icon icon-network' }),
				_react2.default.createElement(
					'p',
					null,
					message || '\u52A0\u8F7D\u4E2D'
				)
			);
		}

		return resultDom;
	};

	return Toast;
}(_react2.default.Component);

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

exports.default = (0, _index2.default)(Toast);
module.exports = exports['default'];