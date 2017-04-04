import React from 'react';
import './index.scss';

/*	
 * props:
 *	checked boolen
 *	checkedChildren&&unCheckedChildren temporarily not supported
 */

const propTypes = {

	optionMap: React.PropTypes.array.isRequired,
	onChange: React.PropTypes.func.isRequired,
	selectedValue: React.PropTypes.oneOfType([

    	React.PropTypes.string,
    	React.PropTypes.number

  	]) 

};

const defaultProps = {

	optionMap: [],
	onChange: () => {}

};

const contextTypes = {

	groupId: React.PropTypes.oneOfType([

		React.PropTypes.string,
		React.PropTypes.number

	])

};

export default class Select extends React.Component {

	render () {

		const { optionMap, onChange, value, ...arg } = this.props;
		const { groupId } = this.context;

		return (

			<div className="lm-ui-select-wrap">

				<select 
					className='lm-ui-select'
					id={groupId && groupId}
					value={value}
					onChange={onChange}
					{...arg}>
					
					<option value={''} disabled>请选择</option>

					{
				
						optionMap.map((item, index) => {
				
							return <option 
								key={index}
								value={item.value}>{item.text}</option>
				
						})
				
					}
				
				</select>
				
				<i className="lm-ui-icon-arrow-down"></i>

			</div>

		)

	}

}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
Select.contextTypes = contextTypes;