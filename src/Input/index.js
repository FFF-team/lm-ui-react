import React from 'react';
import ValidateValHOC from '../ValidateValHOC';
import { getOtherPorps, isEmptyObj } from './tools';
import emitter from '../Events';
import './index.scss';

/*
 * props:
 *	type input || textarea
 *  value 
 *  defaultText
 *  size
 *  disable
 *  preffix
 *  suffix
 *  change
 *  validateRule
 *	  validate
 *    validateFun
 *       
 */

//识别每个input实例的唯一id。
let id = 0;
const propTypes = {

	type: React.PropTypes.string.isRequired,
	value: React.PropTypes.any.isRequired,
	defaultText: React.PropTypes.string,
	size: React.PropTypes.object,
	disable: React.PropTypes.bool,
	preffix: React.PropTypes.node,
	suffix: React.PropTypes.node,
	onChange: React.PropTypes.func.isRequired,
	vaildate: React.PropTypes.object,
	validateData: React.PropTypes.object,
	cleanBtn: React.PropTypes.shape({

		state: React.PropTypes.bool,
		cleanFun: React.PropTypes.func

	}),
	maxLength: React.PropTypes.number

};

const defaultProps = {

	type: null,
	value: null,
	defaultText: 'please input',
	size: {

		cols: 30,
		rows: 20

	},
	disable: false,
	preffix: false,
	suffix: false,
	onChange: () => {},
	validate: {},
	cleanBtn: {},
	maxLength: 200

};

const contextTypes = {

	groupId: React.PropTypes.oneOfType([

		React.PropTypes.string,
		React.PropTypes.number

	])

};

const propsMap = ['type', 
				'value',
				'defaultText',
				'size',
				'disable',
				'preffix',
				'suffix',
				'onChange',
				'validate',
				'validateData',
				'cleanBtn',
				'maxLength'];

class Input extends React.Component {

	constructor (props) {

		super (props);
		this.id = id++;
		this.state = {

			closeIconState: false

		}

		this.clickHandler = this.clickHandler.bind(this);
		this.focusHandler = this.focusHandler.bind(this);
		this.blurHandler = this.blurHandler.bind(this);

	}

	clickHandler (e) {

		const {value, onChange, validate} = this.props;
		let currentValue = e.target.value;

		//执行传入的回调函数
		onChange(e);
		//当错误状态时，用户传删除全部内容时状态验证状态重置
		if (currentValue === '' && validate && validate.state === false) {

			validate.resetHookFun();


		} else if (currentValue !== '') {
			//只要输入的内容不为空那么就，显示close按钮
			this.setState({ closeIconState: true })

		}

	}

	clickCleanBtnHandler (e) {

		const {cleanBtn, value, validate} = this.props;
		//清空value
		cleanBtn.cleanFun();
		//并重置验证状态。
		!isEmptyObj(validate) && validate.resetHookFun();

	}

	focusHandler () {

		const { validate, value } = this.props;

		if (value === '') return;

		if (validate.state === false) {

			validate.showValidateText()

		}

		this.setState({ closeIconState: true })

	}

	blurHandler () {

		/*
		 * 正常执行顺序das
		 * blurHandler -----> clickCleanBtnHandler
		 * 期望clickCleanBtnHandler之后在执行blurHandler，
		 * 就不会影响到close按钮的存在
		 */

		setTimeout(() => {

			const {value, validate} = this.props;

			if (value === '') return;
			
			if (validate.hookFun) {
				//进行类型验证
				let validateResult = validate.hookFun(value);
				//将验证信息发送出去--->Form接收
				emitter.emit('errorMsg', {id: this.id}, validateResult)

			}

			this.setState({ closeIconState: false })

		}, 0)

	}

	getValidateName () {

		const {value, validate} = this.props;
		/*
		 * 情况：
		 *   1.validate === null 说明用户不需要验证 所以一直为lm-ui-input
		 *   2.validate.state === false 说明此时没通过验证，所以为lm-ui-input error
		 *   3.validate.state === true  说明此时通过验证
		 */
		if (isEmptyObj(validate)) {

			return 'lm-ui-input'

		} else if (!validate.state) {

			return 'lm-ui-input error'

		} else {

			return 'lm-ui-input'

		}

	}

	getCloseIcon () {

		const {cleanBtn, validate, value} = this.props;
		
		/*
		 * 情况：
		 *  1.cleanBtn为false 用户不需要显示close  return null
		 *	2.cleanBtn为true&&纯input   <div className="lm-ui-input-close"></div>
		 *  3.cleanBtn为true&&验证
		 *    1）通过验证  <div className="lm-ui-input-close"></div>
		 *    2）没通过验证 <div className="lm-ui-input-close lm-ui-close-error"></div>
		 *  4.
		 */

		if (isEmptyObj(cleanBtn) || !this.state.closeIconState || value === '') {

			return null

		} else if (isEmptyObj(validate) || validate.state) {

			return 'lm-ui-input-close'

		} else if (!validate.state) {

			return 'lm-ui-input-close lm-ui-close-error'

		}

	}

	renderInput () {

		const { value, 
				defaultText, 
				disable, 
				preffix, 
				suffix, 
				onChange,
				validate,
				cleanBtn } = this.props;
		const { groupId } = this.context;
		const validateClass = this.getValidateName();
		const closeIconClass = this.getCloseIcon();
		const otherProps = getOtherPorps(this.props, propsMap);

		return (

			<div className="lm-ui-input-wrap">

				{

					preffix && preffix

				}

				<div className="lm-ui-input-core">

					<input 
						type="text" 
						id={groupId && groupId}
						value={value}
						className={validateClass}
						onChange={this.clickHandler}
						onFocus={this.focusHandler}
						onBlur={this.blurHandler}
						placeholder={defaultText}
						{...otherProps } />
					
					{ 
						closeIconClass && <div 
							onClick={this.clickCleanBtnHandler.bind(this)}
							className={closeIconClass && closeIconClass}></div> 
					
					}

				</div>

				{

					suffix && suffix

				}

			</div>

		)

	}

	renderTextarea () {

		const { value,
				defaultText,
				disable, 
				onChange,
				maxLength } = this.props;
	    const { groupId } = this.context;
		const otherProps = getOtherPorps(this.props, propsMap);

		return (

			<div className="lm-ui-textarea-wrap">

				<textarea
					className="lm-ui-textarea"
					id={groupId && groupId}
					value={value}
					onChange={onChange} 
					rows="4"
					{...otherProps}>
				</textarea>
				
				<div className="lm-ui-textarea-counter">

					<span className={ value.length > maxLength ? 'beyond': ''}>{value.length}</span>
					<span>/</span>
					<span className="limit">{maxLength}</span>	

				</div>

			</div>

		)

	}

	render () {

		const { type } = this.props;

		if (type === 'input') {

			return this.renderInput()

		} else if (type === 'textarea') {

			return this.renderTextarea()

		} else {

			return null 

		}

	}

}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
Input.contextTypes = contextTypes;

export default ValidateValHOC(Input);