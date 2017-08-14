'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgIcon = function (_React$Component) {
    _inherits(SvgIcon, _React$Component);

    function SvgIcon(props) {
        _classCallCheck(this, SvgIcon);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            hovered: false
        };
        return _this;
    }

    SvgIcon.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            color = _props.color,
            style = _props.style,
            viewBox = _props.viewBox,
            other = _objectWithoutProperties(_props, ['children', 'color', 'style', 'viewBox']);

        var mergedStyle = Object.assign({
            display: 'inline-block',
            color: '#333',
            fill: color,
            height: 20,
            width: 20,
            userSelect: 'none'
        }, style);

        return _react2.default.createElement(
            'svg',
            _extends({}, other, {
                style: mergedStyle,
                viewBox: viewBox
            }),
            children
        );
    };

    return SvgIcon;
}(_react2.default.Component);

SvgIcon.lmuiName = 'SvgIcon';


SvgIcon.propTypes = {
    children: _propTypes2.default.node,
    color: _propTypes2.default.string,
    viewBox: _propTypes2.default.string,
    style: _propTypes2.default.object
};

exports.default = SvgIcon;
module.exports = exports['default'];