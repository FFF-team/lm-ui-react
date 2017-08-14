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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = function (_React$Component) {
    _inherits(Wrapper, _React$Component);

    function Wrapper(props) {
        _classCallCheck(this, Wrapper);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    Wrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {

        if (nextProps.value !== this.props.value) {
            return true;
        }

        return false;
    };

    Wrapper.prototype.render = function render() {
        var _props = this.props,
            value = _props.value,
            onSelectedChange = _props.onSelectedChange,
            children = _props.children,
            className = _props.className,
            other = _objectWithoutProperties(_props, ['value', 'onSelectedChange', 'children', 'className']);

        var cn = (0, _classnames2.default)('lm-ui-sort-group', className);

        return _react2.default.createElement(
            'div',
            _extends({ className: cn }, other),
            children
        );
    };

    return Wrapper;
}(_react2.default.Component);

Wrapper.PropTypes = {
    value: _propTypes2.default.string,
    onSelectedChange: _propTypes2.default.func
};

Wrapper.defaultProps = {
    onSelectedChange: function onSelectedChange() {}
};

var SelectableWrapper = (0, _SelectableListHOC2.default)({
    selectedClassName: 'lm-ui-sort-active'
})(Wrapper);

var SortGroup = function (_React$Component2) {
    _inherits(SortGroup, _React$Component2);

    function SortGroup() {
        var _temp, _this2, _ret;

        _classCallCheck(this, SortGroup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this2), _this2.handleSelectedChange = function (sortInfo, value, item) {

            _this2.setState({
                value: value
            });
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    SortGroup.prototype.componentWillMount = function componentWillMount() {
        this.state = {
            value: '',
            open: false
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

    SortGroup.prototype.render = function render() {
        var _this3 = this;

        var _props2 = this.props,
            onSelectedChange = _props2.onSelectedChange,
            children = _props2.children,
            initValue = _props2.initValue,
            value = _props2.value,
            other = _objectWithoutProperties(_props2, ['onSelectedChange', 'children', 'initValue', 'value']);

        return _react2.default.createElement(
            SelectableWrapper,
            _extends({ value: this.state.value,
                onSelectedChange: this.handleSelectedChange
            }, other),
            children.map(function (child, index) {

                return _react2.default.cloneElement(child, {
                    open: _this3.state.value === child.props.value,
                    key: index
                });
            })
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

exports.default = SortGroup;
module.exports = exports['default'];