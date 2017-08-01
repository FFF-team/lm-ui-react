'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _EnhancedToggle = require('./EnhancedToggle');

var _EnhancedToggle2 = _interopRequireDefault(_EnhancedToggle);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
*
* sortInfo={ [{key: this.state.sort1, sortBy: 0}] }
* */

var hasOwnProperty = Object.prototype.hasOwnProperty;

function is(x, y) {
    // SameValue algorithm
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
    }
}

function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
        return true;
    }

    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }

    return true;
}

var Sort = function (_React$Component) {
    _inherits(Sort, _React$Component);

    function Sort(props) {
        _classCallCheck(this, Sort);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.toggleStatus = function (status) {
            var sortInfo = _this.props.sortInfo;
            var sortKey = void 0;
            var sortBy = void 0;

            if (sortInfo.length === 2) {
                // todo:双向切换
                sortBy = status === true ? 0 : 1;
                sortKey = _this.getSortKey(sortInfo, sortBy);

                _this.setState({
                    sortBy: sortBy
                });
            } else {
                // todo:单项切换
                sortBy = _this.getSortBy(sortInfo);
                sortKey = _this.getSortKey(sortInfo);

                _this.setState({
                    sortBy: sortBy
                });
            }
            _this.props.onClick && _this.props.onClick({
                key: sortKey,
                sortBy: sortBy
            });

            _this.props.children && _this.setState({
                open: !_this.state.open
            });

            // this.props.onSelectAction && this.props.onSelectAction();
        };

        _this.close = function () {
            _this.setState({
                open: false
            });
        };

        _this.toggleStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            zIndex: 1
        };

        _this.state = {
            sortBy: _this.getSortBy(_this.props.sortInfo), // 上下标示 0 上， 1下
            sortKey: _this.getSortKey(_this.props.sortInfo),

            open: false
        };

        _this.canToggle = _this.props.sortInfo.length === 2;
        _this.initCheck = _this.getSortBy(_this.props.sortInfo);
        return _this;
    }

    Sort.prototype.componentWillMount = function componentWillMount() {
        this.setState({
            open: this.props.open === null ? this.props.initOpen === true : this.props.open
        });
    };

    Sort.prototype.componentDidMount = function componentDidMount() {};

    Sort.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState) || !shallowEqual(this.context, nextContext);
    };

    Sort.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        // controlled open
        if (nextProps.open !== null) {
            this.setState({
                open: nextProps.open
            });
        }
    };

    Sort.prototype.getSortKey = function getSortKey(sortInfo, sortBy) {
        if (sortBy === undefined) return sortInfo[0].key !== undefined ? sortInfo[0].key : sortInfo[0];

        for (var i = 0, len = sortInfo.length; i < len; i++) {
            if (sortInfo[i].sortBy === sortBy) {
                return sortInfo[i].key;
            }
        }

        return '';
    };

    Sort.prototype.getSortBy = function getSortBy(sortInfo) {
        return sortInfo[0]['sortBy'] !== undefined ? sortInfo[0]['sortBy'] : '';
    };

    Sort.prototype.getSortByIcon = function getSortByIcon() {
        var sortInfo = this.props.sortInfo;
        var currentSortBy = this.state.sortBy;

        var iconsStyle = [{
            className: (0, _classnames2.default)({ 'lm-icon-arrow-active': currentSortBy === 0 }, 'lm-ui-icon lm-icon-arrow-top'),
            style: {
                width: 0,
                height: 0
            },
            path: 'M256 512l256 -321l257 321h-513z',
            color: currentSortBy === 0 ? 'red' : 'black',
            sortKey: 0
        }, {
            className: (0, _classnames2.default)({ 'lm-icon-arrow-active': currentSortBy === 1 }, 'lm-ui-icon lm-icon-arrow-bottom'),
            style: {
                width: 0,
                height: 0
            },
            path: 'M768 256l-256 321l-257 -321h513z',
            color: currentSortBy === 1 ? 'red' : 'black',
            sortKey: 1
        }];

        if (sortInfo.length === 2) {
            // 双向切换

            return iconsStyle.map(function (iconStyle, index) {
                return _react2.default.createElement(_Icon2.default, { key: index, style: iconStyle.style, className: iconStyle.className });
            });
        }

        if (sortInfo && sortInfo[0] && (sortInfo[0].sortBy === 0 || sortInfo[0].sortBy === 1) && sortInfo.length === 1) {
            // 单项切换
            var sort = this.getSortBy(sortInfo);
            var iconStyle = iconsStyle[sort];
            return _react2.default.createElement(_Icon2.default, { style: iconStyle.style, className: iconStyle.className });
            // return (
            //     <SvgIcon viewBox="0 0 1024 1024" color={ iconStyle.color }>
            //         <path
            //             d={ iconStyle.path }/>
            //     </SvgIcon>
            // )
        } else {
            // 自定义筛选
            return this.props.icon === true ? _react2.default.createElement(
                _SvgIcon2.default,
                { className: 'icon-filter-svg', viewBox: '0 0 1024 1024' },
                _react2.default.createElement('path', {
                    d: 'M933.447123 176.422082l0.319272 0.277316c0 0-186.985672 187.004091-249.315252 249.335718-4.408403 4.409426-13.05841 12.504802-15.44476 18.263969-2.493797 6.021134-2.185782 18.920932-2.185782 25.438369 0 119.209032 1.583055 467.095277 1.583055 467.095277s0.429789 25.140587-25.019837 25.154913c-19.715017 0.010233-20.682042-19.348674-20.682042-25.154913 0-163.261341-0.073678-384.173706-0.105401-473.818399-0.008186-23.821545-1.835811-28.482705 0.754177-37.136805 3.01773-10.087753 21.23872-23.288402 29.017894-30.332842 62.153572-56.274678 250.135944-250.104221 250.135944-250.104221l-0.100284-0.23536c4.789073-4.093225 7.995091-10.012028 7.995091-16.836457 0-12.405541-10.048867-22.476921-22.454408-22.476921L136.053164 105.891725c-12.405541 0-22.474874 10.07138-22.474874 22.476921 0 6.804986 3.227508 12.742209 8.015557 16.836457l-0.081864 0.23536c0 0 182.491311 186.204889 245.902526 245.480924 6.268774 5.860475 28.880771 23.441898 32.753985 34.842553 2.316765 6.813173 1.266853 41.066301 1.266853 41.066301l0 254.029624c0 0-2.949168 9.471722-22.437012 9.403161-17.992793-0.064468-21.807678-9.471722-21.807678-9.471722s-2.494821-173.352163 0.007163-254.597559c0.172939-5.587252-1.003863-17.262152-2.731204-21.986757-2.238994-6.125511-10.45205-14.3181-15.103999-18.48705-65.579601-58.766428-249.111614-249.019517-249.111614-249.019517l0.299829-0.277316c-12.800537-12.105712-20.853957-29.082362-20.853957-48.053436 0-36.659945 29.696346-66.355267 66.355267-66.355267L887.946836 62.014402c36.659945 0 66.355267 29.695323 66.355267 66.355267C954.30108 147.33972 946.249707 164.31637 933.447123 176.422082L933.447123 176.422082 933.447123 176.422082zM933.447123 176.422082' })
            ) : this.props.icon;
        }
    };

    Sort.prototype.extendChildren = function extendChildren(child) {
        var _this2 = this;

        return _react2.default.cloneElement(child, {
            onChange: function onChange(result) {
                var canClose = child.props.onChange && child.props.onChange(result);
                if (canClose) _this2.close();
            }
        });
    };

    Sort.prototype.render = function render() {
        var _this3 = this;

        var _props = this.props,
            value = _props.value,
            label = _props.label,
            clickAction = _props.clickAction,
            onClick = _props.onClick,
            sortInfo = _props.sortInfo,
            icon = _props.icon,
            className = _props.className,
            children = _props.children,
            hasFilterItem = _props.hasFilterItem,
            initOpen = _props.initOpen,
            other = _objectWithoutProperties(_props, ['value', 'label', 'clickAction', 'onClick', 'sortInfo', 'icon', 'className', 'children', 'hasFilterItem', 'initOpen']);

        var cnSort = (0, _classnames2.default)('lm-ui-sort', className);

        var cnIcon = (0, _classnames2.default)({
            'positive-sort': this.state.sortBy === 0,
            'reverse-sort': this.state.sortBy === 1
        }, 'lm-ui-sort-icon');

        return _react2.default.createElement(
            'div',
            { className: 'lm-ui-sort-wrap' },
            _react2.default.createElement(
                'span',
                _extends({ className: cnSort }, other),
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
                    initChecked: this.initCheck === 0,
                    toggle: this.canToggle,
                    onParentShouldUpdate: this.toggleStatus
                })
            ),
            children ? _react2.default.createElement(
                'div',
                { style: { display: this.state.open ? 'block' : 'none' } },
                _react2.default.Children.map(children, function (child) {
                    return _this3.extendChildren(child);
                })
            ) : null
        );
    };

    return Sort;
}(_react2.default.Component);

Sort.PropTypes = {
    value: _react2.default.PropTypes.string,
    label: _react2.default.PropTypes.string,
    sortInfo: _react2.default.PropTypes.array, // 0: 升序， 1： 降序
    icon: _react2.default.PropTypes.node,
    open: _react2.default.PropTypes.bool,
    initOpen: _react2.default.PropTypes.bool
};

Sort.defaultProps = {
    label: '筛选',
    sortInfo: [{
        key: '',
        sortBy: ''
    }],
    open: null,
    initOpen: false
};

exports.default = Sort;
module.exports = exports['default'];