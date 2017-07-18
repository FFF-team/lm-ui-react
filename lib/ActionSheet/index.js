'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../ModelHOC/index.js');

var _index2 = _interopRequireDefault(_index);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OperateList = function (_React$Component) {
    _inherits(OperateList, _React$Component);

    function OperateList() {
        var _temp, _this, _ret;

        _classCallCheck(this, OperateList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (item) {

            // todo: 加promise支持
            _this.props.onActionChange(item);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    OperateList.prototype.componentWillMount = function componentWillMount() {};

    OperateList.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            showState = _props.showState,
            label = _props.label,
            tip = _props.tip,
            className = _props.className,
            list = _props.list,
            bottom = _props.bottom;


        return _react2.default.createElement(
            'div',
            { className: className ? className + ' lm-ui-action-sheet' : 'lm-ui-action-sheet' },
            _react2.default.createElement(
                'ul',
                { className: 'type-wrap' },
                _react2.default.createElement(
                    'li',
                    { className: 'title g-color-grey' },
                    label
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    tip
                ),
                list.map(function (item, index) {
                    return _react2.default.createElement(
                        'li',
                        { className: 'item', key: index, onClick: function onClick() {
                                return _this2.handleClick(item);
                            } },
                        _react2.default.createElement(
                            'a',
                            null,
                            item.label
                        )
                    );
                })
            ),
            _react2.default.createElement(
                'ul',
                { className: 'type-wrap' },
                bottom.map(function (item, index) {
                    return _react2.default.createElement(
                        'li',
                        { key: index, onClick: function onClick() {
                                return _this2.handleClick(item);
                            }, className: 'item cancel-item' },
                        _react2.default.createElement(
                            'a',
                            null,
                            item.label
                        )
                    );
                })
            )
        );
    };

    return OperateList;
}(_react2.default.Component);

OperateList.propsType = {
    showState: _react2.default.PropTypes.bool,
    label: _react2.default.PropTypes.string || _react2.default.PropTypes.node,
    tip: _react2.default.PropTypes.string || _react2.default.PropTypes.node,
    onActionChange: _react2.default.PropTypes.func,
    list: _react2.default.PropTypes.array,
    bottom: _react2.default.PropTypes.array
};

OperateList.defaultProps = {
    showState: false,
    label: '操作的说明或提示',
    tip: '',
    onActionChange: function onActionChange() {},
    list: [],
    bottom: []
};

exports.default = (0, _index2.default)(OperateList);
module.exports = exports['default'];