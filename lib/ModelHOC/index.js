'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.scss');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * showState: true false
 * timeControl: {time: xx, cbFunc: () => {}}
 * opacity 0-10
 */

var opacitys = ["lm-opcity0", "lm-opcity1", 'lm-opcity2', 'lm-opcity3', 'lm-opcity4', 'lm-opcity5', 'lm-opcity6', 'lm-opcity7', 'lm-opcity8', 'lm-opcity9', 'lm-opcity10'];

var ModelHOC = function ModelHOC(WrappedComponent) {
	return function (_React$Component) {
		_inherits(_class, _React$Component);

		function _class(props) {
			_classCallCheck(this, _class);

			var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

			_this.timer = null;

			_this.data = {
				time: 0,
				timeFun: function timeFun() {
					_this.setState({ showState: false });
				}
			};

			// init state
			_this.state = {
				showState: false
			};

			return _this;
		}

		_class.prototype.componentDidMount = function componentDidMount() {
			this.init(this.props);
		};

		_class.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
			if (this.isPropsDifferent(this.props, nextProps)) {
				this.init(nextProps);
			}
		};

		_class.prototype.componentWillUnmount = function componentWillUnmount() {
			if (this.timer) clearTimeout(this.timer);
		};

		_class.prototype.isPropsDifferent = function isPropsDifferent(prev, next) {
			// todo: 只判断showState情况
			if (prev.showState !== next.showState) {
				return true;
			}

			return false;
		};

		_class.prototype.init = function init(props) {
			var _this2 = this;

			var showState = props.showState,
			    _props$timeControl = props.timeControl,
			    timeControl = _props$timeControl === undefined ? {} : _props$timeControl;
			var _data = this.data,
			    time = _data.time,
			    timeFun = _data.timeFun;


			this.data = {
				time: timeControl.time || time,
				timeFun: timeControl.cbFun || timeFun
			};

			this.setState({

				showState: showState

			}, function () {
				_this2.timeControlShow();
			});
		};

		_class.prototype.timeControlShow = function timeControlShow() {
			var showState = this.state.showState;
			var _data2 = this.data,
			    time = _data2.time,
			    timeFun = _data2.timeFun;


			if (time > 0 && showState === true) {
				this.timer = setTimeout(function () {

					timeFun();
				}, time);
			}
		};

		_class.prototype.render = function render() {
			var _classname;

			var _props = this.props,
			    opacity = _props.opacity,
			    modelStyle = _props.modelStyle;
			var showState = this.state.showState;


			var cn = (0, _classnames2.default)((_classname = {
				'hide': !showState
			}, _classname[opacitys[opacity]] = opacity % 1 === 0, _classname), 'lm-ui-model');

			return _react2.default.createElement(
				'div',
				{ key: 'modelHOC', className: cn, style: modelStyle || {} },
				showState ? _react2.default.createElement(WrappedComponent, this.props) : null
			);
		};

		return _class;
	}(_react2.default.Component);
};

exports.default = ModelHOC;
module.exports = exports['default'];