import React from 'react';
import { Carousel } from 'src/index';

export default class UseCarousel extends React.Component {

	constructor(props) {

	    super(props);
	    this.state = {

	    	slideIndex: 2

	    }
	
	}

	render () { 

		return (

			<div className="test-frame">

				<Carousel
					afterSlide={(newIndex) => { this.setState({ slideIndex: newIndex }) }}
					slideIndex={this.state.slideIndex}>

					<div className="test-page1">1</div>
					<div className="test-page2">2</div>
					<div className="test-page3">3</div>
					<div className="test-page4">4</div>

				</Carousel>

				<ul>

					<li onClick={() => {this.setState({ slideIndex: 0 })}}>1</li>
					<li onClick={() => {this.setState({ slideIndex: 1 })}}>2</li>
					<li onClick={() => {this.setState({ slideIndex: 2 })}}>3</li>
					<li onClick={() => {this.setState({ slideIndex: 3 })}}>4</li>

				</ul>

			</div>

		)

	}

}