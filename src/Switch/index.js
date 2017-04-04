import React from 'react';
import './index.scss';

/*	
 * props:
 *	checked boolen
 *	checkedChildren&&unCheckedChildren temporarily not supported
 */

const propTypes = {

	checked: React.PropTypes.bool.isRequired,
	onChange: React.PropTypes.func.isRequired

};

const defaultProps = {

	checked: false,

};

const contextTypes = {

	groupId: React.PropTypes.oneOfType([

		React.PropTypes.string,
		React.PropTypes.number

	])

};

export default class Switch extends React.Component {

	render () {

		const { checked, onChange, ...arg } = this.props;
		const { groupId } = this.context;

		return (

			<input 
				id={groupId && groupId}
				onChange={onChange}
				checked={checked}
				type="checkbox" 
				className="lm-ui-check-switch"
				{...arg}/>

		)

	}

}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
Switch.contextTypes = contextTypes;





