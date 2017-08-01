'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectedTableList = function SelectedTableList(_ref) {
    var _ref$selectedStyle = _ref.selectedStyle,
        selectedStyle = _ref$selectedStyle === undefined ? { color: '#ff552e' } : _ref$selectedStyle,
        _ref$selectedClassNam = _ref.selectedClassName,
        selectedClassName = _ref$selectedClassNam === undefined ? '' : _ref$selectedClassNam;
    return function (WrappedComponent) {
        return function (_React$Component) {
            _inherits(_class2, _React$Component);

            function _class2(props) {
                _classCallCheck(this, _class2);

                var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

                _this.handleClick = function (event, item) {
                    var value = item.props.value;

                    if (value !== _this.props.value) {
                        _this.props.onSelectedChange && _this.props.onSelectedChange(event, value, item);
                    }
                };

                return _this;
            }

            _class2.prototype.componentDidMount = function componentDidMount() {
                this.state = {
                    selectedValue: this.props.value
                };
            };

            _class2.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {};

            _class2.prototype.extendChildren = function extendChildren(child, selectedStyle) {
                var _this2 = this;

                var activeClassName = this.props.activeClassName;
                var mergedStyle = Object.assign({}, child.props.style);
                var mergedClassName = child.props.className;
                if (this.isChildSelected(child)) {
                    mergedStyle = Object.assign({}, mergedStyle, selectedStyle);
                    mergedClassName = activeClassName ? activeClassName : (0, _classnames2.default)(mergedClassName, selectedClassName);
                }

                return _react2.default.cloneElement(child, {
                    onClick: function onClick(event) {
                        child.props.onClick && child.props.onClick(event);
                        _this2.handleClick(event, child);
                    },
                    style: mergedStyle,
                    className: mergedClassName
                });
            };

            _class2.prototype.isChildSelected = function isChildSelected(child, props) {
                return this.props.value === child.props.value;
            };

            _class2.prototype.render = function render() {
                var _this3 = this;

                var _props = this.props,
                    children = _props.children,
                    other = _objectWithoutProperties(_props, ['children']);

                return _react2.default.createElement(
                    WrappedComponent,
                    other,
                    _react2.default.Children.map(children, function (child) {
                        return _this3.extendChildren(child, selectedStyle);
                    })
                );
            };

            return _class2;
        }(_react2.default.Component);
    };
};

exports.default = SelectedTableList;
module.exports = exports['default'];