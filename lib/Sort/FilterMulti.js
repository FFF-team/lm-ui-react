'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('src/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterMulti = function (_React$Component) {
    _inherits(FilterMulti, _React$Component);

    function FilterMulti(props) {
        _classCallCheck(this, FilterMulti);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.okBtn = function () {
            _this.props.onChange({
                isAll: _this.state.checkboxVal.length === 0,
                data: _this.state.checkboxVal
            });
        };

        _this.resetBtn = function () {
            _this.setState({
                checkboxVal: []
            });
        };

        _this.state = {
            checkboxVal: _this.props.checkboxVal
        };
        return _this;
    }

    FilterMulti.prototype.renderItems = function renderItems() {
        var _this2 = this;

        var data = this.props.data;


        return data.map(function (list, i) {
            return _react2.default.createElement(
                'dl',
                { key: i, className: 'term-cell' },
                _react2.default.createElement(
                    'dt',
                    null,
                    list.title
                ),
                _react2.default.createElement(
                    _index.CheckboxGroup,
                    {
                        name: 'checkboxName',
                        selectedValue: _this2.state.checkboxVal,
                        onChange: function onChange(val) {
                            _this2.setState({ checkboxVal: val });
                        },
                        style: { flexDirection: 'row' }
                    },
                    list.items.map(function (item, index) {
                        return _react2.default.createElement(
                            'dd',
                            { key: index },
                            _react2.default.createElement(
                                'a',
                                { className: 'lft-item' },
                                _react2.default.createElement(_index.Checkbox, { mode: 'button',
                                    uniqueId: item.value,
                                    text: item.label,
                                    value: item.value
                                })
                            )
                        );
                    })
                )
            );
        });
    };

    FilterMulti.prototype.render = function render() {
        var _props = this.props,
            onChange = _props.onChange,
            checkboxVal = _props.checkboxVal,
            other = _objectWithoutProperties(_props, ['onChange', 'checkboxVal']);

        return _react2.default.createElement(
            'div',
            _extends({ className: 'lm-multi-filter' }, other),
            _react2.default.createElement(
                'div',
                { className: 'filter-multi-term' },
                this.renderItems()
            ),
            _react2.default.createElement(
                'div',
                { className: 'btn-group filter-term-ft' },
                _react2.default.createElement(
                    'div',
                    { className: 'box' },
                    _react2.default.createElement(
                        _index.Button,
                        {
                            size: 'long',
                            btnType: 'grayHollow',
                            isRadius: false,
                            style: { width: '100%' },
                            onClick: this.resetBtn
                        },
                        '\u91CD\u7F6E'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'box' },
                    _react2.default.createElement(
                        _index.Button,
                        {
                            size: 'long',
                            btnType: 'primary',
                            isRadius: false,
                            style: { width: '100%' },
                            onClick: this.okBtn
                        },
                        '\u786E\u5B9A'
                    )
                )
            )
        );
    };

    return FilterMulti;
}(_react2.default.Component);

exports.default = FilterMulti;
module.exports = exports['default'];