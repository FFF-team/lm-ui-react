'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectableListHOC = require('../SelectableListHOC');

var _SelectableListHOC2 = _interopRequireDefault(_SelectableListHOC);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Wrapper = function Wrapper(_ref) {
    var value = _ref.value,
        onSelectedChange = _ref.onSelectedChange,
        initValue = _ref.initValue,
        children = _ref.children,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ['value', 'onSelectedChange', 'initValue', 'children', 'className']);

    var cn = (0, _classnames2.default)('lm-ui-sort-group', className);

    return _react2.default.createElement(
        'div',
        _extends({}, other, { className: cn }),
        children
    );
};

Wrapper.propTypes = {
    onSelectedChange: _propTypes2.default.func,
    value: _propTypes2.default.string
};

Wrapper.defaultProps = {
    onSelectedChange: function onSelectedChange() {}
};

var SelectableWrapper = (0, _SelectableListHOC2.default)({
    selectedClassName: 'lm-ui-sort-active'
})(Wrapper);

var SortGroup = function (_React$Component) {
    _inherits(SortGroup, _React$Component);

    function SortGroup(props) {
        _classCallCheck(this, SortGroup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleSelectedChange = function (sortInfo, value, item) {

            _this.setState({
                value: value
            });

            _this.openChild(value);
        };

        _this.state = {
            value: '',
            children: _this.props.children.map(function (child, index) {

                return _react2.default.cloneElement(child, {
                    open: false,
                    key: index
                });
            })
        };
        return _this;
    }

    SortGroup.prototype.getChildContext = function getChildContext() {
        var _this2 = this;

        return {
            updateSortOpen: function updateSortOpen(value, state) {

                _this2.updateSortOpen(value, state);
            }

        };
    };

    SortGroup.prototype.componentDidMount = function componentDidMount() {
        this.setState({
            value: this.props.initValue !== undefined ? this.props.initValue : this.props.value
        });
    };

    SortGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
        if (newProps.value !== undefined && this.props.value !== newProps.value) {
            this.setState({
                value: newProps.value
            });
        }
    };

    SortGroup.prototype.updateSortOpen = function updateSortOpen(value, state) {
        var children = this.state.children;


        var newChildren = children.map(function (child, index) {

            if (value === child.props.value) {
                return _react2.default.cloneElement(child, {
                    open: state,
                    key: index
                });
            }

            return _react2.default.cloneElement(child, {
                open: child.props.open,
                key: index
            });
        });

        this.setState({
            children: newChildren
        });
    };

    SortGroup.prototype.openChild = function openChild(value) {
        var children = this.state.children;


        var newChildren = children.map(function (child, index) {

            if (value === child.props.value) {
                var originOpen = child.props.open;

                return _react2.default.cloneElement(child, {
                    open: !originOpen,
                    key: index
                });
            }

            return _react2.default.cloneElement(child, {
                open: false,
                key: index
            });
        });

        this.setState({
            children: newChildren
        });
    };

    SortGroup.prototype.render = function render() {
        var other = _objectWithoutProperties(this.props, []);

        var _state = this.state,
            value = _state.value,
            children = _state.children;


        return _react2.default.createElement(
            SelectableWrapper,
            { value: value,
                onSelectedChange: this.handleSelectedChange
            },
            children
        );
    };

    return SortGroup;
}(_react2.default.Component);

SortGroup.PropTypes = {
    value: _propTypes2.default.string,
    initValue: _propTypes2.default.string
};

SortGroup.defaultProps = {
    value: '',
    initValue: ''
};

SortGroup.childContextTypes = {
    updateSortOpen: _propTypes2.default.func
};

exports.default = SortGroup;
module.exports = exports['default'];