'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CAN_OPEN_TOGGLE_SORT = ['sortList', 'sortMulti'];
var SAVE_OPEN_STATE = ['sortLabel'];

var SortGroup = function (_React$Component) {
    _inherits(SortGroup, _React$Component);

    function SortGroup(props) {
        _classCallCheck(this, SortGroup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.sortInfo = {};

        _this.state = {
            children: _this.props.children
        };
        return _this;
    }

    SortGroup.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.setState({
            children: this.props.children.map(function (child, index) {
                _this2.collectTabInfo(child.props.name, child.props.initActiveItem || null);
                return _react2.default.cloneElement(child, {
                    open: false,
                    key: index
                });
            })
        });
    };

    SortGroup.prototype.collectTabInfo = function collectTabInfo(name, initActiveItem) {
        this.sortInfo[name] = initActiveItem;
    };

    SortGroup.prototype.getChildContext = function getChildContext() {
        var _this3 = this;

        return {
            updateSortOpen: function updateSortOpen(value, state) {

                _this3.updateSortOpen(value, state);
            },
            collectTabInfo: function collectTabInfo(name, info) {

                _this3.sortInfo[name] = info;

                // 通知组件
                _this3.props.onSortInfoUpdate(_this3.sortInfo);

                _this3.forceUpdate();
            },
            getSortInfo: function getSortInfo(name) {
                return _this3.sortInfo[name];
            }
        };
    };

    SortGroup.prototype.updateSortOpen = function updateSortOpen(sortName, state) {
        var children = this.state.children;


        var newChildren = children.map(function (child, index) {
            var _child$props = child.props,
                _type = _child$props._type,
                name = _child$props.name,
                open = _child$props.open;


            if (sortName === name) {
                return _react2.default.cloneElement(child, {
                    open: state,
                    key: index
                });
            }

            return _react2.default.cloneElement(child, {
                open: CAN_OPEN_TOGGLE_SORT.indexOf(_type) > -1 ? false : open,
                key: index
            });
        });

        this.setState({
            children: newChildren
        });
    };

    SortGroup.prototype.render = function render() {
        var _this4 = this;

        var className = this.props.className;
        var children = this.state.children;

        var cn = (0, _classnames2.default)('lm-ui-sort-group', className);

        return _react2.default.createElement(
            'div',
            { className: cn },
            children.map(function (child, index) {

                var canOpen = _this4.sortInfo[child.props.name] && !_this4.sortInfo[child.props.name].isAll;
                var cnActive = (0, _classnames2.default)({
                    'lm-ui-sort-wrap-active': canOpen
                }, child.props.className);

                return _react2.default.cloneElement(child, {
                    key: index,
                    className: cnActive
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

SortGroup.childContextTypes = {
    updateSortOpen: _propTypes2.default.func,
    collectTabInfo: _propTypes2.default.func,
    getSortInfo: _propTypes2.default.func
};

exports.default = SortGroup;
module.exports = exports['default'];