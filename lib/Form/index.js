'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Events = require('../Events');

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | listenRequireMapFun | 监听内部条件验证选项的实时信息 | fun | 可选 |
 * | style | 增加样式 |  obj | 无 | 可选 |
 *
 * <Form listenRequireMapFun={(mapData) => { console.log(mapData) }} >
 * 	...
 * </Form> 
 */

var propTypes = {};
var defaultProps = {};

var Form = function (_React$Component) {
	_inherits(Form, _React$Component);

	function Form(props) {
		_classCallCheck(this, Form);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.state = {

			requiredMap: []

		};

		return _this;
	}

	Form.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		var listenRequireMapFun = this.props.listenRequireMapFun;
		/* 
   * 单纯的负责监听errorMsg事件，并记录接收到的信息，
   * 并通过listenRequireMapFun接口输出。
   */

		_Events2.default.addListener('errorMsg', function (id, data) {
			//每个input都有唯一的数字id
			var map = [].concat(_this2.state.requiredMap);

			map[id.id] = data;

			_this2.setState({ requiredMap: map });

			listenRequireMapFun(_this2.state.requiredMap);
		});
	};

	Form.prototype.render = function render() {
		var _props = this.props,
		    children = _props.children,
		    listenRequireMapFun = _props.listenRequireMapFun,
		    arg = _objectWithoutProperties(_props, ['children', 'listenRequireMapFun']);

		return _react2.default.createElement(
			'form',
			arg,
			children
		);
	};

	return Form;
}(_react2.default.Component);

exports.default = Form;


Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
module.exports = exports['default'];