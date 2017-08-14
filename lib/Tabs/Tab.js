'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab(props) {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    Tab.prototype.handleClick = function handleClick(event) {
        event.stopPropagation();
        this.props.onClick && this.props.onClick(this.props.index, this.props.value, this);
    };

    Tab.prototype.render = function render() {
        var _props = this.props,
            index = _props.index,
            selected = _props.selected,
            onClick = _props.onClick,
            onSelectAction = _props.onSelectAction,
            icon = _props.icon,
            label = _props.label,
            value = _props.value,
            className = _props.className,
            children = _props.children,
            other = _objectWithoutProperties(_props, ['index', 'selected', 'onClick', 'onSelectAction', 'icon', 'label', 'value', 'className', 'children']);

        var cn = (0, _classnames2.default)({
            'active': selected === true,
            'active-svg-icon': icon && icon.type.lmuiName === 'SvgIcon' && selected === true
        }, className);

        return _react2.default.createElement(
            'li',
            _extends({ className: cn,
                onClick: this.handleClick.bind(this)
            }, other),
            _react2.default.isValidElement(icon) && icon,
            _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                    'a',
                    null,
                    label
                )
            )
        );
    };

    return Tab;
}(_react2.default.Component);

Tab.propTypes = {
    label: _propTypes2.default.string,
    icon: _propTypes2.default.node,
    onSelectAction: function onSelectAction() {},
    value: _propTypes2.default.string
};

Tab.defaultProps = {
    label: 'tabName'
};

exports.default = Tab;
module.exports = exports['default'];