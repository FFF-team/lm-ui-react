'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
}; /**
    * Created by khongyan on 2017/3/29.
    */


TabTemplate.propTypes = {
    children: _propTypes2.default.node,
    selected: _propTypes2.default.bool
};

exports.default = TabTemplate;
module.exports = exports['default'];