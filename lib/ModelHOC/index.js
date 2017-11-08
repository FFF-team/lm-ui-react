'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * showState: true false
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
			_this.state = {};

			return _this;
		}

		_class.prototype.componentDidMount = function componentDidMount() {
			//MXR modified at 2017-04-09
			var timeControl = this.props.timeControl;
			if (timeControl) {

				this.updataTimeInfo(timeControl);
			}
		};

		_class.prototype.updataTimeInfo = function updataTimeInfo(info) {

			this.setState({

				time: info.time,
				timeFun: info.cbFun

			});
		};

		_class.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
			//只有设置了timeControl
			if (nextProps.showState && this.props.timeControl) {

				this.timeControlShow();
			}
		};

		_class.prototype.timeControlShow = function timeControlShow() {
			//MXR modified at 2017-04-09
			var _state = this.state,
			    time = _state.time,
			    timeFun = _state.timeFun;

			this.setState({ showState: true });
			this.timer = setTimeout(function () {

				timeFun();
			}, time);
		};

		_class.prototype.componentWillUnmount = function componentWillUnmount() {
			//MXR modified at 2017-04-09
			//如果存在timer，干掉。
			if (this.timer) clearTimeout(this.timer);
		};

		_class.prototype.render = function render() {
			var _props = this.props,
			    showState = _props.showState,
			    opacity = _props.opacity,
			    modelStyle = _props.modelStyle;
			//MXR modified at 2017-04-09
			// let { showState } = this.state;

			var HOCclass = showState ? "lm-ui-model" : "lm-ui-model hide";

			HOCclass = opacity % 1 === 0 ? HOCclass + " " + opacitys[opacity] : HOCclass;

			return _react2.default.createElement(
				'div',
				{ key: 'modelHOC', className: HOCclass, style: modelStyle || {} },
				showState ? _react2.default.createElement(WrappedComponent, this.props) : null
			);
		};

		return _class;
	}(_react2.default.Component);
};

exports.default = ModelHOC;
module.exports = exports['default'];