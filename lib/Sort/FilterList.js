'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListItem = require('../List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = require('../List/List');

var _List2 = _interopRequireDefault(_List);

var _SelectableListHOC = require('../SelectableListHOC');

var _SelectableListHOC2 = _interopRequireDefault(_SelectableListHOC);

var _Divider = require('../Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectableList = (0, _SelectableListHOC2.default)({
    selectedClassName: 'lm-ui-active'
})(_List2.default);

var FilterList = function (_React$Component) {
    _inherits(FilterList, _React$Component);

    function FilterList() {
        var _temp, _this, _ret;

        _classCallCheck(this, FilterList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleChange = function (event, value, item) {

            if (value !== undefined) {
                var ret = _this.getItemByValue(value);

                _this.props.onChange && _this.props.onChange(_extends({}, ret));
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    FilterList.prototype.renderList = function renderList() {
        var data = this.props.data;


        var ret = [];

        data.length && data.map(function (item, index) {
            if (index < data.length - 1) {
                ret.push(_react2.default.createElement(_ListItem2.default, { value: item.value,
                    primaryText: item.label,
                    key: index
                }));
                ret.push(_react2.default.createElement(_Divider2.default, { key: 'divider-' + index }));
            } else {
                ret.push(_react2.default.createElement(_ListItem2.default, { value: item.value,
                    primaryText: item.label,
                    key: index
                }));
            }
        });

        return ret;
    };

    FilterList.prototype.getDefaultValue = function getDefaultValue() {
        var data = this.props.data;


        for (var i = 0, len = data.length; i < len; i++) {
            if (data[i].isDefault) {
                return data[i].value;
            }
        }

        return '';
    };

    FilterList.prototype.getItemByValue = function getItemByValue(value) {
        var data = this.props.data;


        for (var i = 0, len = data.length; i < len; i++) {
            if (data[i].value === value) {
                return data[i];
            }
        }

        return '';
    };

    FilterList.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            showState = _props.showState,
            isLoading = _props.isLoading,
            defaultValue = _props.defaultValue;
        // const defaultValue = this.getDefaultValue();

        if (isLoading) {
            return _react2.default.createElement(
                'p',
                { className: 'sort-loading' },
                '\u52A0\u8F7D\u4E2D...'
            );
        }

        return _react2.default.createElement(
            SelectableList,
            { initValue: defaultValue,
                onSelectedChange: this.handleChange,
                className: className,
                showState: showState
            },
            this.renderList()
        );
    };

    return FilterList;
}(_react2.default.Component);

FilterList.PropTypes = {
    data: _propTypes2.default.array,
    onChange: _propTypes2.default.func,
    showState: _propTypes2.default.bool,
    defaultValue: _propTypes2.default.string,
    className: _propTypes2.default.string
};

exports.default = FilterList;
module.exports = exports['default'];