'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by khongyan on 2017/3/31.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ListItem = function (_React$Component) {
    _inherits(ListItem, _React$Component);

    function ListItem(props) {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    ListItem.prototype.render = function render() {
        var _props = this.props,
            onSelectAction = _props.onSelectAction,
            value = _props.value,
            primaryText = _props.primaryText,
            secondaryText = _props.secondaryText,
            className = _props.className,
            other = _objectWithoutProperties(_props, ['onSelectAction', 'value', 'primaryText', 'secondaryText', 'className']);

        var cn = (0, _classnames2.default)('lm-ui-cell', className);

        return _react2.default.createElement(
            'div',
            _extends({}, other, { onClick: onSelectAction, className: cn }),
            _react2.default.createElement(
                'div',
                { className: 'lm-ui-cell-bd' },
                primaryText
            ),
            _react2.default.createElement(
                'div',
                { className: 'lm-ui-cell-ft' },
                secondaryText
            )
        );
    };

    return ListItem;
}(_react2.default.Component);

ListItem.propTypes = {
    primaryText: _react2.default.PropTypes.string,
    secondaryText: _react2.default.PropTypes.string,
    onSelectAction: _react2.default.PropTypes.func,
    className: _react2.default.PropTypes.string,
    value: _react2.default.PropTypes.string
};

ListItem.defaultProps = {
    primaryText: 'list-item',
    secondaryText: '',
    onSelectAction: function onSelectAction() {},
    className: ''
};

exports.default = ListItem;
module.exports = exports['default'];