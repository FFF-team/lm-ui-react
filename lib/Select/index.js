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
 * | selectedValue | 选中的值 | string or number or bool | 无 | 必要 |
 * | onChange | 选择时，调用此函数 | fun | ()=>{} | 必要 |
 * | optionMap | option信息数组 | array[{ text: string or number, value: string or number }] | [...] | 必要 |
 * | disabled | 是否不可操作 | bool | false | 可选 |
 * | style | 增加样式 |  obj | 无 | 可选 |
 *
 * <Select
 *  disabled={true}
 * 	value={this.state.selectVal}
 * 	onChange={(e) => {this.setState({selectVal: e.target.value})}}
 * 	optionMap={[{text:1, value:1}, {text:2, value:2}, {text:3, value:4}]} />
 */

var propTypes = {

	optionMap: _react2.default.PropTypes.array.isRequired,
	onChange: _react2.default.PropTypes.func.isRequired,
	selectedValue: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool])

};

var defaultProps = {

	optionMap: [],
	onChange: function onChange() {}

};

var contextTypes = {

	groupId: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])

};

var Select = function (_React$Component) {
	_inherits(Select, _React$Component);

	function Select() {
		_classCallCheck(this, Select);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	Select.prototype.render = function render() {
		var _props = this.props,
		    optionMap = _props.optionMap,
		    onChange = _props.onChange,
		    selectedValue = _props.selectedValue,
		    arg = _objectWithoutProperties(_props, ['optionMap', 'onChange', 'selectedValue']);

		var groupId = this.context.groupId;


		return _react2.default.createElement(
			'div',
			{ className: 'lm-ui-select-wrap' },
			_react2.default.createElement(
				'select',
				_extends({
					className: selectedValue !== '' ? 'lm-ui-select selected' : 'lm-ui-select',
					id: groupId && groupId,
					value: selectedValue,
					onChange: onChange
				}, arg),
				_react2.default.createElement(
					'option',
					{ value: '', disabled: true },
					'\u8BF7\u9009\u62E9'
				),
				optionMap.map(function (item, index) {

					return _react2.default.createElement(
						'option',
						{
							key: index,
							value: item.value },
						item.text
					);
				})
			),
			_react2.default.createElement('i', { className: 'lm-ui-icon-arrow-down' })
		);
	};

	return Select;
}(_react2.default.Component);

exports.default = Select;


Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
Select.contextTypes = contextTypes;
module.exports = exports['default'];