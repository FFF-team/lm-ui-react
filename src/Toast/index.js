import React from 'react';
import './index.scss';
import ModelHOC from '../ModelHOC/index.js';

/*
toastType: Hint Loading Success Fail Netless
opacity 0-10
showState true|false
message 
 */

const propTypes = {
	toastType: React.PropTypes.string.isRequired,
	opacity: React.PropTypes.number,
	showState: React.PropTypes.bool.isRequired,
	message: React.PropTypes.string
};

const defaultProps = {
	toastType: "Hint",
	showState: false,
	opacity: 5,
	message: '提示'

};


class Toast extends React.Component {

	constructor (props) {

		super (props);

	}

	render () {

		const { 
				toastType,
				message } = this.props;

		let resultDom = null;

		if(toastType === "Hint") {

			resultDom = <div className="lm-ui-toast toast-text-content"><p>{message}</p></div>;
			
		} else if(toastType === "Loading") {

			resultDom = <div className="lm-ui-toast"><i className='lm-ui-toast-icon icon-loading'></i><p>加载中</p></div>

		} else if(toastType === "Success") {

			resultDom = <div className="lm-ui-toast"><i className='lm-ui-toast-icon icon-success'></i><p>提交成功</p></div>

		} else if(toastType === "Fail") {

			resultDom = <div className="lm-ui-toast"><i className='lm-ui-toast-icon icon-fail'></i><p>加载中</p></div>

		} else if(toastType === "Netless") {

			resultDom = <div className="lm-ui-toast"><i className='lm-ui-toast-icon icon-network'></i><p>加载中</p></div>

		}


		return ( resultDom )

	}

}

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default ModelHOC(Toast);