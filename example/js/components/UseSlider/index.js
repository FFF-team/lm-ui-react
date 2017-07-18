import React from 'react';
import { Slider } from 'src/index';

export default class UseSlider extends React.Component {

	render () { 

		return (

			<div className="test-frame">

				<Slider>

					<div style={{width: 200, height: 150, backgroundColor: '#cccccc'}}></div>
					<div style={{width: 200, height: 150, backgroundColor: 'pink'}}></div>
					<div style={{width: 200, height: 150, backgroundColor: '#8a2be2'}}></div>
					<div style={{width: 200, height: 150, backgroundColor: '#FF9912'}}></div>

				</Slider>

			</div>

		)

	}

}