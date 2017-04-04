import React from 'react';
import './index.scss';

/*	
 * props:
 *	checked boolen
 *	checkedChildren&&unCheckedChildren temporarily not supported
 */

const propTypes = {

	btnMap: React.PropTypes.array.isRequired,
	selectedValue: React.PropTypes.oneOfType([
    	React.PropTypes.string,
    	React.PropTypes.number,
    	React.PropTypes.bool
  	]).isRequired,
  	onChange: React.PropTypes.func.isRequired

};

const defaultProps = {

	btnMap: [],
	onChange: () => {}

};

export default class CheckBtn extends React.Component {

	render () {

		const { btnMap, selectedValue, onChange, ...arg } = this.props;

		return (

			<div className="lm-ui-check-btn-wrap">

				{

					btnMap.map((item, index) => {

						return <div className="lm-ui-check-btn-cont" key={index}>

							<input 
								type="radio" 
								className="lm-ui-check-btn" 
								value={item.value}
								checked={selectedValue === item.value}
								onChange={onChange.bind(null, item.value)} />
							<span className="lm-ui-check-btn-appearance">{item.text}</span>

						</div>

					})

				}

			</div>

		)

	}

}

CheckBtn.propTypes = propTypes;
CheckBtn.defaultProps = defaultProps;