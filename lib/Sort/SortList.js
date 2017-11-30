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

var _ModelHOC = require('../ModelHOC');

var _ModelHOC2 = _interopRequireDefault(_ModelHOC);

require('./index.scss');

var _FilterList = require('./FilterList');

var _FilterList2 = _interopRequireDefault(_FilterList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModelList = (0, _ModelHOC2.default)(_FilterList2.default);

var isFunc = function isFunc(d) {
    return Object.prototype.toString.call(d) === "[object Function]";
};
var isArray = function isArray(d) {
    return Object.prototype.toString.call(d) === "[object Array]";
};

var SortList = function (_React$Component) {
    _inherits(SortList, _React$Component);

    function SortList(props, context) {
        _classCallCheck(this, SortList);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleClick = function (e) {
            var _this$props$onClick;

            var _this$props = _this.props,
                name = _this$props.name,
                open = _this$props.open,
                filterItem = _this$props.filterItem;


            var lastOpen = open;

            var sortInfo = _this.context.getSortInfo(name);

            _this.context.updateSortOpen(name, !lastOpen);

            if (lastOpen === false) {
                if (isFunc(filterItem)) {

                    var promise = filterItem();

                    _this.setState({
                        isLoading: true
                    });

                    promise.then && promise.then(function (data) {
                        _this.setState({
                            isLoading: false,
                            filterData: data
                        });
                    });
                }
            }

            _this.props.onClick && _this.props.onClick((_this$props$onClick = {}, _this$props$onClick[name] = sortInfo, _this$props$onClick.open = !lastOpen, _this$props$onClick));
        };

        _this.handleFilterChange = function (ret) {
            var name = _this.props.name;


            if (ret) {
                _this.setState({
                    defaultItem: ret
                });
                // update sortInfo
                _this.context.collectTabInfo(name, ret);
                // update sortOpen
                _this.context.updateSortOpen && _this.context.updateSortOpen(name, false);
            }
        };

        _this.state = {
            defaultItem: { value: '', label: '', displayLabel: '' },
            filterData: [],
            isLoading: false
        };

        return _this;
    }

    SortList.prototype.componentDidMount = function componentDidMount() {
        this.setState({
            defaultItem: this.getDefaultFilterItem() || this.props.initActiveItem || this.state.defaultItem,
            filterData: this.props.filterItem
        });
    };

    SortList.prototype.getDefaultFilterItem = function getDefaultFilterItem() {
        var filterItem = this.props.filterItem;


        if (isArray(filterItem)) {
            for (var i = 0, len = filterItem.length; i < len; i++) {
                if (filterItem[i].isDefault) {
                    return filterItem[i];
                }
            }
        }

        return null;
    };

    SortList.prototype.getSortByIcon = function getSortByIcon() {
        var open = this.props.open;


        var iconsStyle = [{
            className: 'lm-ui-icon lm-icon-arrow-top',
            style: {
                width: 0,
                height: 0
            }
        }, {
            className: 'lm-ui-icon lm-icon-arrow-bottom',
            style: {
                width: 0,
                height: 0
            }
        }];

        var icon = iconsStyle[open ? 0 : 1];

        return _react2.default.createElement(_Icon2.default, { style: icon.style, className: icon.className });
    };

    SortList.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            open = _props.open;
        var _state = this.state,
            defaultItem = _state.defaultItem,
            filterData = _state.filterData,
            isLoading = _state.isLoading;


        var sortWrapcn = (0, _classnames2.default)({
            'lm-ui-sort-wrap-active': open
        }, 'lm-ui-sort-wrap', className);

        var cnSort = (0, _classnames2.default)('lm-ui-sort', 'lm-ui-sort-list');

        return _react2.default.createElement(
            'div',
            { className: sortWrapcn },
            _react2.default.createElement(
                'span',
                { className: cnSort, onClick: this.handleClick },
                _react2.default.createElement(
                    'em',
                    { className: 'label' },
                    defaultItem.displayLabel || defaultItem.label
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'lm-ui-sort-icon' },
                    this.getSortByIcon()
                )
            ),
            _react2.default.createElement(
                'div',
                { style: { display: open ? 'block' : 'none' } },
                _react2.default.createElement(ModelList, { data: filterData,
                    isLoading: isLoading,
                    defaultValue: defaultItem.value,
                    onChange: this.handleFilterChange,
                    showState: true,
                    className: 'demo-filter-bar-list'
                })
            )
        );
    };

    return SortList;
}(_react2.default.Component);

SortList.PropTypes = {
    open: _propTypes2.default.bool,
    initOpen: _propTypes2.default.bool,
    filterItem: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]),
    name: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    initActiveItem: _propTypes2.default.any
};

SortList.defaultProps = {
    open: null,
    initOpen: false,
    filterItem: [],
    initActiveItem: null,
    _type: 'sortList'
};

SortList.contextTypes = {
    updateSortOpen: _propTypes2.default.func,
    collectTabInfo: _propTypes2.default.func,
    getSortInfo: _propTypes2.default.func
};

exports.default = SortList;
module.exports = exports['default'];