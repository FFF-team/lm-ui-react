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
 * | name | Checkbox的name属性 | string | 无 | 必要 |
 * | selectedValue | 选中的值 | array | [...] | 必要 |
 * | onChange | 选择时，调用此函数 | fun | 无 | 必要 |
 *
 * <CheckboxGroup
 * 	 name={'checkboxName'}
 * 	 selectedValue={this.state.checkboxVal}
 * 	 onChange={(val) => {console.log(`checkbox/${val}`); this.setState({ checkboxVal: val })}}>
 * 	 <Checkbox text={'11'} value={1} />
 * 	 <Checkbox text={'22'} value={2} />
 * 	 <Checkbox text={'33'} value={3} />
 * </CheckboxGroup>
 */

var propTypes = {

  name: _propTypes2.default.string,
  selectedValue: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired

};

var defaultProps = {};

var childContextTypes = {

  checkboxGroup: _propTypes2.default.object

};

var CheckboxGroup = function (_React$Component) {
  _inherits(CheckboxGroup, _React$Component);

  function CheckboxGroup() {
    _classCallCheck(this, CheckboxGroup);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  CheckboxGroup.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        name = _props.name,
        selectedValue = _props.selectedValue,
        onChange = _props.onChange;


    return {

      checkboxGroup: {

        name: name, selectedValue: selectedValue, onChange: onChange

      }

    };
  };

  CheckboxGroup.prototype.render = function render() {
    var _props2 = this.props,
        children = _props2.children,
        name = _props2.name,
        selectedValue = _props2.selectedValue,
        onChange = _props2.onChange,
        arg = _objectWithoutProperties(_props2, ['children', 'name', 'selectedValue', 'onChange']);

    return _react2.default.createElement(
      'div',
      _extends({ className: 'lm-ui-checkbox-group' }, arg),
      children
    );
  };

  return CheckboxGroup;
}(_react2.default.Component);

exports.default = CheckboxGroup;


CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;
CheckboxGroup.childContextTypes = childContextTypes;
module.exports = exports['default'];