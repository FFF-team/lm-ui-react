'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by khongyan on 2017/3/29.
 */
var TabTemplate = function TabTemplate(_ref) {
    var children = _ref.children,
        selected = _ref.selected;

    var cn = (0, _classnames2.default)({
        'hide': !selected
    }, 'lm-ui-navbar-content');

    return _react2.default.createElement(
        'div',
        { className: cn },
        children
    );
};

TabTemplate.propTypes = {
    children: _react.PropTypes.node,
    selected: _react.PropTypes.bool
};

exports.default = TabTemplate;
module.exports = exports['default'];