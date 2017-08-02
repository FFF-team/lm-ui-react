import React from 'react';
import ValidateValHOC from '../ValidateValHOC';
import { isEmptyObj } from './tools';
import emitter from '../Events';
import './index.scss';

/*
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | type | input的类型 | 'input' or 'textarea' | 'input' | 必要 |
 * | value | 输入的值 | all | 无 | 必要 |
 * | defaultText | 默认placeholder | all | '' | 必要 |
 * | onChange | 值更改时触发次函数 | fun | ()=>{} | 必要 |
 * | maxLength | textarea中最大长度，超出文字标红 | number | 200 | 可选 |
 * | validateData | 验证信息 | obj{ promptText: string, validateFun: fun }| 无 | 可选 |
 * | cleanBtn | 右侧清除按钮则配置 | obj{ state: true, cleanFun: fun } | 无 | 可选 |
 * | preffix | 输入框前缀 | node | 无 | 可选 |
 * | suffix | 输入框后缀 | node | 无 | 可选 |
 * | disabled | 是否不可操作 | bool | false | 可选 |
 * | style | 增加样式 |  obj | 无 | 可选 |
 *     
 *  <Input
 * 	type='input' 
 * 	validateData={{ promptText: '请输入正确的姓名', validateFun: (value) => { return !!value && (value.trim() != '') && /^[\.·\u4e00-\u9fa5]{2,20}$/.test(value); } }}
 * 	value={this.state.test5}
 * 	cleanBtn={{ state: true, cleanFun: () => {this.setState({test5: ''})} }}
 * 	defaultText={'aaa'}
 *  suffix={<GetCodeBtn onClick={() => {}} countNum={60} />} />
 * 	onChange={(e) => {this.setState({test5: e.target.value})}} />  
 */

//识别每个input实例的唯一id。
let id = 0;
const propTypes = {

	type: React.PropTypes.string.isRequired,
	value: React.PropTypes.any.isRequired,
	defaultText: React.PropTypes.string,
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

	type: 'input',
	value: null,
	defaultText: '',
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
			//因为是异步执行，需要判断实例是否被移除
			if ((this.props.type === 'input' && !this.inputDom) || (this.props.type === 'textarea' && !this.textareaDom)) {

				return

			}

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

		const { type,
				value, 
				defaultText, 
				preffix, 
				suffix, 
				onChange,
				validate,
				validateData,
				cleanBtn,
				maxLength,
				...arg } = this.props;
		const { groupId } = this.context;
		const validateClass = this.getValidateName();
		const closeIconClass = this.getCloseIcon();
		
		return (

			<div className="lm-ui-input-wrap" ref={(dom) => { this.inputDom = dom; }}>

				{

					preffix && preffix

				}

				<div className="lm-ui-input-core">

					<input 
						type={type}
						id={groupId && groupId}
						value={value}
						className={validateClass}
						onChange={this.clickHandler}
						onFocus={this.focusHandler}
						onBlur={this.blurHandler}
						placeholder={defaultText}
						maxLength={maxLength}
						{...arg } />
					
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

		const { type,
				value, 
				defaultText, 
				preffix, 
				suffix, 
				onChange,
				validate,
				validateData,
				cleanBtn,
				maxLength,
				...arg } = this.props;
	    const { groupId } = this.context;

		return (

			<div className="lm-ui-textarea-wrap" ref={(dom) => { this.textareaDom = dom; }}>

				<textarea
					className="lm-ui-textarea"
					id={groupId && groupId}
					value={value}
					onChange={onChange} 
					rows="4"
					maxLength={maxLength}
					placeholder={defaultText}
					{...arg}>
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

		if (type === 'textarea') {

			return this.renderTextarea()

		} else {

			return this.renderInput()

		}
 
	}

}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
Input.contextTypes = contextTypes;

export default ValidateValHOC(Input);