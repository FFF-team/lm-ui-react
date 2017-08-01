'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Divider = function Divider(props) {
    var inset = props.inset,
        style = props.style,
        className = props.className,
        other = _objectWithoutProperties(props, ['inset', 'style', 'className']);

    // let getDpr = () => {
    //     let dpr = window.devicePixelRatio;
    //     let wh = window.screen.width;
    //     let diff = 1 / dpr;
    //
    //     return diff
    // };

    var baseStyles = {
        marginLeft: inset ? 14 : 0,
        marginRight: inset ? 14 : 0
    };

    var cn = (0, _classnames2.default)('lm-ui-divider', className);

    return _react2.default.createElement('hr', _extends({ className: cn }, other, { style: Object.assign(baseStyles, style) }));
};

exports.default = Divider;
module.exports = exports['default'];