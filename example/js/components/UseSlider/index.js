import React from 'react';
import { Slider } from 'src/index';

export default class UseSlider extends React.Component {

	render () { 

		return (

			<div className="test-frame">

				<Slider>

					<div style={{width: 200, height: 150, backgroundColor: '#cccccc'}}>1</div>
					<div style={{width: 200, height: 150, backgroundColor: 'pink'}}>2</div>
					<div style={{width: 200, height: 150, backgroundColor: '#8a2be2'}}>3</div>
					<div style={{width: 200, height: 150, backgroundColor: '#FF9912'}}>4</div>

				</Slider>
				
			</div>

		)

	}

}