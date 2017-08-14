'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.scss');

var _index = require('../ModelHOC/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * toastType: Hint Loading Success Fail Netless
 * opacity 0-10
 * showState true|false
 * message 
 */

var propTypes = {

	toastType: _propTypes2.default.string.isRequired,
	opacity: _propTypes2.default.number,
	showState: _propTypes2.default.bool.isRequired,
	message: _propTypes2.default.string
};

var defaultProps = {

	toastType: "Hint",
	showState: false,
	opacity: 5

};

var Toast = function Toast(props) {
	var toastType = props.toastType,
	    message = props.message;


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

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

exports.default = (0, _index2.default)(Toast);
module.exports = exports['default'];