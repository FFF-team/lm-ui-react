'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotifyLabel = function NotifyLabel(props) {
    var content = props.content,
        style = props.style;


    var styles = Object.assign({}, style);

    return _react2.default.createElement(
        'div',
        { className: 'lm-ui-notify-label', style: styles },
        content
    );
};

exports.default = NotifyLabel;
module.exports = exports['default'];