import React from 'react';
import './index.scss';
import { getDomSize } from '../API';

const propTypes = {

};

const defaultProps = {

};

export default class Slider extends React.Component {

	constructor (props) {

		super (props);
		this.touchObj = {};
		this.state = {};

	}

	componentDidMount () {

		let ulDom = this.refs.sliderXUl;
		let touchHandlerCenter = this.touchHandlerCenter();

		ulDom.addEventListener('touchstart', touchHandlerCenter.touchStartHandler)
		ulDom.addEventListener('touchmove', touchHandlerCenter.touchMoveHandler)
		ulDom.addEventListener('touchend', touchHandlerCenter.touchEndHandler)

	}

	touchHandlerCenter () {

		let self = this;

		return {

			touchStartHandler (e) {

				self.touchObj = {

					startX: e.touches[0].pageX

				}

			},
			touchMoveHandler (e) {
				//计算方向
				let diff = e.touches[0].pageX - self.touchObj.startX;
				//最外层宽度,以及左边滚动位置
				let sliderDom = self.refs.sliderX;
				let sliderDomLeft = sliderDom.scrollLeft;
				let sliderDomWidth = getDomSize(sliderDom).width;
				//UI宽度
				let ulDom = self.refs.sliderXUl;
				let ulDomWidth = getDomSize(ulDom).width;

				if (sliderDomLeft === 0 && diff > 0) {
					//左边界
					self.bindBodyEvent();

				} else if (ulDomWidth - sliderDomWidth - sliderDomLeft === 0 && diff < 0) {
					//右边界
					self.bindBodyEvent();

				}

			},
			touchEndHandler (e) {

				self.unBindBodyEvent();

			}

		}

	}

	bindBodyEvent () {

		document.body.addEventListener('touchmove', this.bodyEventHandler)

	}

	unBindBodyEvent () {

		document.body.removeEventListener('touchmove', this.bodyEventHandler)

	}

	bodyEventHandler (e) {

		e.preventDefault();

	}

	formatChildren (children) {

		return React.Children.map(children, (child, index) => {

			return <li className="slider-x-item-wrapper" key={index}>{ child }</li>

		})

	}

	render () {

		let formatChildren = this.formatChildren(this.props.children);

		return (

			<div className="lm-ui-slider" ref="sliderX">

				<ul 
					className="slider-x-frame" 
					ref="sliderXUl">

					{ formatChildren }

				</ul>

			</div>

		)

	}

}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;