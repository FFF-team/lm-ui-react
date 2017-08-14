import React from 'react';
import { Carousel } from 'src/index';

export default class UseCarousel extends React.Component {

	render () {

		return (

			<div className="test-frame aa">

				<Carousel autoplay={true} page={true}>

					<div className="test-page1">1</div>
					<div className="test-page2">2</div>
					<div className="test-page3">3</div>
					<div className="test-page4">4</div>

				</Carousel>

			</div>

		)

	}

}