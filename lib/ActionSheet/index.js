'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../ModelHOC/index.js');

var _index2 = _interopRequireDefault(_index);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OperateList = function OperateList(_ref) {
    var showState = _ref.showState,
        label = _ref.label,
        tip = _ref.tip,
        className = _ref.className,
        list = _ref.list,
        bottom = _ref.bottom,
        onActionChange = _ref.onActionChange;


    var handleClick = function handleClick(item) {

        // todo: 加promise支持
        onActionChange(item);
    };

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
                            return handleClick(item);
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
                            return handleClick(item);
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

OperateList.propsType = {
    showState: _propTypes2.default.bool,
    label: _propTypes2.default.string || _propTypes2.default.node,
    tip: _propTypes2.default.string || _propTypes2.default.node,
    onActionChange: _propTypes2.default.func,
    list: _propTypes2.default.array,
    bottom: _propTypes2.default.array
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