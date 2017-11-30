'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by khongyan on 2017/3/31.
 */
var List = function List(_ref) {
    var value = _ref.value,
        onSelectedChange = _ref.onSelectedChange,
        initValue = _ref.initValue,
        children = _ref.children,
        className = _ref.className,
        style = _ref.style;


    var cn = (0, _classnames2.default)('lm-ui-list', className);

    return _react2.default.createElement(
        'div',
        { style: style, className: cn },
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