'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./TabsFooter.scss');

var _TabsHOC = require('./TabsHOC');

var _TabsHOC2 = _interopRequireDefault(_TabsHOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TabsFooter = function TabsFooter(_ref) {
    var tabs = _ref.tabs,
        content = _ref.content,
        onSelectedChange = _ref.onSelectedChange,
        initSelectedIndex = _ref.initSelectedIndex,
        value = _ref.value,
        children = _ref.children,
        other = _objectWithoutProperties(_ref, ['tabs', 'content', 'onSelectedChange', 'initSelectedIndex', 'value', 'children']);

    var cn = 'lm-ui-footer-nav';

    return _react2.default.createElement(
        'div',
        other,
        _react2.default.createElement(
            'ul',
            { className: cn },
            tabs
        ),
        content
    );
};

TabsFooter.propTypes = {
    initSelectedIndex: _propTypes2.default.number, // 当前选中的tab index
    onSelectedChange: _propTypes2.default.func, // tab改变后调用
    value: _propTypes2.default.string // 各个tab唯一name
};

TabsFooter.defaultProps = {
    initSelectedIndex: 0,
    onSelectedChange: function onSelectedChange() {}
};

var addPropsToTab = function addPropsToTab() {
    return {
        className: 'lm-ui-footer-nav-item'
    };
};

exports.default = (0, _TabsHOC2.default)({
    addPropsToTab: addPropsToTab()
})(TabsFooter);
module.exports = exports['default'];