'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

	btnMap: _propTypes2.default.array.isRequired,
	selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]).isRequired,
	onChange: _propTypes2.default.func.isRequired

};

var defaultProps = {

	btnMap: [],
	onChange: function onChange() {}

};
var CheckBtn = function CheckBtn(props) {
	var btnMap = props.btnMap,
	    selectedValue = props.selectedValue,
	    onChange = props.onChange,
	    arg = _objectWithoutProperties(props, ['btnMap', 'selectedValue', 'onChange']);

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

CheckBtn.propTypes = propTypes;
CheckBtn.defaultProps = defaultProps;
exports.default = CheckBtn;
module.exports = exports['default'];