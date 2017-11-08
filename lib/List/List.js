'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by khongyan on 2017/3/31.
                                                                                                                                                                                                                              */


var List = function List(_ref) {
    var value = _ref.value,
        onSelectedChange = _ref.onSelectedChange,
        initValue = _ref.initValue,
        children = _ref.children,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ['value', 'onSelectedChange', 'initValue', 'children', 'className']);

    var cn = (0, _classnames2.default)('lm-ui-list', className);

    return _react2.default.createElement(
        'div',
        _extends({}, other, { className: cn }),
        children
    );
};

List.propTypes = {
    onSelectedChange: _propTypes2.default.func,
    value: _propTypes2.default.string
};

List.defaultProps = {
    onSelectedChange: function onSelectedChange() {}
};

exports.default = List;
module.exports = exports['default'];