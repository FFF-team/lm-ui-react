import React from 'react';
import './index.scss';

/*
 * props:
 *	linkId boolen 
 */

const propTypes = {

	label:React.PropTypes.string,
	value:React.PropTypes.string,
	url:React.PropTypes.string,
	icon:React.PropTypes.string,
	activeNumber:React.PropTypes.number,
	clickFun:React.PropTypes.func

};
const defaultProps = {};

export default class List extends React.Component {

	constructor (props) {
		// debugger;
		super (props);

	}
	
	goUrl(){
		if(this.props.url){
			location.href = this.props.url;
		}
	}

	render () {

		const { label,value,url,icon,activeNumber } = this.props;

		return (
			<div className='lm-ui-list' onClick={this.goUrl.bind(this)}>
				<div className='lm-ui-list-label'>
					<img className={icon ? 'lm-ui-list-icon' : 'hide'} src={icon} />
					{label}
				</div>
				<div className='lm-ui-list-value'>
					{value}
					<span className={activeNumber ? 'lm-ui-list-number':'hide'}>{activeNumber}</span>
				</div>
				<div className={url ? 'lm-ui-list-link' : 'lm-ui-list-unlink'}></div>
			</div>
		)

	}

}

List.propTypes = propTypes;
List.defaultProps = defaultProps;