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
 * | text | 选择项显示的文字 | string or number | 无 | 必要 |
 * | value | 选择项实际的值 | string or number or bool | 无 | 必要 |
 */

var propTypes = {};

var defaultProps = {};

var DatePicker = function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker() {
    _classCallCheck(this, DatePicker);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DatePicker.prototype.render = function render() {

    return _react2.default.createElement(
      'div',
      null,
      'hello world im DatePicker'
    );
  };

  return DatePicker;
}(_react2.default.Component);

// DatePicker.propTypes = propTypes;
// DatePicker.defaultProps = defaultProps;


exports.default = DatePicker;
module.exports = exports['default'];