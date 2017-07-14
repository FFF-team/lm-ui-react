"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnhancedToggle = function (_React$Component) {
    _inherits(EnhancedToggle, _React$Component);

    function EnhancedToggle(props) {
        _classCallCheck(this, EnhancedToggle);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleChange = function (event) {
            if (_this.props.toggle === false) {
                _this.refs.checkbox.checked = true;
            }

            var checkStatus = _this.refs.checkbox.checked;

            if (_this.props.onParentShouldUpdate) {
                _this.props.onParentShouldUpdate(checkStatus);
            }
        };

        return _this;
    }

    EnhancedToggle.prototype.render = function render() {
        var _props = this.props,
            onParentShouldUpdate = _props.onParentShouldUpdate,
            style = _props.style,
            toggle = _props.toggle,
            disabled = _props.disabled,
            others = _objectWithoutProperties(_props, ["onParentShouldUpdate", "style", "toggle", "disabled"]);

        return _react2.default.createElement("input", _extends({
            ref: "checkbox",
            type: "checkbox"
        }, others, {
            onChange: this.handleChange,
            style: style
        }));
    };

    return EnhancedToggle;
}(_react2.default.Component);

EnhancedToggle.PropTypes = {
    style: _react2.default.PropTypes.object,
    onParentShouldUpdate: _react2.default.PropTypes.func,
    toggle: _react2.default.PropTypes.bool,
    disabled: _react2.default.PropTypes.bool
};

EnhancedToggle.defaultProps = {
    style: {},
    toggle: true,
    onParentShouldUpdate: function onParentShouldUpdate() {}
};

exports.default = EnhancedToggle;
module.exports = exports["default"];