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
 * | checked | 选中状态 | bool | false | 必要 |
 * | onChange | 选择时触发此函数 | fun | 必要 |
 * | disabled | 是否不可操作 | bool | false | 可选 |
 * | style | 增加样式 |  obj | 无 | 可选 |
 *
 * <Switch
 * 	disabled={true}
 * 	name={'name'}
 * 	checked={this.state.checked} 
 * 	onChange={() => { this.setState({checked: !this.state.checked}) }} />
 */

var propTypes = {

	checked: _react2.default.PropTypes.bool.isRequired,
	onChange: _react2.default.PropTypes.func.isRequired

};

var defaultProps = {

	checked: false

};

var contextTypes = {

	groupId: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])

};

var Switch = function (_React$Component) {
	_inherits(Switch, _React$Component);

	function Switch() {
		_classCallCheck(this, Switch);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	Switch.prototype.render = function render() {
		var _props = this.props,
		    checked = _props.checked,
		    onChange = _props.onChange,
		    arg = _objectWithoutProperties(_props, ['checked', 'onChange']);

		var groupId = this.context.groupId;


		return _react2.default.createElement('input', _extends({
			id: groupId && groupId,
			onChange: onChange,
			checked: checked,
			type: 'checkbox',
			className: 'lm-ui-check-switch'
		}, arg));
	};

	return Switch;
}(_react2.default.Component);

exports.default = Switch;


Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
Switch.contextTypes = contextTypes;
module.exports = exports['default'];