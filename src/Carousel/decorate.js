import React, { PropTypes } from 'react';
import createReactClass from 'create-react-class';
import './index.scss';

export const CarouselDot = createReactClass({

	render () {

		const { dotCount, clickHandler, currentSlide } = this.props;
		let emptyArray = new Array(dotCount).toString().split(',');
		
		return (

			<ul className="lm-ui-carousel-dot-list">

				{

					emptyArray.map((item, index) => {

						return <li 
								className={currentSlide === index ? 'carousel-dot-item active': 'carousel-dot-item'}
								onClick={() => { clickHandler(index) }} 
								key={`carouselDot${index}`}></li>

					})

				}

			</ul>

		)

	}

});

export const CarouselPage = createReactClass({

	render () {

		const { pageTotel, currentSlide } = this.props;
		//let emptyArray = new Array(dotCount).toString().split(',');
		
		return (

			<span className="lm-ui-carousel-page">

				{`${currentSlide + 1}/${pageTotel}`}

			</span>

		)

	}

});