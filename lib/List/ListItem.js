'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../Icon/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by khongyan on 2017/3/31.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function getStyles() {

    var styles = {
        icons: {
            // height: 20,
            // width: 20,
            // display: 'block',
            // marginRight: 8,
        },
        leftIcon: {},
        rightArrow: {
            // width: 8,
            // height: 8,
            // marginLeft: 10
        },
        rightIcon: {
            marginLeft: 4
        }

    };

    return styles;
}

var ListItem = function (_React$Component) {
    _inherits(ListItem, _React$Component);

    function ListItem(props) {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    ListItem.prototype.pushElement = function pushElement(children, element, baseStyles, additionalProps) {
        if (element) {
            var styles = Object.assign({}, baseStyles, element.props.style);
            children.push(_react2.default.cloneElement(element, _extends({
                key: children.length,
                style: styles
            }, additionalProps)));
        }
    };

    ListItem.prototype.createTextElement = function createTextElement(styles, data, key, className) {
        var cn = className;
        if (_react2.default.isValidElement(data)) {

            var style = Object.assign({}, styles, data.props.style);
            cn = (0, _classnames2.default)(className, data.props.className);
            return _react2.default.cloneElement(data, {
                key: key,
                style: style,
                className: cn
            });
        }

        return _react2.default.createElement(
            'div',
            { key: key, className: cn },
            data
        );
    };

    ListItem.prototype.render = function render() {
        var _props = this.props,
            _onClick = _props.onClick,
            value = _props.value,
            primaryText = _props.primaryText,
            secondaryText = _props.secondaryText,
            leftIcon = _props.leftIcon,
            rightArrow = _props.rightArrow,
            rightIcon = _props.rightIcon,
            className = _props.className,
            children = _props.children,
            other = _objectWithoutProperties(_props, ['onClick', 'value', 'primaryText', 'secondaryText', 'leftIcon', 'rightArrow', 'rightIcon', 'className', 'children']);

        var styles = getStyles();
        var cn = (0, _classnames2.default)('lm-ui-list-item', className);

        if (children) return _react2.default.createElement(
            'div',
            _extends({}, other, { onClick: function onClick(e) {
                    return _onClick(value ? { value: value } : e);
                }, className: cn }),
            this.createTextElement({}, children, 'children', 'lm-ui-list-item-children')
        );

        var contentChildren = [];

        if (leftIcon) {
            var additionalProps = {
                color: leftIcon.props.color,
                className: (0, _classnames2.default)('lm-ui-list-icon', leftIcon.props.className)
            };
            this.pushElement(contentChildren, leftIcon, Object.assign({}, styles.icons, styles.leftIcon), additionalProps);
        }

        if (primaryText) {
            var primaryTextElement = this.createTextElement({}, primaryText, 'primaryText', 'lm-ui-list-item-bd');
            contentChildren.push(primaryTextElement);
        }

        if (secondaryText) {
            var secondaryTextElement = this.createTextElement({}, secondaryText, 'secondaryText', 'lm-ui-list-item-ft');
            contentChildren.push(secondaryTextElement);
        }

        if (rightIcon) {
            this.pushElement(contentChildren, rightIcon, Object.assign({}, styles.rightIcon), {});
        }

        if (rightArrow) {
            // 暂时不能配置颜色大小等
            var _additionalProps = {
                className: 'lm-ui-icon lm-icon-link'
            };
            this.pushElement(contentChildren, _react2.default.createElement('i', null), Object.assign({}, styles.rightArrow), _additionalProps);
        }

        return _react2.default.createElement(
            'div',
            _extends({}, other, { onClick: function onClick(e) {
                    return _onClick(value ? { value: value } : e);
                }, className: cn }),
            contentChildren
        );
    };

    return ListItem;
}(_react2.default.Component);

ListItem.propTypes = {
    primaryText: _propTypes2.default.node,
    secondaryText: _propTypes2.default.node,
    onClick: _propTypes2.default.func,
    className: _propTypes2.default.string,
    value: _propTypes2.default.string,
    children: _propTypes2.default.node,
    leftIcon: _propTypes2.default.element,
    rightArrow: _propTypes2.default.bool
};

ListItem.defaultProps = {
    primaryText: '',
    secondaryText: '',
    onClick: function onClick() {},
    className: '',
    children: null,
    leftIcon: null,
    rightArrow: false
};

exports.default = ListItem;
module.exports = exports['default'];