import React from 'react';
import './index.scss';

const propTypes = {
	size:React.PropTypes.string,//small middle big long
	btnType:React.PropTypes.string,//primary colorfulHollow  grayHollow
	icon:React.PropTypes.string,
	isDisabled:React.PropTypes.bool,
	isRadius:React.PropTypes.bool,
	onClick:React.PropTypes.func
};
const defaultProps = {
	size:'small',
	btnType:'primary',
	isDisabled:false,
	isRadius:true,
	onClick:() => {}
};

export default class Button extends React.Component {

	constructor (props) {
		// debugger;
		super (props);
	}

	clickhandle(e){
		this.props.onClick(e.target);
	}


	render () {

		const { children,size, btnType , isRadius , isDisabled , onClick , icon ,...arg } = this.props;

		let classnames = 'lm-ui-btn ';
		switch(btnType){
			case 'primary':
				classnames += 'lm-ui-btn-primary ';
				break;
			case 'colorfulHollow':
				classnames += 'lm-ui-btn-colorful-hollow ';
				break;
			case 'grayHollow':
				classnames += 'lm-ui-btn-gray-hollow ';
				break;
		}

		if(isRadius){
			classnames += 'lm-ui-btn-radius ';
		}
		

		switch(size){
			case 'small':
				classnames += 'lm-ui-btn-small ';
				break;
			case 'middle':
				classnames += 'lm-ui-btn-middle ';
				break;
			case 'big':
				classnames += 'lm-ui-btn-big ';
				break;
			case 'long':
				classnames += 'lm-ui-btn-long ';
				break;
		}

		return (

			<button  onClick={this.clickhandle.bind(this)} className={classnames} disabled={isDisabled ? true : false} {...arg} >
				<img src={icon} className={icon ? 'lm-ui-btn-icon' : 'hide'} />
				{ children }
			</button>

		)

	}

}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;