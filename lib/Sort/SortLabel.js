'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortLabel = function (_React$Component) {
    _inherits(SortLabel, _React$Component);

    function SortLabel() {
        var _temp, _this, _ret;

        _classCallCheck(this, SortLabel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (e) {
            var _this$props$onClick;

            var _this$props = _this.props,
                name = _this$props.name,
                filterItem = _this$props.filterItem,
                open = _this$props.open;

            // update sortInfo

            _this.context.collectTabInfo(name, open ? null : filterItem);

            // update sortOpen
            _this.context.updateSortOpen && _this.context.updateSortOpen(name, !open);

            var sortInfo = _this.context.getSortInfo(name);

            _this.props.onClick && _this.props.onClick((_this$props$onClick = {}, _this$props$onClick[name] = sortInfo, _this$props$onClick.open = !open, _this$props$onClick));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    SortLabel.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            label = _props.label;


        var sortWrapcn = (0, _classnames2.default)({
            // 'lm-ui-sort-wrap-active': this.state.open
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
                    label
                ),
                _react2.default.createElement('span', { className: 'lm-ui-sort-icon' })
            )
        );
    };

    return SortLabel;
}(_react2.default.Component);

SortLabel.PropTypes = {
    open: _propTypes2.default.bool,
    initOpen: _propTypes2.default.bool,
    filterItem: _propTypes2.default.array,
    name: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    initActiveItem: _propTypes2.default.any,
    label: _propTypes2.default.string
};

SortLabel.defaultProps = {
    open: null,
    initOpen: false,
    filterItem: [],
    initActiveItem: null,
    _type: 'sortLabel',
    label: '筛选'
};

SortLabel.contextTypes = {
    updateSortOpen: _propTypes2.default.func,
    collectTabInfo: _propTypes2.default.func,
    getSortInfo: _propTypes2.default.func
};

exports.default = SortLabel;
module.exports = exports['default'];