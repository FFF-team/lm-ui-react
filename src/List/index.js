import React from 'react';
import './index.scss';

/*
 * props:
 *	linkId boolen 
 */

const propTypes = {

	label:React.PropTypes.string,
	value:React.PropTypes.string,
	icon:React.PropTypes.string,
	activeNumber:React.PropTypes.number,
	onClick:React.PropTypes.func,
	arrow:React.PropTypes.bool

};
const defaultProps = {
	onClick:() => {},
	arrow:false
};

export default class List extends React.Component {

	constructor (props) {
		
		super (props);

	}
	
	clickhandle(e){
		// debugger;
		this.props.onClick(e.target);
	}

	render () {

		const { label,value,arrow,icon,activeNumber } = this.props;

		return (
			<div className='lm-ui-list' onClick={this.clickhandle.bind(this)}>
				<div className='lm-ui-list-label'>
					<img className={icon ? 'lm-ui-list-icon' : 'hide'} src={icon} />
					{label}
				</div>
				<div className='lm-ui-list-value'>
					{value}
					<span className={activeNumber ? 'lm-ui-list-number':'hide'}>{activeNumber}</span>
				</div>
				<div className={arrow ? 'lm-ui-list-link' : 'lm-ui-list-unlink'}></div>
			</div>
		)

	}

}

List.propTypes = propTypes;
List.defaultProps = defaultProps;