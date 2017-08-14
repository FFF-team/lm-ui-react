'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
 * | name | Radio的name属性 | string | 无 | 必要 |
 * | selectedValue | 选中的值 | array | [...] | 必要 |
 * | onChange | 选择时，调用此函数 | fun | 无 | 必要 |
 *
 * <RadioGroup
 * 	name={'radioName'}
 * 	selectedValue={this.state.radioVal}
 * 	onChange={(val) => {this.setState({ radioVal: val }) }}
 * 	<Radio text={'11'} value={1} />
 * 	<Radio text={'22'} value={2} />
 * 	<Radio text={'33'} value={3} />
 * </RadioGroup>
 */

var propTypes = {

  name: _propTypes2.default.string,
  selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]).isRequired,
  onChange: _propTypes2.default.func.isRequired

};

var defaultProps = {};

var childContextTypes = {

  radioGroup: _propTypes2.default.object

};

var RadioGroup = function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  RadioGroup.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        name = _props.name,
        selectedValue = _props.selectedValue,
        onChange = _props.onChange;


    return {

      radioGroup: {

        name: name, selectedValue: selectedValue, onChange: onChange

      }

    };
  };

  RadioGroup.prototype.render = function render() {
    var _props2 = this.props,
        children = _props2.children,
        name = _props2.name,
        selectedValue = _props2.selectedValue,
        onChange = _props2.onChange,
        arg = _objectWithoutProperties(_props2, ['children', 'name', 'selectedValue', 'onChange']);

    return _react2.default.createElement(
      'div',
      _extends({ className: 'lm-ui-radio-group' }, arg),
      children
    );
  };

  return RadioGroup;
}(_react2.default.Component);

exports.default = RadioGroup;


RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
RadioGroup.childContextTypes = childContextTypes;
module.exports = exports['default'];