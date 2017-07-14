//因为此空间需要引用到react-tween-state https://github.com/chenglou/react-tween-state
//但是react-tween-state为mixins引用形式，但是es6 class不支持mixins形式
//所以决定次控件不采用es6 class语法 而采用react.createCls
import React, { PropTypes } from 'react';
import createReactClass from 'create-react-class';
import tweenState from 'react-tween-state';
import { API } from '../API';
import './index.scss';

const Carousel = createReactClass({

	displayName: 'Carousel',

	mixins: [tweenState.Mixin],

	propTypes: {

		width: PropTypes.oneOfType([          //给定宽度
		    
		    PropTypes.string,
		    PropTypes.number

		]),              
		height: PropTypes.oneOfType([         //给定高度
		    
		    PropTypes.string,
		    PropTypes.number
		    
		]),

		slideIndex: PropTypes.number,         //当前所处焦点
		swipeSpeed: PropTypes.number,         //切换比例
		speed: PropTypes.number,         	  //切换时间
		easing: PropTypes.string,             //线性动画效果

		autoplay: PropTypes.bool,             //自动播放
		autoplayInterval: PropTypes.number,   //自动播放时间间隔

		beforeSlide: PropTypes.func,          //slider event hook fun
		afterSlide: PropTypes.func,           //slider event hook fun

		arrow: PropTypes.bool,                //是否显示左右箭头
		dots: PropTypes.bool,                 //是否显示面板指示点
 
	},

	getDefaultProps () {

		return {

			width: `100%`,
			height: `200px`,
			slideIndex: 0,
			swipeSpeed: 3,
			speed: 300,
			easing: 'easeOutCirc',
			autoplay: false,
			autoplayInterval: 8000,
			beforeSlide: () => {},
			afterSlide: () => {},
			arrow: false,
			dots: false

		}

	},

	getInitialState () {

		return {

			currentSlide: this.props.slideIndex,
			left: 0,
			width: this.props.width,
			height: this.props.height

		}

	},

	componentWillMount () {

		//初始化尺寸
		this.setInitialDimensions();

	},

	componentDidMount () {

		this.setDimensions();
		this.props.autoplay && this.startAutoplay();

	},

	componentWillReceiveProps (nextProps) {
		//如果自动播放，reset timer
		if (nextProps.slideIndex !== this.state.currentSlide) {

			this.props.autoplay && this.resetAutoplay();

			this.setState({

				currentSlide: nextProps.slideIndex

			}, () => {

				this.goToSlide(nextProps.slideIndex)

			})

		}
		
	},

	componentWillUnmount () {

		this.stopAutoplay();

	},
	//******************************
	//初始化尺寸
	setInitialDimensions () {
		
		this.setLeft();

	},
	//更改尺寸
	setDimensions (props) {

		props = props || this.props;
		//主要更改width，height
		let frameWidth = this.refs.frame.getBoundingClientRect().width;

		this.setState({

			width: frameWidth

		}, () => {

			this.setLeft();

		})

	},
	//更新ul left值
	setLeft () {

		this.setState({

			left: this.getTargetLeft()

		}) 

	},

	//******************************
	//Touch Event
	touchObject: {},

	getTouchEvents () {

		let self = this;

		return {

			onTouchStart (e) {
				//单纯纪录开始位置
				self.touchObject = {

					startX: e.touches[0].pageX,
					startY: e.touches[0].pageY

				}

			},
			onTouchMove (e) {
				//确定滑动方向
				let direction = self.swipeDirection(
					self.touchObject.startX,
          			e.touches[0].pageX,
          			self.touchObject.startY,
         			e.touches[0].pageY);
				//如果命中手势方向，则禁止滚动事件，防止前进后退；
				if (direction !== 0) {

					e.preventDefault();

				}
				//滑动距离
				let length = Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - self.touchObject.startX, 2)));
				//start end 位置，距离，方向纪录
				self.touchObject = {

					startX: self.touchObject.startX,
					startY: self.touchObject.startY,
					endX: e.touches[0].pageX,
					endY: e.touches[0].pageY,
					length: length,
					direction: direction

				}

				self.setState({

					left: self.getTargetLeft(length*direction)

				}, () => {

					self.stopAutoplay();

				})

			},
			onTouchEnd (e) { 

				self.handleSwipe(e); 

			},
			onTouchCancel (e) { self.handleSwipe(e); }

		}

	},
	//确定滑动方向
	swipeDirection(x1, x2, y1, y2) {

		var xDist, yDist, r, swipeAngle;

		xDist = x1 - x2;
		yDist = y1 - y2;
		r = Math.atan2(yDist, xDist);
		swipeAngle = Math.round(r * 180 / Math.PI);

		if (swipeAngle < 0) {

		  	swipeAngle = 360 - Math.abs(swipeAngle);

		}
		if ((swipeAngle <= 45) && (swipeAngle >= 0)) {

		  	return 1;

		}
		if ((swipeAngle <= 360) && (swipeAngle >= 315)) {

		  	return 1;

		}

		if ((swipeAngle >= 135) && (swipeAngle <= 225)) {

		  	return -1;

		}
		if (this.props.vertical === true) {

		  	if ((swipeAngle >= 35) && (swipeAngle <= 135)) {

		    	return 1;

		  	} else {

		    	return -1;

		  	}
		}

		return 0;

	},
	//获得目标的实际left值
	getTargetLeft (touchOffset, slide) {
		//根据当前index，宽度，和touchOffset计算出新的left值
		const { width, currentSlide } = this.state;
		let target = slide || currentSlide;
		let left = width*target;
		let swipDistance = touchOffset || 0;

		return (left + swipDistance) * -1;

	},
	//此函数确定最终滚动到那一页
	handleSwipe () {

		//和点击事件从距离上做一个区分
		//每次切换一页
		let switchPageNum = 1;
		let childrenCount = React.Children.count(this.props.children);
		const { length, direction } = this.touchObject;
		const { swipeSpeed } = this.props;
		const { width, currentSlide } = this.state;
		//是否可以切换
		if (length > (width/switchPageNum/swipeSpeed)) {
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
	goToSlide (index) {

		const { beforeSlide } = this.props;
		const { currentSlide } = this.state;

		let childrenCount = React.Children.count(this.props.children);
		//边界情况
		if ((index >= childrenCount) || index < 0) {
			//判断是否需要无限滚动，如果不要此处可以直接return
			if (index >= childrenCount) {

				beforeSlide(currentSlide, 0);
				return this.setState({

					currentSlide: 0

				}, () => {

					this.animateSlide(null, null, this.getTargetLeft(null, index), () => {
		            	this.animateSlide(null, 0.01);
		            	this.props.afterSlide(0);
		            	this.resetAutoplay();
		          	});

				})

			} else {

				let endSlider = childrenCount - 1; 
				beforeSlide(currentSlide, endSlider);
				return this.setState({

					currentSlide: endSlider

				}, () => {

					this.animateSlide(null, null, this.getTargetLeft(null, index), () => {
		            	this.animateSlide(null, 0.01);
		            	this.props.afterSlide(endSlider);
		            	this.resetAutoplay();
		          	});
 
				})

			}
		} else {

			//正常情况
			//触发钩子函数
			beforeSlide(currentSlide, index);
			this.setState({

				currentSlide: index,

			}, () => {

				this.animateSlide();
				this.props.afterSlide(index);
				this.resetAutoplay();

			})

		}
		
	},
	//滚向下一页
	nextSlide () {

		let childrenCount = React.Children.count(this.props.children);
		const { currentSlide } = this.state;
		this.goToSlide(currentSlide + 1);

	},
	//滚向上一页
	previousSlide () {

		const { currentSlide } = this.state;

		this.goToSlide(currentSlide - 1);

	},
	//******************************
	//Amination
	//逐帧动画
	animateSlide(easing, duration, endValue, callback) {

		this.tweenState('left', {
			easing: easing || tweenState.easingTypes[this.props.easing],
			duration: duration || this.props.speed,
			endValue: endValue || this.getTargetLeft(),
			onEnd: callback || null
		});

	},
	//******************************
	//style
	//计算frame样式
	getFrameStyles () {

		const { width, height } = this.state;

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

		}

	},
	//计算ul实际translate3d位置
	getListStyles () {

		const { width, height } = this.state;
		let listWidth = width*React.Children.count(this.props.children) || `100%`;
		let transform = `translate3d(${this.getTweeningValue('left')}px, 0, 0)`;

		return {

			transform,
			WebkitTransform: transform,
			position: 'relative',
			display: 'block',
			height: height,
			width: listWidth,
			cursor: 'pointer',
      		boxSizing: 'border-box',
      		MozBoxSizing: 'border-box'

		}

	},
	//计算每个li的实际position left位置
	getSlideStyles (index, positionValue) {

		const { width, height } = this.state;
		const targetPosition = this.getSlideTargetPosition(index, positionValue);
		return {

			position: 'absolute',
			left: targetPosition,
			display: 'inline-block',
			width: width,
			height: height,
			boxSizing: 'border-box',
      		MozBoxSizing: 'border-box'

		}

	},

	getSlideTargetPosition (index, positionValue) {
		//console.log(`positionValue=${positionValue}`)
		let width = this.state.width === '100%'? 0: this.state.width;
		let targetPosition = width*index;
		let end = width * -1;
		let childrenCount = React.Children.count(this.props.children);
		//进行无限循环
		{

			let slidesBefore = Math.ceil(positionValue / width);

			if (childrenCount - slidesBefore <= index) {

				return width * (childrenCount - index) * -1

			}
			
			let slidesAfter = Math.ceil((Math.abs(positionValue) - Math.abs(end)) / width);
			if (width !== 1) {

				slidesAfter = Math.ceil((Math.abs(positionValue) - (width)) / width);

			}
			if (index <= slidesAfter - 1) {

				return width * (childrenCount + index)

			}

		}

		return targetPosition;

	},
	//******************************
	//autoplay
	startAutoplay () {

		this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval);

	},

	autoplayIterator () {

		this.nextSlide();

	},

	stopAutoplay () {

		this.autoplayID && clearInterval(this.autoplayID);

	},

	resetAutoplay () {

		if (this.props.autoplay) {

			this.stopAutoplay();
			this.startAutoplay();

		}	

	},
	//******************************
	//包装children
	formatChildren (children) {

		let self = this;
		let positionValue = this.getTweeningValue('left');

		return React.Children.map(children, (child, index) => {

			return <li className="carousel-item" style={this.getSlideStyles(index, positionValue)} key={index}>{ child }</li>

		})

	},

	render () {

		const children = React.Children.count(this.props.children) > 1 ? this.formatChildren(this.props.children): this.props.children;

		return (

			<div className="lm-ui-slider-carousel">

				<div 
					className="carousel-frame" 
					ref="frame" 
					style={this.getFrameStyles()}
					{...this.getTouchEvents()}>

					<ul className="carousel-list" style={this.getListStyles()}>

						{ children }

					</ul>

				</div>

			</div>

		)

	}

});

export default Carousel;