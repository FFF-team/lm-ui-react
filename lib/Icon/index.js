'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icon = function Icon(_ref) {
    var style = _ref.style,
        children = _ref.children,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ['style', 'children', 'className']);

    var lmuiName = 'Icon';

    var mergedStyle = Object.assign({
        // display: 'inline-block',
        // color: '#333',
        // height: 20,
        // width: 20
    }, style);

    return _react2.default.createElement(
        'i',
        _extends({}, other, { className: className ? ' lm-ui-icon ' + className : 'lm-ui-icon',
            style: mergedStyle }),
        children
    );
};

Icon.PropTypes = {
    // style: React.PropTypes.object
};

Icon.defaultTypes = {};

exports.default = Icon;
module.exports = exports['default'];