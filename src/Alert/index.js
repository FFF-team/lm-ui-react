import React from 'react';
import './index.scss';
import ModelHOC from '../ModelHOC/index.js';

/*
 * props:
 *  showState HOC
 *	headText
 *	contentText
 *	btnLeftText
 *  btnRightText
 *  btnLeftCbFun
 *  btnRightCbFun
 *  btnCommonFun
 */

const propTypes = {

	showState: React.PropTypes.bool,
	headText: React.PropTypes.string,
	contentText: React.PropTypes.string,
	btnLeftText: React.PropTypes.string,
	btnRightText: React.PropTypes.string,
	btnCommonFun: React.PropTypes.func,
	btnLeftCbFun: React.PropTypes.func,
	btnRightCbFun: React.PropTypes.func

};

const defaultProps = {

	showState: false,
	headText: '提示',
	contentText: '提示内容',
	btnLeftText: '取消',
	btnRightText: '确定',
	btnCommonFun: () => {},
	btnLeftCbFun: () => {},
	btnRightCbFun: () => {}

};

class Alert extends React.Component {

	clickHandler (dir) {

		const { btnLeftCbFun,
				btnRightCbFun,
				btnCommonFun } = this.props;

		btnCommonFun();

		dir === 'left' ? btnLeftCbFun(): btnRightCbFun();

	}

	render () {
		
		const { showState,
				headText,
				contentText,
				btnLeftText,
				btnRightText } = this.props;

		return (

			<div className="lm-ui-alert">

				<div className="alert-head">{headText}</div>

				<div className="alert-content">{contentText}</div>

				<div className="alert-btns">

					<a 
						href="javascript:;" 
						className="alert-btn"
						onClick={this.clickHandler.bind(this, 'left')}>
						{btnLeftText}
					</a>

					<a 
						href="javascript:;" 
						className="alert-btn special"
						onClick={this.clickHandler.bind(this, 'right')}>
						{btnRightText}
					</a>

				</div>

			</div>

		)

	}

}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default ModelHOC(Alert);