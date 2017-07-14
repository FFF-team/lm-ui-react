'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * props:
 *	linkId boolen 
 */

var propTypes = {

	label: _react2.default.PropTypes.string,
	value: _react2.default.PropTypes.string,
	icon: _react2.default.PropTypes.string,
	activeNumber: _react2.default.PropTypes.number,
	onClick: _react2.default.PropTypes.func,
	arrow: _react2.default.PropTypes.bool

};
var defaultProps = {
	onClick: function onClick() {},
	arrow: false
};

var List = function (_React$Component) {
	_inherits(List, _React$Component);

	function List(props) {
		_classCallCheck(this, List);

		return _possibleConstructorReturn(this, _React$Component.call(this, props));
	}

	List.prototype.clickhandle = function clickhandle(e) {
		// debugger;
		this.props.onClick(e.target);
	};

	List.prototype.render = function render() {
		var _props = this.props,
		    label = _props.label,
		    value = _props.value,
		    arrow = _props.arrow,
		    icon = _props.icon,
		    activeNumber = _props.activeNumber;


		return _react2.default.createElement(
			'div',
			{ className: 'lm-ui-list', onClick: this.clickhandle.bind(this) },
			_react2.default.createElement(
				'div',
				{ className: 'lm-ui-list-label' },
				_react2.default.createElement('img', { className: icon ? 'lm-ui-list-icon' : 'hide', src: icon }),
				label
			),
			_react2.default.createElement(
				'div',
				{ className: 'lm-ui-list-value' },
				value,
				_react2.default.createElement(
					'span',
					{ className: activeNumber ? 'lm-ui-list-number' : 'hide' },
					activeNumber
				)
			),
			_react2.default.createElement('div', { className: arrow ? 'lm-ui-list-link' : 'lm-ui-list-unlink' })
		);
	};

	return List;
}(_react2.default.Component);

exports.default = List;


List.propTypes = propTypes;
List.defaultProps = defaultProps;
module.exports = exports['default'];