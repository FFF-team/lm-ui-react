import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.scss';

/*
 * 介绍：
 *  本组件拦截存在props.validateData的组件，
 *  并通过注入属性方式使WrappedComponent无感知的实现验证
 * 拦截props：
 * 	validateData
 * 主要方法：
 * 	hookFun 验证钩子函数
 * 	resetHookFun 重置状态钩子函数
 * 流程：
 *        in    if have     out   isObj
 *  props---> validateData ----> validate
 *        in     havent     out   isNull
 */
 
const ValidateValHOC = (WrappedComponent) => 
	
	class extends React.Component {

		constructor (props) {

			super (props);

			this.state = {

				validate: {},
				validateFun: null,
				resetHookFun: null,
				showValidateText: null,
				promptState: false,
				promptText: '请输入正确格式'

			}

		}

		componentWillMount () {

			const { validateData } = this.props;
			/*
			 * 通过判断有无验证信息(validateData)来判断是否需要用到次组件功能
			 * 如果没有的话不会注入validate属性，对自组件来说无任何影响
			 */

			if (validateData && validateData.validateFun) {

				this.setValidateState(true, validateData.validateFun)

				validateData.promptText && this.setState({promptText: validateData.promptText})

			}

		}

		hookFun (val) {

			let isPass = this.state.validateFun(val);

			if (isPass) {

				this.setValidateState(true)
				return { state: true, msg: '' }

			} else {

				this.setValidateState(false)
				return { state: false, msg: this.state.promptText}
				//并且显示错误提示信息

			}

		}

		resetHookFun () {
			
			this.setValidateState(true)

		}

		showValidateText () {

			this.setState({promptState: true})

			setTimeout(() => {

				this.setState({promptState: false})

			}, 2000)

		}

		setValidateState (state, validateFun) {
			/*
			 * 如果存在validateFun证明是第一次注册验证函数
			 * 如果不存在validateFun证明是通过验证之后改变验证状态
			 */
			let newData = validateFun ? {

				validate: {

					state: state,
					hookFun: this.hookFun.bind(this),
					resetHookFun: this.resetHookFun.bind(this),
					showValidateText: this.showValidateText.bind(this)

				},
				validateFun: validateFun

			}: {

				validate: {

					state: state,
					hookFun: this.hookFun.bind(this),
					resetHookFun: this.resetHookFun.bind(this),
					showValidateText: this.showValidateText.bind(this)

				}

			};

			this.setState(newData);

		}

		render () {

			const newProps = Object.assign({}, this.state.validate);
			const promptText = this.state.promptState ? <div className="lm-ui-validate-text">{this.state.promptText}</div>: null;

			return (

					<div className="lm-ui-validate-wrap">

						<WrappedComponent {...this.props} validate={newProps} />
						{promptText}

					</div>

			)

		}

	}

export default ValidateValHOC
