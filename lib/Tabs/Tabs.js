'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _config = require('./config');

var _TabsHOC = require('./TabsHOC');

var _TabsHOC2 = _interopRequireDefault(_TabsHOC);

require('./Tabs.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    Tabs.prototype.render = function render() {
        var _props = this.props,
            tabs = _props.tabs,
            content = _props.content,
            onSelectedChange = _props.onSelectedChange,
            initSelectedIndex = _props.initSelectedIndex,
            value = _props.value,
            children = _props.children,
            other = _objectWithoutProperties(_props, ['tabs', 'content', 'onSelectedChange', 'initSelectedIndex', 'value', 'children']);

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

    return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
    initSelectedIndex: _react2.default.PropTypes.number, // 当前选中的tab index
    onSelectedChange: _react2.default.PropTypes.func, // tab改变后调用
    value: _react2.default.PropTypes.string // 各个tab唯一name
};

Tabs.defaultProps = {
    initSelectedIndex: 0,
    onSelectedChange: function onSelectedChange() {}
};

exports.default = (0, _TabsHOC2.default)({
    addPropsToTab: {}
})(Tabs);
module.exports = exports['default'];