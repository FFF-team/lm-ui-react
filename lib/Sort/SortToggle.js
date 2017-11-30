'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _EnhancedToggle = require('./EnhancedToggle');

var _EnhancedToggle2 = _interopRequireDefault(_EnhancedToggle);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortToggle = function (_React$Component) {
    _inherits(SortToggle, _React$Component);

    function SortToggle(props) {
        _classCallCheck(this, SortToggle);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.toggleStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            zIndex: 1
        };

        _this.toggleStatus = function (status) {
            var _this$props$onClick;

            var _this$props = _this.props,
                filterItem = _this$props.filterItem,
                name = _this$props.name;


            var sortBy = status === true ? 0 : 1;
            var filterInfo = filterItem[sortBy];

            _this.setState({
                sortBy: sortBy
            });

            _this.context.updateSortOpen(name, true);
            // update sortInfo
            _this.context.collectTabInfo(name, filterInfo);

            var sortInfo = _this.context.getSortInfo(name);

            _this.props.onClick && _this.props.onClick((_this$props$onClick = {}, _this$props$onClick[name] = sortInfo, _this$props$onClick.open = true, _this$props$onClick));
        };

        _this.state = {
            sortBy: '', // 上下标示 0 上， 1下
            label: _this.getDefaultFilterItem().label
        };

        return _this;
    }

    SortToggle.prototype.getDefaultFilterItem = function getDefaultFilterItem() {
        var filterItem = this.props.filterItem;


        for (var i = 0, len = filterItem.length; i < len; i++) {
            if (filterItem[i].isDefault) {
                return {
                    value: filterItem[i].value,
                    label: filterItem[i].label
                };
            }
        }

        return {
            value: filterItem[0].value,
            label: filterItem[0].label
        };
    };

    SortToggle.prototype.getSortByIcon = function getSortByIcon() {
        var currentSortBy = this.state.sortBy;

        // 双向切换
        var iconsStyle = [{
            className: (0, _classnames2.default)({ 'lm-icon-arrow-active': currentSortBy === 0 }, 'lm-ui-icon lm-icon-arrow-top'),
            style: {
                width: 0,
                height: 0
            }
        }, {
            className: (0, _classnames2.default)({ 'lm-icon-arrow-active': currentSortBy === 1 }, 'lm-ui-icon lm-icon-arrow-bottom'),
            style: {
                width: 0,
                height: 0
            }
        }];
        return iconsStyle.map(function (iconStyle, index) {
            return _react2.default.createElement(_Icon2.default, { key: index, style: iconStyle.style, className: iconStyle.className });
        });
    };

    SortToggle.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            open = _props.open;
        var _state = this.state,
            sortBy = _state.sortBy,
            label = _state.label;


        var cnIcon = (0, _classnames2.default)({
            'positive-sort': sortBy === 0,
            'reverse-sort': sortBy === 1
        }, 'lm-ui-sort-icon');

        var sortWrapcn = (0, _classnames2.default)({
            'lm-ui-sort-wrap-active': open
        }, 'lm-ui-sort-wrap', className);

        var cnSort = (0, _classnames2.default)('lm-ui-sort', 'lm-ui-sort-toggle');

        return _react2.default.createElement(
            'div',
            { className: sortWrapcn },
            _react2.default.createElement(
                'span',
                { className: cnSort },
                _react2.default.createElement(
                    'em',
                    { className: 'label' },
                    label
                ),
                _react2.default.createElement(
                    'span',
                    { className: cnIcon },
                    this.getSortByIcon()
                ),
                _react2.default.createElement(_EnhancedToggle2.default, { style: this.toggleStyle,
                    initChecked: false,
                    toggle: true,
                    onParentShouldUpdate: this.toggleStatus
                })
            )
        );
    };

    return SortToggle;
}(_react2.default.Component);

SortToggle.PropTypes = {
    open: _propTypes2.default.bool,
    initOpen: _propTypes2.default.bool,
    filterItem: _propTypes2.default.array,
    name: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    initActiveItem: _propTypes2.default.any
};

SortToggle.defaultProps = {
    open: null,
    initOpen: false,
    filterItem: [],
    _type: 'sortToggle'
};

SortToggle.contextTypes = {
    updateSortOpen: _propTypes2.default.func,
    collectTabInfo: _propTypes2.default.func,
    getSortInfo: _propTypes2.default.func
};

exports.default = SortToggle;
module.exports = exports['default'];