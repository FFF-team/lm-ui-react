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

var SelectableList = function SelectableList() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        selectedStyle: { color: '#ff552e' },
        selectedClassName: ''
    };
    return function (WrappedComponent) {
        return function (_React$PureComponent) {
            _inherits(_class2, _React$PureComponent);

            function _class2(props) {
                _classCallCheck(this, _class2);

                // value 受控组件
                // initValue 当initValue不为undefined时，hoc控制state
                var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

                _this.handleClick = function (event, item) {
                    var value = item.props.value;

                    if (_this.props.initValue !== undefined) {
                        _this.setState({
                            value: value
                        });
                    }

                    // if (value !== this.state.value) {
                    //     this.props.onSelectedChange && this.props.onSelectedChange(event, value, item)
                    // }
                    _this.props.onSelectedChange && _this.props.onSelectedChange(event, value, item);
                };

                _this.state = {
                    value: _this.props.initValue === undefined ? _this.props.value : _this.props.initValue
                };
                return _this;
            }

            _class2.prototype.componentDidMount = function componentDidMount() {};

            _class2.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
                if (newProps.value !== undefined && this.props.value !== newProps.value) {
                    this.setState({
                        value: newProps.value
                    });
                }
            };

            _class2.prototype.extendChildren = function extendChildren(child, selectedStyle, selectedClassName) {
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
                return this.state.value === child.props.value;
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
                        return _this3.extendChildren(child, config.selectedStyle, config.selectedClassName);
                    })
                );
            };

            return _class2;
        }(_react2.default.PureComponent);
    };
};

exports.default = SelectableList;
module.exports = exports['default'];