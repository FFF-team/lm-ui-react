'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

require('./index.scss');

var _FilterMulti = require('./FilterMulti');

var _FilterMulti2 = _interopRequireDefault(_FilterMulti);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortMulti = function (_React$Component) {
    _inherits(SortMulti, _React$Component);

    function SortMulti() {
        var _temp, _this, _ret;

        _classCallCheck(this, SortMulti);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (e) {
            var _this$props$onClick;

            var _this$props = _this.props,
                name = _this$props.name,
                open = _this$props.open;


            var sortInfo = _this.context.getSortInfo(name);

            var lastOpen = open;

            _this.context.updateSortOpen(name, !lastOpen);

            _this.props.onClick && _this.props.onClick((_this$props$onClick = {}, _this$props$onClick[name] = sortInfo, _this$props$onClick.open = !lastOpen, _this$props$onClick));
        }, _this.handleFilterChange = function (ret) {
            var name = _this.props.name;


            if (ret) {
                // update sortInfo
                _this.context.collectTabInfo(name, ret);
                // update sortOpen
                _this.context.updateSortOpen && _this.context.updateSortOpen(name, false);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    SortMulti.prototype.getSortByIcon = function getSortByIcon() {
        return _react2.default.createElement(
            _SvgIcon2.default,
            { className: 'icon-filter-svg', viewBox: '0 0 1024 1024' },
            _react2.default.createElement('path', {
                d: 'M933.447123 176.422082l0.319272 0.277316c0 0-186.985672 187.004091-249.315252 249.335718-4.408403 4.409426-13.05841 12.504802-15.44476 18.263969-2.493797 6.021134-2.185782 18.920932-2.185782 25.438369 0 119.209032 1.583055 467.095277 1.583055 467.095277s0.429789 25.140587-25.019837 25.154913c-19.715017 0.010233-20.682042-19.348674-20.682042-25.154913 0-163.261341-0.073678-384.173706-0.105401-473.818399-0.008186-23.821545-1.835811-28.482705 0.754177-37.136805 3.01773-10.087753 21.23872-23.288402 29.017894-30.332842 62.153572-56.274678 250.135944-250.104221 250.135944-250.104221l-0.100284-0.23536c4.789073-4.093225 7.995091-10.012028 7.995091-16.836457 0-12.405541-10.048867-22.476921-22.454408-22.476921L136.053164 105.891725c-12.405541 0-22.474874 10.07138-22.474874 22.476921 0 6.804986 3.227508 12.742209 8.015557 16.836457l-0.081864 0.23536c0 0 182.491311 186.204889 245.902526 245.480924 6.268774 5.860475 28.880771 23.441898 32.753985 34.842553 2.316765 6.813173 1.266853 41.066301 1.266853 41.066301l0 254.029624c0 0-2.949168 9.471722-22.437012 9.403161-17.992793-0.064468-21.807678-9.471722-21.807678-9.471722s-2.494821-173.352163 0.007163-254.597559c0.172939-5.587252-1.003863-17.262152-2.731204-21.986757-2.238994-6.125511-10.45205-14.3181-15.103999-18.48705-65.579601-58.766428-249.111614-249.019517-249.111614-249.019517l0.299829-0.277316c-12.800537-12.105712-20.853957-29.082362-20.853957-48.053436 0-36.659945 29.696346-66.355267 66.355267-66.355267L887.946836 62.014402c36.659945 0 66.355267 29.695323 66.355267 66.355267C954.30108 147.33972 946.249707 164.31637 933.447123 176.422082L933.447123 176.422082 933.447123 176.422082zM933.447123 176.422082' })
        );
    };

    SortMulti.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            filterItem = _props.filterItem,
            label = _props.label,
            initActiveItem = _props.initActiveItem,
            open = _props.open;


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
                    label
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
                _react2.default.createElement(_FilterMulti2.default, {
                    data: filterItem,
                    onChange: this.handleFilterChange,
                    checkboxVal: initActiveItem || []
                })
            )
        );
    };

    return SortMulti;
}(_react2.default.Component);

SortMulti.PropTypes = {
    open: _propTypes2.default.bool,
    initOpen: _propTypes2.default.bool,
    filterItem: _propTypes2.default.array,
    name: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    initActiveItem: _propTypes2.default.any,
    label: _propTypes2.default.string
};

SortMulti.defaultProps = {
    open: null,
    initOpen: false,
    filterItem: [],
    initActiveItem: null,
    _type: 'sortMulti',
    label: '筛选'
};

SortMulti.contextTypes = {
    updateSortOpen: _propTypes2.default.func,
    collectTabInfo: _propTypes2.default.func,
    getSortInfo: _propTypes2.default.func
};

exports.default = SortMulti;
module.exports = exports['default'];