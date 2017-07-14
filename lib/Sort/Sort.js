'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _EnhancedToggle = require('./EnhancedToggle');

var _EnhancedToggle2 = _interopRequireDefault(_EnhancedToggle);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                sortKey = sortInfo[sortBy];

                _this.setState({
                    sortBy: sortBy
                });
            } else {
                // todo:单项切换
                sortBy = _this.getSortBy(_this.props.sortInfo);
                sortKey = _this.getSortKey(sortInfo);

                _this.setState({
                    sortBy: sortBy
                });
            }
            _this.props.clickAction && _this.props.clickAction(sortKey, sortBy);

            // this.props.onSelectAction && this.props.onSelectAction();
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
            sortBy: '',
            sortKey: _this.getSortKey(_this.props.sortInfo)
        };

        _this.canToggle = false;
        return _this;
    }

    Sort.prototype.componentDidMount = function componentDidMount() {
        this.canToggle = this.props.sortInfo.length === 2;
    };

    Sort.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var nextSortKey = this.getSortKey(nextProps.sortInfo);
        var sortKey = this.getSortKey(this.props.sortInfo);
        if (nextSortKey == sortKey) {
            // todo: 对象相等情况，目前仅限于字符串
            return;
        }
        // console.log(nextProps);
        this.setState({
            sortKey: this.getSortKey(nextProps.sortInfo)
        });
    };

    Sort.prototype.getSortKey = function getSortKey(sortInfo) {
        return sortInfo[0].key !== undefined ? sortInfo[0].key : sortInfo[0];
    };

    Sort.prototype.getSortBy = function getSortBy(sortInfo) {
        return sortInfo[0]['sortBy'] !== undefined ? sortInfo[0]['sortBy'] : '';
    };

    Sort.prototype.getSortByIcon = function getSortByIcon() {
        var sortInfo = this.props.sortInfo;
        var propsIcon = this.props.icon;
        var iconStyle = {
            width: 0,
            height: 0
        };

        var icons = [_react2.default.createElement(_Icon2.default, { style: iconStyle, className: 'lm-ui-icon lm-icon-arrow-top', key: '0' }), _react2.default.createElement(_Icon2.default, { style: iconStyle, className: 'lm-ui-icon lm-icon-arrow-bottom', key: '1' })];

        if (sortInfo.length === 2) {
            // todo: 双向切换
            return icons;
        } else {
            // todo: 单项切换
            var sort = this.getSortBy(sortInfo);
            return sort !== '' ? icons[sort] : _react2.default.isValidElement(propsIcon) ? propsIcon : null;
        }
    };

    Sort.prototype.render = function render() {
        var _props = this.props,
            value = _props.value,
            label = _props.label,
            clickAction = _props.clickAction,
            onSelectAction = _props.onSelectAction,
            sortInfo = _props.sortInfo,
            icon = _props.icon,
            className = _props.className,
            other = _objectWithoutProperties(_props, ['value', 'label', 'clickAction', 'onSelectAction', 'sortInfo', 'icon', 'className']);

        var cnSort = (0, _classnames2.default)('lm-ui-sort', className);

        var cnIcon = (0, _classnames2.default)({
            'positive-sort': this.state.sortBy === 0,
            'reverse-sort': this.state.sortBy === 1
        }, 'lm-ui-sort-icon');

        return _react2.default.createElement(
            'span',
            _extends({ className: cnSort }, other, { onClick: onSelectAction }),
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
                toggle: this.canToggle,
                onParentShouldUpdate: this.toggleStatus
            })
        );
    };

    return Sort;
}(_react2.default.Component);

Sort.PropTypes = {
    value: _react2.default.PropTypes.string,
    label: _react2.default.PropTypes.string,
    sortInfo: _react2.default.PropTypes.array, // 0: 升序， 1： 降序
    clickAction: _react2.default.PropTypes.func,
    icon: _react2.default.PropTypes.node
};

Sort.defaultProps = {
    label: '筛选',
    clickAction: function clickAction() {},
    sortInfo: ['']
};

exports.default = Sort;
module.exports = exports['default'];