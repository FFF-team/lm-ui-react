'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //因为此空间需要引用到react-tween-state https://github.com/chenglou/react-tween-state
//但是react-tween-state为mixins引用形式，但是es6 class不支持mixins形式
//所以决定次控件不采用es6 class语法 而采用react.createCls


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _reactTweenState = require('react-tween-state');

var _reactTweenState2 = _interopRequireDefault(_reactTweenState);

var _decorate = require('./decorate');

var _decorate2 = _interopRequireDefault(_decorate);

var _API = require('../API');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Carousel = (0, _createReactClass2.default)({

	displayName: 'Carousel',

	mixins: [_reactTweenState2.default.Mixin],

	propTypes: {

		width: _react.PropTypes.oneOfType([//给定宽度

		_react.PropTypes.string, _react.PropTypes.number]),
		height: _react.PropTypes.oneOfType([//给定高度

		_react.PropTypes.string, _react.PropTypes.number]),

		slideIndex: _react.PropTypes.number, //当前所处焦点
		swipeSpeed: _react.PropTypes.number, //切换比例
		speed: _react.PropTypes.number, //切换时间
		easing: _react.PropTypes.string, //线性动画效果

		autoplay: _react.PropTypes.bool, //自动播放
		autoplayInterval: _react.PropTypes.number, //自动播放时间间隔

		beforeSlide: _react.PropTypes.func, //slider event hook fun
		afterSlide: _react.PropTypes.func, //slider event hook fun

		arrow: _react.PropTypes.bool, //是否显示左右箭头
		dots: _react.PropTypes.bool },

	getDefaultProps: function getDefaultProps() {

		return {

			width: '100%',
			height: '200px',
			slideIndex: 0,
			swipeSpeed: 3,
			speed: 300,
			easing: 'easeOutCirc',
			autoplay: false,
			autoplayInterval: 8000,
			beforeSlide: function beforeSlide() {},
			afterSlide: function afterSlide() {},
			arrow: false,
			dots: true

		};
	},
	getInitialState: function getInitialState() {

		return {

			currentSlide: this.props.slideIndex,
			left: 0,
			width: this.props.width,
			height: this.props.height

		};
	},
	componentWillMount: function componentWillMount() {

		//初始化尺寸
		this.setInitialDimensions();
	},
	componentDidMount: function componentDidMount() {

		this.setDimensions();
		this.props.autoplay && this.startAutoplay();
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		var _this = this;

		//如果自动播放，reset timer
		if (nextProps.slideIndex !== this.state.currentSlide) {

			this.props.autoplay && this.resetAutoplay();

			this.setState({

				currentSlide: nextProps.slideIndex

			}, function () {

				_this.goToSlide(nextProps.slideIndex);
			});
		}
	},
	componentWillUnmount: function componentWillUnmount() {

		this.stopAutoplay();
	},

	//******************************
	//初始化尺寸
	setInitialDimensions: function setInitialDimensions() {

		this.setLeft();
	},

	//更改尺寸
	setDimensions: function setDimensions(props) {
		var _this2 = this;

		props = props || this.props;
		//主要更改width，height
		var frameWidth = this.refs.frame.getBoundingClientRect().width;

		this.setState({

			width: frameWidth

		}, function () {

			_this2.setLeft();
		});
	},

	//更新ul left值
	setLeft: function setLeft() {

		this.setState({

			left: this.getTargetLeft()

		});
	},


	//******************************
	//Touch Event
	touchObject: {},

	getTouchEvents: function getTouchEvents() {

		var self = this;

		return {
			onTouchStart: function onTouchStart(e) {
				//单纯纪录开始位置
				self.touchObject = {

					startX: e.touches[0].pageX,
					startY: e.touches[0].pageY

				};
			},
			onTouchMove: function onTouchMove(e) {
				//确定滑动方向
				var direction = self.swipeDirection(self.touchObject.startX, e.touches[0].pageX, self.touchObject.startY, e.touches[0].pageY);
				//如果命中手势方向，则禁止滚动事件，防止前进后退；
				if (direction !== 0) {

					e.preventDefault();
				}
				//滑动距离
				var length = Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - self.touchObject.startX, 2)));
				//start end 位置，距离，方向纪录
				self.touchObject = {

					startX: self.touchObject.startX,
					startY: self.touchObject.startY,
					endX: e.touches[0].pageX,
					endY: e.touches[0].pageY,
					length: length,
					direction: direction

				};

				self.setState({

					left: self.getTargetLeft(length * direction)

				}, function () {

					self.stopAutoplay();
				});
			},
			onTouchEnd: function onTouchEnd(e) {

				self.handleSwipe(e);
			},
			onTouchCancel: function onTouchCancel(e) {
				self.handleSwipe(e);
			}
		};
	},

	//确定滑动方向
	swipeDirection: function swipeDirection(x1, x2, y1, y2) {

		var xDist, yDist, r, swipeAngle;

		xDist = x1 - x2;
		yDist = y1 - y2;
		r = Math.atan2(yDist, xDist);
		swipeAngle = Math.round(r * 180 / Math.PI);

		if (swipeAngle < 0) {

			swipeAngle = 360 - Math.abs(swipeAngle);
		}
		if (swipeAngle <= 45 && swipeAngle >= 0) {

			return 1;
		}
		if (swipeAngle <= 360 && swipeAngle >= 315) {

			return 1;
		}

		if (swipeAngle >= 135 && swipeAngle <= 225) {

			return -1;
		}
		if (this.props.vertical === true) {

			if (swipeAngle >= 35 && swipeAngle <= 135) {

				return 1;
			} else {

				return -1;
			}
		}

		return 0;
	},

	//获得目标的实际left值
	getTargetLeft: function getTargetLeft(touchOffset, slide) {
		//根据当前index，宽度，和touchOffset计算出新的left值
		var _state = this.state,
		    width = _state.width,
		    currentSlide = _state.currentSlide;

		var target = slide || currentSlide;
		var left = width * target;
		var swipDistance = touchOffset || 0;

		return (left + swipDistance) * -1;
	},

	//此函数确定最终滚动到那一页
	handleSwipe: function handleSwipe() {

		//和点击事件从距离上做一个区分
		//每次切换一页
		var switchPageNum = 1;
		var childrenCount = _react2.default.Children.count(this.props.children);
		var _touchObject = this.touchObject,
		    length = _touchObject.length,
		    direction = _touchObject.direction;
		var swipeSpeed = this.props.swipeSpeed;
		var _state2 = this.state,
		    width = _state2.width,
		    currentSlide = _state2.currentSlide;
		//是否可以切换

		if (length > width / switchPageNum / swipeSpeed) {
			//切换到下一页
			if (direction === 1) {

				this.nextSlide();
			} else if (direction === -1) {

				this.previousSlide();
			}
		} else {
			//复位当前页位置
			this.goToSlide(currentSlide);
		}
	},

	//******************************
	//action method
	//滚向特定的页码
	goToSlide: function goToSlide(index) {
		var _this3 = this;

		var beforeSlide = this.props.beforeSlide;
		var currentSlide = this.state.currentSlide;


		var childrenCount = _react2.default.Children.count(this.props.children);
		//边界情况
		if (index >= childrenCount || index < 0) {
			//判断是否需要无限滚动，如果不要此处可以直接return
			if (index >= childrenCount) {

				beforeSlide(currentSlide, 0);
				return this.setState({

					currentSlide: 0

				}, function () {

					_this3.animateSlide(null, null, _this3.getTargetLeft(null, index), function () {
						_this3.animateSlide(null, 0.01);
						_this3.props.afterSlide(0);
						_this3.resetAutoplay();
					});
				});
			} else {

				var endSlider = childrenCount - 1;
				beforeSlide(currentSlide, endSlider);
				return this.setState({

					currentSlide: endSlider

				}, function () {

					_this3.animateSlide(null, null, _this3.getTargetLeft(null, index), function () {
						_this3.animateSlide(null, 0.01);
						_this3.props.afterSlide(endSlider);
						_this3.resetAutoplay();
					});
				});
			}
		} else {

			//正常情况
			//触发钩子函数
			beforeSlide(currentSlide, index);
			this.setState({

				currentSlide: index

			}, function () {

				_this3.animateSlide();
				_this3.props.afterSlide(index);
				_this3.resetAutoplay();
			});
		}
	},

	//滚向下一页
	nextSlide: function nextSlide() {

		var childrenCount = _react2.default.Children.count(this.props.children);
		var currentSlide = this.state.currentSlide;

		this.goToSlide(currentSlide + 1);
	},

	//滚向上一页
	previousSlide: function previousSlide() {
		var currentSlide = this.state.currentSlide;


		this.goToSlide(currentSlide - 1);
	},

	//******************************
	//Amination
	//逐帧动画
	animateSlide: function animateSlide(easing, duration, endValue, callback) {

		this.tweenState('left', {
			easing: easing || _reactTweenState2.default.easingTypes[this.props.easing],
			duration: duration || this.props.speed,
			endValue: endValue || this.getTargetLeft(),
			onEnd: callback || null
		});
	},

	//******************************
	//style
	//计算frame样式
	getFrameStyles: function getFrameStyles() {
		var _state3 = this.state,
		    width = _state3.width,
		    height = _state3.height;


		return {

			position: 'relative',
			display: 'block',
			width: width,
			height: height,
			overflow: 'hidden',
			transform: 'translate3d(0, 0, 0)',
			WebkitTransform: 'translate3d(0, 0, 0)',
			msTransform: 'translate(0, 0)',
			boxSizing: 'border-box',
			MozBoxSizing: 'border-box'

		};
	},

	//计算ul实际translate3d位置
	getListStyles: function getListStyles() {
		var _state4 = this.state,
		    width = _state4.width,
		    height = _state4.height;

		var listWidth = width * _react2.default.Children.count(this.props.children) || '100%';
		var transform = 'translate3d(' + this.getTweeningValue('left') + 'px, 0, 0)';

		return {

			transform: transform,
			WebkitTransform: transform,
			position: 'relative',
			display: 'block',
			height: height,
			width: listWidth,
			cursor: 'pointer',
			boxSizing: 'border-box',
			MozBoxSizing: 'border-box'

		};
	},

	//计算每个li的实际position left位置
	getSlideStyles: function getSlideStyles(index, positionValue) {
		var _state5 = this.state,
		    width = _state5.width,
		    height = _state5.height;

		var targetPosition = this.getSlideTargetPosition(index, positionValue);
		return {

			position: 'absolute',
			left: targetPosition,
			display: 'inline-block',
			width: width,
			height: height,
			boxSizing: 'border-box',
			MozBoxSizing: 'border-box'

		};
	},
	getSlideTargetPosition: function getSlideTargetPosition(index, positionValue) {
		//console.log(`positionValue=${positionValue}`)
		var width = this.state.width === '100%' ? 0 : this.state.width;
		var targetPosition = width * index;
		var end = width * -1;
		var childrenCount = _react2.default.Children.count(this.props.children);
		//进行无限循环
		{

			var slidesBefore = Math.ceil(positionValue / width);

			if (childrenCount - slidesBefore <= index) {

				return width * (childrenCount - index) * -1;
			}

			var slidesAfter = Math.ceil((Math.abs(positionValue) - Math.abs(end)) / width);
			if (width !== 1) {

				slidesAfter = Math.ceil((Math.abs(positionValue) - width) / width);
			}
			if (index <= slidesAfter - 1) {

				return width * (childrenCount + index);
			}
		}

		return targetPosition;
	},

	//******************************
	//autoplay
	startAutoplay: function startAutoplay() {

		this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval);
	},
	autoplayIterator: function autoplayIterator() {

		this.nextSlide();
	},
	stopAutoplay: function stopAutoplay() {

		this.autoplayID && clearInterval(this.autoplayID);
	},
	resetAutoplay: function resetAutoplay() {

		if (this.props.autoplay) {

			this.stopAutoplay();
			this.startAutoplay();
		}
	},
	switchCurrentSlide: function switchCurrentSlide(nextSlide) {
		var _this4 = this;

		if (nextSlide === this.state.currentSlide) return;

		this.setState({

			currentSlide: nextSlide

		}, function () {

			_this4.goToSlide(nextSlide);
		});
	},

	//******************************
	//包装children
	formatChildren: function formatChildren(children) {
		var _this5 = this;

		var self = this;
		var positionValue = this.getTweeningValue('left');

		return _react2.default.Children.map(children, function (child, index) {

			return _react2.default.createElement(
				'li',
				{ className: 'carousel-item', style: _this5.getSlideStyles(index, positionValue), key: index },
				child
			);
		});
	},
	render: function render() {

		var children = _react2.default.Children.count(this.props.children) > 1 ? this.formatChildren(this.props.children) : this.props.children;

		return _react2.default.createElement(
			'div',
			{ className: 'lm-ui-slider-carousel' },
			_react2.default.createElement(
				'div',
				_extends({
					className: 'carousel-frame',
					ref: 'frame',
					style: this.getFrameStyles()
				}, this.getTouchEvents()),
				_react2.default.createElement(
					'ul',
					{ className: 'carousel-list', style: this.getListStyles() },
					children
				),
				this.props.dots && _react2.default.createElement(_decorate2.default, {
					currentSlide: this.state.currentSlide,
					dotCount: _react2.default.Children.count(this.props.children),
					clickHandler: this.switchCurrentSlide })
			)
		);
	}
});

exports.default = Carousel;
module.exports = exports['default'];