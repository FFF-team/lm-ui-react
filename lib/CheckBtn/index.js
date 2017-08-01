'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | btnMap | 选择按钮的信息 | array[{ text: string or number, value: string or number }] | [...] | 必要 |
 * | selectedValue | 被选中的值 | string or number or bool | 无 | 必要 |
 * | onChange | 选择时，调用此函数 | func | ()=>{} | 必要 |
 *
 *<CheckBtn
 *	btnMap={[{ text: '有', value: true }, { text: '无', value: false }]}
 *	selectedValue={this.state.checkBtn}
 *	onChange={(val) => {this.setState({ checkBtn: val })}} />
 */

var propTypes = {

	btnMap: _react2.default.PropTypes.array.isRequired,
	selectedValue: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]).isRequired,
	onChange: _react2.default.PropTypes.func.isRequired

};

var defaultProps = {

	btnMap: [],
	onChange: function onChange() {}

};

var CheckBtn = function (_React$Component) {
	_inherits(CheckBtn, _React$Component);

	function CheckBtn() {
		_classCallCheck(this, CheckBtn);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	CheckBtn.prototype.render = function render() {
		var _props = this.props,
		    btnMap = _props.btnMap,
		    selectedValue = _props.selectedValue,
		    onChange = _props.onChange,
		    arg = _objectWithoutProperties(_props, ['btnMap', 'selectedValue', 'onChange']);

		return _react2.default.createElement(
			'div',
			{ className: 'lm-ui-check-btn-wrap' },
			btnMap.map(function (item, index) {

				return _react2.default.createElement(
					'div',
					{ className: 'lm-ui-check-btn-cont', key: index },
					_react2.default.createElement('input', {
						type: 'radio',
						className: 'lm-ui-check-btn',
						value: item.value,
						checked: selectedValue === item.value,
						onChange: onChange.bind(null, item.value) }),
					_react2.default.createElement(
						'span',
						{ className: 'lm-ui-check-btn-appearance' },
						item.text
					)
				);
			})
		);
	};

	return CheckBtn;
}(_react2.default.Component);

exports.default = CheckBtn;


CheckBtn.propTypes = propTypes;
CheckBtn.defaultProps = defaultProps;
module.exports = exports['default'];