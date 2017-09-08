import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'src/index.js';
import TopBanner from './TopBanner';
import { ActionSheet, Input, FormGroup } from 'src'


const Custom = (props) => {
	return (
		<div className='custom-my-dialog'>
			<dl>
				<dt>还款方式：等本等息</dt>
				<dd>1、主动还款：请及时登录查看还款计划，在每期还款日之前点击还款</dd>
				<dd>2、银行代扣：还款日当天17:00从绑定的银行卡中自动扣款</dd>
				<dt>提前还款</dt>
				<dd>一次性提前还款：暂不支持</dd>
				<dt>逾期政策</dt>
				<dd>罚息：逾期费率0.1%/天，暂时不计复息</dd>
			</dl>
			<p>如有疑问，可致电58金融客服：<a href="tel:10105800">10105800</a></p>
		</div>
	)
};

const customDefaultProps = {
	closeFun: PropTypes.func
};

const customPropTypes = {
	closeFun: () => {}
};

Custom.defaultProps = customDefaultProps;
Custom.propTypes = customPropTypes;

const CustomFooterConfirm = (props) => {

	const { 
			defaultText,
			value,
			cleanFun,
            onChange,
            promptText,
            validateFun,
            smsSecond,
            onSmsClick } = props;

	return (

		<div className="costom-dialog">
			<div className="costom-top-text">
				<p>短信验证码</p>
				<p>招商银行储蓄卡(1234)</p>
			</div>
		 	<FormGroup>
			 	<Input 
					type='input'
					value={ value }
					validateData={{ promptText: promptText, validateFun: (value) => { return validateFun(value) } }}
					cleanBtn={{ state: true, cleanFun: () => { cleanFun() } }}
					onChange={ onChange }
					defaultText={ defaultText } />
				<a href="javascript:;" 
					className={ smsSecond === 0 ? "lm-ui-get-code-btn" : 'lm-ui-get-code-btn-disable'} 
					onClick= {smsSecond === 0 ? (e) => { onSmsClick } : null } >
					{smsSecond === 0 ? '获取验证码' : smsSecond + 's后重发'}
				</a>
			</FormGroup>
			<p className="costom-bottom-text">1212121212121212</p>
		</div>

	)

};

const propTypes = {
	defaultText: PropTypes.string,
	value: PropTypes.any.isRequired,
	cleanFun: PropTypes.func,
    onChange: PropTypes.func,
	promptText: PropTypes.string,
	validateFun: PropTypes.func,
	smsSecond: PropTypes.number,
	onSmsClick: PropTypes.func
};

const defaultProps = {
	defaultText: '请输入短信验证码',
	value: null,
	cleanFun: () => {},
    onChange: () => {},
	promptText: '请输入正确的验证码',
	validateFun: () => {},
	smsSecond: 0,
	onSmsClick: () => {}

};

CustomFooterConfirm.defaultProps = defaultProps;
CustomFooterConfirm.propTypes = propTypes;

export default class UserDialog extends React.Component {

	constructor(props) {

	    super(props)

	    this.state = {

	    	dialogState: false,

	    	dialogType: "Alert",
			
			actionState: false,

			smsValue: 1986

	    }
	
	}
	
	data = {
		actionList: [
			{
				label: '确定',
				key: 'ok',
			},
			{
				label: '其他操作',
				key: 'other',
			}
		],
		actionBottom: [{
			label: '取消',
			key: 'cancel'
		}]
	};
    
    handleActionChange = (item) => {
    	console.log(item)
	   this.setState({
		   actionState: false
	   })
    }

	render () {

		return (

			<div style={{ backgroundColor: '#fff' }}>

				<div>

					<TopBanner name={this.props.location.query.name} />
					
					<ul>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{
									this.setState({dialogState: !this.state.dialogState, dialogType: "Alert", dialogStyle: null, styleObject: null })
								}}>
								alert测试
							</a>

						</li>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({dialogState: !this.state.dialogState, dialogType: "Confirm", dialogStyle: null, styleObject: null })}}>
								confirm测试
							</a>

						</li>
						
						<li>
							
							<a href="javascript:;"
							   className="list-item"
							   onClick={()=>{this.setState({actionState: !this.state.actionState, dialogStyle: null, styleObject: null, dialogStyle: null, styleObject: null})}}>
								功能操作
							</a>
							
						</li>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({dialogState: !this.state.dialogState, dialogType: "Custom", footerType: 'Confirm', headerType: null, type: null, dialogStyle: null, styleObject: null })}}>
								Custom + footerType 测试
							</a>

						</li>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({dialogState: !this.state.dialogState, dialogType: "CustomPrompt", dialogStyle: null, styleObject: null })}}>
								CustomPrompt
							</a>

						</li>
						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({
									dialogState: !this.state.dialogState, 
									dialogType: "Custom", 
									footerType: 'Close', 
									headerType: 'CustomPrompt', 
									dialogStyle: { background: 'rgba(255, 255, 255, 0.95)', position: "fixed", top: 0, bottom: 0, width: "inherit", maxWidth: 'inherit' },
									styleObject: { backgroundColor: 'transparent' },
									type: 'prompt' 
								})}}>
								Custom
							</a>

						</li>
						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({dialogState: !this.state.dialogState, dialogType: "Custom", headerType: "CustomForm", footerType: "Confirm", type: null, dialogStyle: null, styleObject: null })}}>
								Custom + AlertHeader + FooterConfirm
							</a>

						</li>
						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({dialogState: !this.state.dialogState, dialogType: "CustomForm", dialogStyle: null, styleObject: null })}}>
								CustomForm
							</a>

						</li>

					</ul>

				</div>

				<Dialog 
					className = "121212"
					dialogType={this.state.dialogType}
					showState={this.state.dialogState}
					headText={'提示标题'}
					modelStyle={ this.state.styleObject }
					dialogStyle={ this.state.dialogStyle }
					contentText={ this.state.contentText }
					footerType={this.state.footerType}
					headerType={this.state.headerType}
					btnCommonFun={() => {this.setState({dialogState: false})}}
					btnLeftCbFun={() => {console.log('left fun')}}
					btnRightCbFun={() => {console.log('right fun')}}>
					{
						this.state.type === 'prompt' ?
						<Custom /> :
						<CustomFooterConfirm 
							defaultText={ '121212' }
							value={ this.state.smsValue }
							cleanFun={ (e) => {
								this.setState({ smsValue: '' })
							} }
		            		onChange={ (e) => { 
		            		 this.setState({ smsValue: e.value }) 
		            		} }
		            		promptText={ '12ddddd' }
		            		validateFun={ (value) => { return false; } }
		            		onSmsClick={ (e) => { console.log(121212) } }
		            		smsSecond={ 0 }/>
					}
					
				</Dialog>
				
				<ActionSheet
					showState={ this.state.actionState }
					list={ this.data.actionList }
					bottom={ this.data.actionBottom }
					onActionChange={ this.handleActionChange }
					className="choose-type-modal"
				/>

			</div>

		)

	}

}
