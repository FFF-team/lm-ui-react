import React from 'react';
import './index.scss';

const propTypes = {
	size:React.PropTypes.string,//small middle big long
	type:React.PropTypes.string,//primary colorfulHollow  grayHollow
	icon:React.PropTypes.string,
	isDisabled:React.PropTypes.bool,
	onClick:React.PropTypes.func
};
const defaultProps = {
	size:'small',
	type:'primary',
	isDisabled:false,
	onClick:() => {}
};

export default class Button extends React.Component {

	constructor (props) {
		// debugger;
		super (props);
		this.init();

	}

	clickhandle(e){
		this.props.onClick(e.target);
	}

	init(){
		this.classnames = 'lm-ui-btn ';
		switch(this.props.type){
			case 'primary':
				this.classnames += 'lm-ui-btn-primary ';
				break;
			case 'colorfulHollow':
				this.classnames += 'lm-ui-btn-colorful-hollow ';
				break;
			case 'grayHollow':
				this.classnames += 'lm-ui-btn-gray-hollow ';
				break;
		}

		switch(this.props.size){
			case 'small':
				this.classnames += 'lm-ui-btn-small ';
				break;
			case 'middle':
				this.classnames += 'lm-ui-btn-middle ';
				break;
			case 'big':
				this.classnames += 'lm-ui-btn-big ';
				break;
			case 'long':
				this.classnames += 'lm-ui-btn-long ';
				break;
		}
	}

	render () {

		const { children } = this.props;
		// debugger
		return (

			<button  onClick={this.clickhandle.bind(this)} className={this.classnames} disabled={this.props.isDisabled ? true : false}>
				<img src={this.props.icon} className={this.props.icon ? 'lm-ui-btn-icon' : 'hide'} />
				{ children }
			</button>
		)

	}

}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;