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
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | groupId | 赋予组内空间id | number or string | 无 | 可选 |
 * | layout | 组内成员布局 | obj | 无 | 可选 |
 *
 * <FormGroup  groupId={'inputId'}>
 * <FormGroup layout={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
 */

var propTypes = {

	groupId: _react2.default.PropTypes.string,
	layout: _react2.default.PropTypes.shape({

		direction: _react2.default.PropTypes.string,
		justifyContent: _react2.default.PropTypes.string,
		alignItems: _react2.default.PropTypes.string

	})

};

var defaultProps = {

	groupId: null,
	layout: {

		direction: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'

	}

};

var childContextTypes = {

	groupId: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])

};

var FormGroup = function (_React$Component) {
	_inherits(FormGroup, _React$Component);

	function FormGroup() {
		_classCallCheck(this, FormGroup);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	FormGroup.prototype.getChildContext = function getChildContext() {

		return {

			groupId: this.props.groupId

		};
	};

	FormGroup.prototype.parseClass = function parseClass(direction, justifyContent, alignItems) {

		var preffix = 'lm-ui-layout';

		return 'lm-ui-form-group \n    \t' + preffix + '-flex-direction-' + direction + ' \n    \t' + preffix + '-justify-content-' + justifyContent + ' \n    \t' + preffix + '-align-items-' + alignItems;
	};

	FormGroup.prototype.render = function render() {
		var _props = this.props,
		    children = _props.children,
		    _props$layout = _props.layout,
		    direction = _props$layout.direction,
		    justifyContent = _props$layout.justifyContent,
		    alignItems = _props$layout.alignItems;

		var argArr = [direction, justifyContent, alignItems];
		var clsName = this.parseClass.apply(this, argArr);

		return _react2.default.createElement(
			'div',
			{ className: clsName },
			children
		);
	};

	return FormGroup;
}(_react2.default.Component);

exports.default = FormGroup;


FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;
FormGroup.childContextTypes = childContextTypes;
module.exports = exports['default'];