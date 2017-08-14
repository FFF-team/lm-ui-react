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

const Button = (props) => {

	const clickhandle = (e) => {

		props.onClick(e.target);

	};

	const { children,size, btnType , isRadius , isDisabled , onClick , icon ,...arg } = props;

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

	if(isDisabled){
		classnames += 'lm-ui-btn-disable ';
	}

	switch(size){
		case 'small':
			classnames += 'lm-ui-btn-small ';
			break;
		case 'big':
			classnames += 'lm-ui-btn-big ';
			break;
		case 'long':
			classnames += 'lm-ui-btn-long ';
			break;
	}


	return (

		<a href="javascript:;" 
			onClick={isDisabled ? undefined : clickhandle}
			className={classnames} 
			{...arg} >
			<img src={icon} className={icon ? 'lm-ui-btn-icon' : 'hide'} />
			{ props.children }
		</a>

	)

}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;