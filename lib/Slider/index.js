'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.scss');

var _API = require('../API');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {};

var defaultProps = {};

var Slider = function (_React$Component) {
	_inherits(Slider, _React$Component);

	function Slider(props) {
		_classCallCheck(this, Slider);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.touchObj = {};
		_this.state = {};

		return _this;
	}

	Slider.prototype.componentDidMount = function componentDidMount() {

		var ulDom = this.refs.sliderXUl;
		var touchHandlerCenter = this.touchHandlerCenter();

		ulDom.addEventListener('touchstart', touchHandlerCenter.touchStartHandler);
		ulDom.addEventListener('touchmove', touchHandlerCenter.touchMoveHandler);
		ulDom.addEventListener('touchend', touchHandlerCenter.touchEndHandler);
	};

	Slider.prototype.componentWillUnMount = function componentWillUnMount() {

		ulDom.removeEventListener('touchstart', touchHandlerCenter.touchStartHandler);
		ulDom.removeEventListener('touchmove', touchHandlerCenter.touchMoveHandler);
		ulDom.removeEventListener('touchend', touchHandlerCenter.touchEndHandler);
	};

	Slider.prototype.touchHandlerCenter = function touchHandlerCenter() {

		var self = this;

		return {
			touchStartHandler: function touchStartHandler(e) {

				self.touchObj = {

					startX: e.touches[0].pageX,
					startY: e.touches[0].pageY

				};
			},
			touchMoveHandler: function touchMoveHandler(e) {

				var direction = self.swipeDirection(self.touchObj.startX, e.touches[0].pageX, self.touchObj.startY, e.touches[0].pageY);
				//拦截纵向滚动
				if (direction !== 1) return;
				//计算横向方向
				var diff = e.touches[0].pageX - self.touchObj.startX;

				//最外层宽度,以及左边滚动位置
				var sliderDom = self.refs.sliderX;
				var sliderDomLeft = sliderDom.scrollLeft;

				var sliderDomWidth = (0, _API.getDomSize)(sliderDom).width;
				//UI宽度
				var ulDom = self.refs.sliderXUl;
				var ulDomWidth = (0, _API.getDomSize)(ulDom).width;

				if (sliderDomLeft === 0 && diff > 0) {
					//左边界
					self.bindBodyEvent();
				} else if (ulDomWidth - sliderDomWidth - sliderDomLeft === 0 && diff < 0) {
					//右边界
					self.bindBodyEvent();
				}
			},
			touchEndHandler: function touchEndHandler(e) {

				self.unBindBodyEvent();
			}
		};
	};

	//确定滑动方向 1-横向 2-纵向


	Slider.prototype.swipeDirection = function swipeDirection(x1, x2, y1, y2) {

		var xDist = void 0,
		    yDist = void 0,
		    r = void 0,
		    swipeAngle = void 0;

		xDist = x1 - x2;
		yDist = y1 - y2;
		r = Math.atan2(yDist, xDist);
		swipeAngle = Math.round(r * 180 / Math.PI);

		if (swipeAngle < 0) {

			swipeAngle = 360 - Math.abs(swipeAngle);
		}

		if (swipeAngle > 45 && swipeAngle < 135 || swipeAngle > 225 && swipeAngle < 315) {

			return 2;
		}

		return 1;
	};

	Slider.prototype.bindBodyEvent = function bindBodyEvent() {

		document.body.addEventListener('touchmove', this.bodyEventHandler);
	};

	Slider.prototype.unBindBodyEvent = function unBindBodyEvent() {

		document.body.removeEventListener('touchmove', this.bodyEventHandler);
	};

	Slider.prototype.bodyEventHandler = function bodyEventHandler(e) {

		e.preventDefault();
	};

	Slider.prototype.formatChildren = function formatChildren(children) {

		return _react2.default.Children.map(children, function (child, index) {

			return _react2.default.createElement(
				'li',
				{ className: 'slider-x-item-wrapper', key: index },
				child
			);
		});
	};

	Slider.prototype.render = function render() {

		var formatChildren = this.formatChildren(this.props.children);

		return _react2.default.createElement(
			'div',
			{ className: 'lm-ui-slider', ref: 'sliderX' },
			_react2.default.createElement(
				'ul',
				{
					className: 'slider-x-frame',
					ref: 'sliderXUl' },
				formatChildren
			)
		);
	};

	return Slider;
}(_react2.default.Component);

exports.default = Slider;


Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;
module.exports = exports['default'];