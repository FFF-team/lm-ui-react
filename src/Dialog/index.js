import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ModelHOC from '../ModelHOC/index.js';

/*
 * props:
 *  showState HOC
 *  dialogType Alert Confirm CustomPrompt CustomForm Custom
 *  headerType Alert Confirm CustomPrompt CustomForm
 *  footerType Alert Confirm Close
 *	headText
 *	contentText
 *	btnLeftText
 *  btnRightText
 *  btnLeftCbFun
 *  btnRightCbFun
 *  btnCommonFun
 *  btnCloseFun
 */
const TypeList = ["Alert", "Confirm", "CustomPrompt", "CustomForm", "Custom"];

const HeaderLit = ["Alert", "Confirm", "CustomPrompt", "CustomForm"];

const FooterList = ["Alert", "Confirm", "Close"];

const propTypes = {
	modelStyle: PropTypes.object,
	showState: PropTypes.bool.isRequired,
	opacity: PropTypes.number,
	dialogStyle: PropTypes.object,
	dialogType: PropTypes.string.isRequired,
	headerType: PropTypes.string,
	headerStyle: PropTypes.object,
    headText: PropTypes.node,
    contentStyle: PropTypes.object,
	contentText: PropTypes.node,
	footerType: PropTypes.string,
	btnLeftText: PropTypes.string,
	btnRightText: PropTypes.string,
	btnCommonFun: PropTypes.func,
	btnLeftCbFun: PropTypes.func,
	btnRightCbFun: PropTypes.func,
	btnCloseFun: PropTypes.func
};

const defaultProps = {
	modelStyle: {},
	dialogStyle: {},
	headerStyle: {},
	contentStyle: {},
	dialogType: "Confirm",
	opacity: 5,
	showState: false,
    headText: '提示',
    headerType: "",
    footerType: "",
	contentText: '提示标题',
	btnLeftText: '取消',
	btnRightText: '确定',
	btnCommonFun: () => {},
	btnLeftCbFun: () => {},
	btnRightCbFun: () => {},
	btnCloseFun: () => {}

};

const Dialog = (props) => {

	const { 
			dialogType,
			showState,
			headerType,
			headerStyle,
			contentStyle,
            headText,
            footerType,
			contentText,
			btnLeftText,
			btnRightText,
			dialogStyle } = props;

	if(TypeList.indexOf(dialogType) < 0) {
		alert("请传入正确dialogType！");
		return;
	}
	if(headerType && HeaderLit.indexOf(headerType) < 0) {
		alert("请传入正确headerType！");
		return;
	}
	if(footerType && FooterList.indexOf(footerType) < 0) {
		alert("请传入正确footerType！");
		return;
	}

	const clickHandler = (dir) => {

		const { btnLeftCbFun,
				btnRightCbFun,
				btnCommonFun,
				btnCloseFun } = props;

		btnCommonFun();

		dir === 'left' ? btnLeftCbFun() : dir === 'right' ? btnRightCbFun() : dir === 'close' ? btnCloseFun() : null;

	}



	let dialogClass = "lm-ui-dialog";
	let headerClass = "dialog-head";
	let footerClass = "dialog-btns";
	let contentClass = "dialog-content";
	let headerTypeStr = "alert";
	let footerTypeStr = "alert";

	switch(dialogType) {
		case "Confirm":
			headerTypeStr = "confirm";
			footerTypeStr = "confirm";
			break;
		case "CustomPrompt":
			headerClass += " dialog-header-prompt";
			footerClass += " dialog-btn-prompt";
			contentClass += " dialog-prompt-content";
			dialogClass += " lm-ui-dialog-full";
			headerTypeStr = "prompt";
			footerTypeStr = "prompt";
			break;
		case "CustomForm":
			headerClass += " dialog-header-form";
			headerTypeStr = "form";
			dialogClass += " lm-ui-dialog-full";
			footerTypeStr = "custom";
			break;
		case "Custom":
			headerType === "Confirm" && (headerTypeStr = "confirm");
			footerType === "Confirm" && (footerTypeStr = "confirm");
			footerType === "Close" && (dialogClass += " lm-ui-dialog-full", 
				footerTypeStr = "prompt",
				footerClass += " dialog-btn-prompt"
			);
			headerType === "CustomPrompt" && (headerClass += " dialog-header-prompt",
				contentClass += " dialog-prompt-content",
				headerTypeStr = "prompt"
			);
			headerType === "CustomForm" && (headerClass += " dialog-header-form",
				headerTypeStr = "form"
			);
			!footerType && (footerTypeStr = "custom");
			!headerType && (headerTypeStr = "custom");
	}

	let Header = headerTypeStr !== "custom" ? (<div className={ headerClass } style={ headerStyle }>
					{ 
						headerTypeStr === "form" || headerTypeStr === "prompt" ?
						(<p className="header-form-title">{ headText }</p>) :
						headText
					}
					{
						headerTypeStr === "confirm" || headerTypeStr === "form" ?
						(<i className="header-close" onClick={clickHandler.bind(null, 'close')}></i>) : null
					}
				 </div>) : null;



	let Footer = footerTypeStr !== "custom" ? (<div className={ footerClass }>

					{ footerTypeStr === "confirm" ? 
						<a  href="javascript:;" 
							className="dialog-btn"
							onClick={clickHandler.bind(null, 'left')}>
							{btnLeftText}
						</a> : null
					}

					<a  href="javascript:;" 
						className="dialog-btn special"
						onClick={clickHandler.bind(null, footerTypeStr === "prompt" ? 'close' : 'right')}>
						{ footerTypeStr === "prompt" ? "" : btnRightText }
					</a>

				 </div>) : null;

	let Content = dialogType ==='Alert' || dialogType==='Confirm' || dialogType === 'CustomPrompt' ?
				  (<div className={ contentClass } style={ contentStyle }> { contentText } </div>) :
				  ( props.children );

	return (

		 <div className={ dialogClass } style={ dialogStyle }>
		 	{ Header }
		 	{ Content }
		 	{ Footer }
		</div>

	)

};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default ModelHOC(Dialog);