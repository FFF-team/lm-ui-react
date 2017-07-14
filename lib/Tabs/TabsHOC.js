'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabTemplate = require('./TabTemplate');

var _TabTemplate2 = _interopRequireDefault(_TabTemplate);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsHOC = function TabsHOC(_ref) {
    var addPropsToTab = _ref.addPropsToTab;
    return function (WrappedComponent) {
        return function (_React$Component) {
            _inherits(_class, _React$Component);

            function _class(props) {
                _classCallCheck(this, _class);

                var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

                var valueLink = _this.getValueLink(_this.props);
                var initialIndex = _this.props.initSelectedIndex;

                _this.state = {
                    selectedIndex: valueLink.value !== undefined ? _this.getSelectedIndex(_this.props) : initialIndex < _this.getTabCount() ? initialIndex : 0
                };
                return _this;
            }

            _class.prototype.componentDidMount = function componentDidMount() {};

            _class.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
                var valueLink = this.getValueLink(nextProps);

                if (valueLink.value !== undefined) {
                    this.setState({
                        selectedIndex: this.getSelectedIndex(nextProps)
                    });
                }
            };

            _class.prototype.getSelectedIndex = function getSelectedIndex(props) {
                var valueLink = this.getValueLink(props);
                var selectedIndex = -1;

                this.getTabs(props).forEach(function (tab, index) {
                    if (valueLink.value === tab.props.value) {
                        selectedIndex = index;
                    }
                });

                return selectedIndex;
            };

            _class.prototype.getValueLink = function getValueLink(props) {
                return {
                    value: props.value,
                    handleChange: props.onSelectedChange || function () {}
                };
            };

            _class.prototype.getTabs = function getTabs() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

                var tabs = [];
                // todo: 校验
                return props.children ? props.children : [];
            };

            _class.prototype.getTabCount = function getTabCount() {
                return this.getTabs().length;
            };

            _class.prototype.handleClickAction = function handleClickAction(index, value, tab) {
                var valueLink = this.getValueLink(this.props);

                if (valueLink.value && valueLink.value !== value || this.state.selectedIndex !== index) {
                    valueLink.handleChange(value, tab);
                }

                this.setState({
                    selectedIndex: index
                });

                tab.props.onSelectAction && tab.props.onSelectAction(tab);
            };

            _class.prototype.getSelected = function getSelected(tab, index) {
                return index === this.state.selectedIndex;
            };

            // todo: 标签个数限制，文字限制。warn


            _class.prototype.render = function render() {
                var _this2 = this;

                var className = addPropsToTab.className,
                    otherTabProps = _objectWithoutProperties(addPropsToTab, ['className']);

                var content = [];
                var tabs = this.getTabs().map(function (tab, index) {
                    content.push(tab.props.children ? _react2.default.createElement(_TabTemplate2.default, {
                        key: index,
                        selected: _this2.getSelected(tab, index)
                    }, tab.props.children) : undefined);
                    return _react2.default.cloneElement(tab, _extends({
                        index: index,
                        key: index,
                        selected: _this2.getSelected(tab, index),
                        onClick: _this2.handleClickAction.bind(_this2),
                        className: (0, _classnames2.default)(className, tab.props.className)
                    }, otherTabProps));
                });
                return _react2.default.createElement(WrappedComponent, _extends({ tabs: tabs,
                    content: content
                }, this.props));
            };

            return _class;
        }(_react2.default.Component);
    };
};

exports.default = TabsHOC;
module.exports = exports['default'];