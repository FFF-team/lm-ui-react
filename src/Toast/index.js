import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ModelHOC from '../ModelHOC/index.js';

/*
 * toastType: Hint Loading Success Fail Netless
 * opacity 0-10
 * showState true|false
 * message 
 */

const propTypes = {

	toastType: PropTypes.string.isRequired,
	opacity: PropTypes.number,
	showState: PropTypes.bool.isRequired,
	message: PropTypes.string
};

const defaultProps = {

	toastType: "Hint",
	showState: false,
	opacity: 5

};

const Toast = (props) => {

		const { 
				toastType,
				message } = props;

		let resultDom = null;

		if(toastType === "Hint") {

			resultDom = <div className="lm-ui-toast toast-text-content"><p>{message || `提示`}</p></div>;
			
		} else if(toastType === "Loading") {

			resultDom = <div className="lm-ui-toast"><i className='lm-ui-toast-icon icon-loading'></i><p>{message || `加载中`}</p></div>

		} else if(toastType === "Success") {

			resultDom = <div className="lm-ui-toast"><i className='lm-ui-toast-icon icon-success'></i><p>{message || `提交成功`}</p></div>

		} else if(toastType === "Fail") {

			resultDom = <div className="lm-ui-toast"><i className='lm-ui-toast-icon icon-fail'></i><p>{message || `加载失败`}</p></div>

		} else if(toastType === "Netless") {

			resultDom = <div className="lm-ui-toast"><i className='lm-ui-toast-icon icon-network'></i><p>{message || `加载中`}</p></div>

		}

		return ( resultDom )	

};

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default ModelHOC(Toast);