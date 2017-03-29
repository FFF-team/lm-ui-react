import React from 'react';
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
	dialogType: React.PropTypes.string.isRequired,
	showState: React.PropTypes.bool.isRequired,
	headText: React.PropTypes.string,
	contentText: React.PropTypes.string,
	btnLeftText: React.PropTypes.string,
	btnRightText: React.PropTypes.string,
	btnCommonFun: React.PropTypes.func,
	btnLeftCbFun: React.PropTypes.func,
	btnRightCbFun: React.PropTypes.func

};

const defaultProps = {
	dialogType: "Confirm",
	showState: false,
	headText: '提示',
	contentText: '提示内容',
	btnLeftText: '取消',
	btnRightText: '确定',
	btnCommonFun: () => {},
	btnLeftCbFun: () => {},
	btnRightCbFun: () => {}

};

class Dialog extends React.Component {

	clickHandler (dir) {

		const { btnLeftCbFun,
				btnRightCbFun,
				btnCommonFun } = this.props;

		btnCommonFun();

		dir === 'left' ? btnLeftCbFun() : (dir === 'right' ? btnRightCbFun() : null);

	}

	render () {

		const { 
				dialogType,
				showState,
				headText,
				contentText,
				btnLeftText,
				btnRightText } = this.props;

		return (

			<div className="lm-ui-dialog">

				{ dialogType === "Confirm" ?
				(<div className="dialog-head head-confirm">
					<span dangerouslySetInnerHTML={{__html: headText}}></span>
					<i className='dialog-icon-close' onClick={this.clickHandler.bind(this)}></i>
				</div>) : 
				(<div className="dialog-head" dangerouslySetInnerHTML={{__html: headText}}>
				</div>)}

				

				<div className="dialog-content" dangerouslySetInnerHTML={{__html: contentText}}></div>

				<div className="dialog-btns">
					{ dialogType === "Confirm" ? (
					<a 
						href="javascript:;" 
						className="dialog-btn"
						onClick={this.clickHandler.bind(this, 'left')}>
						{btnLeftText}
					</a>
					) : null }
					
					<a 
						href="javascript:;" 
						className="dialog-btn special"
						onClick={this.clickHandler.bind(this, 'right')}>
						{btnRightText}
					</a>

				</div>

			</div>

		)

	}

}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default ModelHOC(Dialog);