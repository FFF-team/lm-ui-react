import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ModelHOC from '../ModelHOC/index.js';

/*
 * props:
 *  showState HOC
 *  dialogType
 *	headText
 *	contentText
 *	btnLeftText
 *  btnRightText
 *  btnLeftCbFun
 *  btnRightCbFun
 *  btnCommonFun
 */

const propTypes = {
	dialogType: PropTypes.string.isRequired,
	showState: PropTypes.bool.isRequired,
	opacity: PropTypes.number,
    headText: PropTypes.node,
	contentText: PropTypes.node,
	btnLeftText: PropTypes.string,
	btnRightText: PropTypes.string,
	btnCommonFun: PropTypes.func,
	btnLeftCbFun: PropTypes.func,
	btnRightCbFun: PropTypes.func

};

const defaultProps = {
	dialogType: "Confirm",
	opacity: 5,
	showState: false,
    headText: '提示',
	contentText: '提示标题',
	btnLeftText: '取消',
	btnRightText: '确定',
	btnCommonFun: () => {},
	btnLeftCbFun: () => {},
	btnRightCbFun: () => {}

};

const Dialog = (props) => {

	const { 
			dialogType,
			opacity,
			showState,
            headText,
			contentText,
			btnLeftText,
			btnRightText } = props;

	const clickHandler = (dir) => {

		const { btnLeftCbFun,
				btnRightCbFun,
				btnCommonFun } = props;

		btnCommonFun();

		dir === 'left' ? btnLeftCbFun() : (dir === 'right' ? btnRightCbFun() : null);

	}

	return (

			<div className="lm-ui-dialog">
				
				<div className="dialog-head">
					{ headText }
				</div>

				

				<div className="dialog-content">
					{ contentText }
				</div>

				<div className="dialog-btns">
					{ dialogType === "Confirm" ? (
					<a 
						href="javascript:;" 
						className="dialog-btn"
						onClick={clickHandler.bind(null, 'left')}>
						{btnLeftText}
					</a>
					) : null }
					
					<a 
						href="javascript:;" 
						className="dialog-btn special"
						onClick={clickHandler.bind(null, 'right')}>
						{btnRightText}
					</a>

				</div>

			</div>

	)

};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default ModelHOC(Dialog);