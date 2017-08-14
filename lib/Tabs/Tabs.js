'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _config = require('./config');

var _TabsHOC = require('./TabsHOC');

var _TabsHOC2 = _interopRequireDefault(_TabsHOC);

require('./Tabs.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Tabs = function Tabs(_ref) {
    var tabs = _ref.tabs,
        content = _ref.content,
        onSelectedChange = _ref.onSelectedChange,
        initSelectedIndex = _ref.initSelectedIndex,
        value = _ref.value,
        children = _ref.children,
        other = _objectWithoutProperties(_ref, ['tabs', 'content', 'onSelectedChange', 'initSelectedIndex', 'value', 'children']);

    var isMutiNav = tabs.length > _config.MAX_TAB;

    var cnBox = (0, _classnames2.default)({
        'lm-ui-navbar-multi': isMutiNav
    }, 'lm-ui-navbar-box');

    var cnTabs = (0, _classnames2.default)({
        'lm-ui-navbar-nowrap': isMutiNav,
        'lm-ui-navbar-equal': !isMutiNav
    }, 'lm-ui-navbar');

    return _react2.default.createElement(
        'div',
        other,
        _react2.default.createElement(
            'div',
            { className: cnBox },
            _react2.default.createElement(
                'ul',
                { className: cnTabs },
                tabs
            )
        ),
        content
    );
};

Tabs.propTypes = {
    initSelectedIndex: _propTypes2.default.number, // 当前选中的tab index
    onSelectedChange: _propTypes2.default.func, // tab改变后调用
    value: _propTypes2.default.string // 各个tab唯一name
};

Tabs.defaultProps = {
    initSelectedIndex: 0,
    onSelectedChange: function onSelectedChange() {}
};

exports.default = (0, _TabsHOC2.default)({
    addPropsToTab: {}
})(Tabs);
module.exports = exports['default'];