'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectableListHOC = require('../SelectableListHOC');

var _SelectableListHOC2 = _interopRequireDefault(_SelectableListHOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortGroup = function (_React$Component) {
    _inherits(SortGroup, _React$Component);

    function SortGroup(props) {
        _classCallCheck(this, SortGroup);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    SortGroup.prototype.render = function render() {
        var _props = this.props,
            value = _props.value,
            onSelectedChange = _props.onSelectedChange,
            children = _props.children,
            activeClassName = _props.activeClassName,
            other = _objectWithoutProperties(_props, ['value', 'onSelectedChange', 'children', 'activeClassName']);

        return _react2.default.createElement(
            'div',
            other,
            children
        );
    };

    return SortGroup;
}(_react2.default.Component);

SortGroup.PropTypes = {
    value: _react2.default.PropTypes.string
};

SortGroup.defaultProps = {};

exports.default = (0, _SelectableListHOC2.default)({
    selectedStyle: {
        color: '#ff552e'
    }
})(SortGroup);
module.exports = exports['default'];