import React from 'react';
import { Form,
		FormGroup,
		Label,
		Input,
		Switch,
		Select,
		RadioGroup,
		Radio,
		CheckboxGroup,
		Checkbox,
		CheckBtn,
		GetCodeBtn,
        Button} from 'src/index';
import { Toast } from 'src/index';
import TopBanner from './TopBanner';

export default class UseAlert extends React.Component {

	constructor (props) {

		super (props);
		this.state = {

			test1: '',
			test2: '',
			test3: '',
			test4: '',
			test5: '',
			test6: '',
			test7: '',
			test8: '',
			test9: '',
			test10: '',
			checked: true,
			checked1: false,
			selectVal: '',
			selectVal1: '',
			radioVal: 1,
			radioVal1: 1,
			checkboxVal: [1,2],
			checkBtn: true,
			btnIsDisabled: true,
			mapData: [],
			showState: false,
			promptText: ''

		}

	}

	formHandler () {
		//保证 blur中的数据先更新---->在触发一下逻辑，setTimeout是成本最低的实现方式。
		setTimeout(() => {

			console.log('btn hitted!!!')
			let { mapData } = this.state;
			let canSubmit = true;
			let promptText = null;
			for (let obj of mapData) {

				if (obj && !obj.state) {

					promptText = obj.msg;
					canSubmit = false;
					break;

				}

			}

			if (!canSubmit) {

				this.setState({showState: true, promptText: promptText})
				return

			}

		}, 0)

	}

	render () {
		//需要必填的选项，如果不满足条件那么提交按钮disable
		let {test5, test9, test10} = this.state;
		let btnIsDisabled = (test5 && test9 && test10) ? false: true;
		const checkboxPreffix = <div className="checkbox-preffix">

			<div className="test-img"></div>
			<div className="test-text-wrap">

				<p>选项可添加前缀</p>
				<p>还可自定义图片+文字组合</p>

			</div>

		</div>

		return (

			<div>

				<TopBanner name={this.props.location.query.name} />
				
				<Form listenRequireMapFun={(mapData) => { this.setState({mapData: mapData}) }} >
					
					<p className="lm-ui-top-tips">这是顶部的提示</p>

					<div className="cards">
				
						<div className="form-title">普通输入框</div>
				
						<FormGroup>
						
							<Label>
						
								<span>姓名</span>
						
							</Label>
						
							<Input 
								type='input'
								value={this.state.test1}
								defaultText={'aaa'}
								onChange={(e) => {this.setState({test1: e.target.value})}} />
						
						</FormGroup>
				
						<FormGroup>
						
							<Label>
						
								<span>姓名</span>
						
							</Label>
						
							<Input 
								type='input'
								value={this.state.test2}
								defaultText={'aaa'}
								cleanBtn={{ state: true, cleanFun: () => {this.setState({test2: ''})} }}
								onChange={(e) => {this.setState({test2: e.target.value})}} />
						
						</FormGroup>
				
					</div>
				
					<div className="cards">
				
						<div className="form-title">图文标签输入框</div>
				
						<FormGroup>
						
							<Label>
						
								<div className="lm-ui-img-label">

									<img 
										src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAgVBMVEX/////WhH/UAL/vJ//ej7/UgX/onn/9/P/6+L/z7r/cDD/w6f/kmL/n3X/dDX/VAj/+/j/u53/uZr/lmf/bSv/WA3/TgD/9O//8er/0r7/x67/sI7/pHv/nXH/kV//jlv/SwD/7OT/593/5Nj/49b/2sn/tJP/m27/ilb/XRX/TACE4AIkAAAAjklEQVQY063PSRKCMBRF0ZdAjIJASEcngn2z/wUaB1aZRAdWeYZ38v7HV+0ysINzJpZ5KCs4OnpZBQY2QFaI6Ak1EQiVW+QsjVQFckoiduMyo6HZ5apYhG6jm8SnyYRwhLL1//I+1TrrvCwN0IxKqePbJRP6OecCT/zl5J5vrndDPMaWB0D0MvHUSYvfPADTZwmeqDckyQAAAABJRU5ErkJggg==" 
										className="cell-imark"/>

									<span>姓名</span>

								</div>
						
							</Label>
						
							<Input 
								type='input'
								value={this.state.test3}
								defaultText={'aaa'}
								onChange={(e) => {this.setState({test3: e.target.value})}} />
						
						</FormGroup>
				
						<FormGroup>
						
							<Label>
						
								<div className="lm-ui-img-label">

									<img 
										src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAgVBMVEX/////WhH/UAL/vJ//ej7/UgX/onn/9/P/6+L/z7r/cDD/w6f/kmL/n3X/dDX/VAj/+/j/u53/uZr/lmf/bSv/WA3/TgD/9O//8er/0r7/x67/sI7/pHv/nXH/kV//jlv/SwD/7OT/593/5Nj/49b/2sn/tJP/m27/ilb/XRX/TACE4AIkAAAAjklEQVQY063PSRKCMBRF0ZdAjIJASEcngn2z/wUaB1aZRAdWeYZ38v7HV+0ysINzJpZ5KCs4OnpZBQY2QFaI6Ak1EQiVW+QsjVQFckoiduMyo6HZ5apYhG6jm8SnyYRwhLL1//I+1TrrvCwN0IxKqePbJRP6OecCT/zl5J5vrndDPMaWB0D0MvHUSYvfPADTZwmeqDckyQAAAABJRU5ErkJggg==" 
										className="cell-imark"/>

									<span>姓名</span>

								</div>
						
							</Label>
						
							<Input 
								name={'a1'}
								type='input'
								value={this.state.test4}
								cleanBtn={{ state: true, cleanFun: () => {this.setState({test4: ''})} }}
								defaultText={'aaabb'}
								onChange={(e) => {this.setState({test4: e.target.value})}} />
						
						</FormGroup>
				
					</div>					

					<div className="cards">
				
						<div className="form-title">特殊输入框</div>
				
						<FormGroup>
						
							<Label>
						
								<span>姓名</span>
						
							</Label>
						
							<Input 
								type='input'
								value={this.state.test7}
								defaultText={'aaa'}
								onChange={(e) => {this.setState({test7: e.target.value})}} />
						
						</FormGroup>
				
						<FormGroup>
						
							<Label>
						
								<span>电话</span>
						
							</Label>
						
							<Input 
								type='tel'
								cleanBtn={{ state: true, cleanFun: () => {this.setState({test8: ''})} }}
								value={this.state.test8}
								defaultText={'aaa'}
								onChange={(e) => {this.setState({test8: e.target.value})}}
								suffix={<GetCodeBtn onClick={() => {}} countNum={60} />} />
						
						</FormGroup>
				
					</div>

					<div className="cards">
				
						<div className="form-title">多行文本</div>
				
						<FormGroup>
						
							<Input
								name={'a3'}
								type='textarea'
								maxLength={10}
								rows={4}
								defaultText={'aaa'}
								value={this.state.test6}
								onChange={(e) => {this.setState({test6: e.target.value})}} />
						
						</FormGroup>
				
					</div>

					<div className="cards">
				
						<div className="form-title">开关按钮</div>
				
						<FormGroup 
							groupId={'switchId'}
							layout={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

							<Label>
					
								<span>姓名</span>
						
							</Label>
						
							<Switch
								name={'a'}
								checked={this.state.checked} 
								onChange={() => { this.setState({checked: !this.state.checked}) }} />
						
						</FormGroup>

						<FormGroup 
							groupId={'switchId1'}
							layout={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

							<Label>
					
								<span>姓名</span>
						
							</Label>
						
							<Switch
								checked={this.state.checked1} 
								onChange={() => { this.setState({checked1: !this.state.checked1}) }} />
						
						</FormGroup>
				
					</div>

					<div className="cards">
				
						<div className="form-title">选择</div>
				
						<FormGroup
							layout={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

							<Label>
					
								<span>姓名</span>
						
							</Label>
						
							<Select
								selectedValue={this.state.selectVal}
								onChange={(e) => {this.setState({selectVal: e.target.value})}}
								optionMap={[{text:1, value:1}, {text:2, value:2}, {text:3, value:3}]} />
						
						</FormGroup>

						<FormGroup
							layout={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

							<Label>
					
								<span>姓名</span>
						
							</Label>
						
							<Select
								selectedValue={this.state.selectVal1}
								onChange={(e) => {this.setState({selectVal1: e.target.value})}}
								optionMap={[{text:1, value:1}, {text:2, value:2}, {text:3, value:3}]} />
						
						</FormGroup>
				
					</div>

					<div className="cards">
				
						<div className="form-title">单选</div>
				
						<RadioGroup
							name={'radioName'}
							selectedValue={this.state.radioVal}
							onChange={(val) => {console.log(`radioName/${val}`); this.setState({ radioVal: val }) }}
							>

							<Radio text={''} value={1} preffix={checkboxPreffix} />
							<Radio text={'22'} value={2} />
							<Radio text={'33'} value={3} />

						</RadioGroup>
				
					</div>

					<div className="cards">
				
						<div className="form-title">多选</div>
				
						<CheckboxGroup
							name={'checkboxName'}
							selectedValue={this.state.checkboxVal}
							onChange={(val) => {console.log(`checkbox/${val}`); this.setState({ checkboxVal: val })}}
							>

							<Checkbox text={''} value={1} preffix={checkboxPreffix} />
							<Checkbox text={'22'} value={2} />
							<Checkbox text={'33'} value={3} />

						</CheckboxGroup>
				
					</div>

					<div className="cards">
				
						<div className="form-title">选择按钮</div>
				
						<FormGroup
							layout={{ direction: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>

							<Label>
					
								<span>姓名</span>
						
							</Label>
						
							<CheckBtn
								btnMap={[{ text: '有', value: true }, { text: '无', value: false }]}
								selectedValue={this.state.checkBtn}
								onChange={(val) => {this.setState({ checkBtn: val })}} />
						
						</FormGroup>
				
					</div>

					<div className="cards">
				
						<div className="form-title">表单校验</div>
				
						<FormGroup  groupId={'inputId0'}>
						
							<Label>
					
								<span>姓名</span>
						
							</Label>
						
							<Input
								name={'a2'}
								type='input' 
								validateData={{ promptText: '请输入正确的姓名1', validateFun: (value) => { return !!value && (value.trim() != '') && /^[\.·\u4e00-\u9fa5]{2,20}$/.test(value); } }}
								value={this.state.test5}
								cleanBtn={{ state: true, cleanFun: () => {this.setState({test5: ''})} }}
								defaultText={'aaa'}
								onChange={(e) => {this.setState({test5: e.target.value})}} />
						
						</FormGroup>

						<FormGroup  groupId={'inputId1'}>
						
							<Label>
					
								<span>姓名</span>
						
							</Label>
						
							<Input
								name={'a22'}
								type='input' 
								validateData={{ promptText: '请输入正确的姓名2', validateFun: (value) => { return !!value && (value.trim() != '') && /^[\.·\u4e00-\u9fa5]{2,20}$/.test(value); } }}
								value={this.state.test9}
								cleanBtn={{ state: true, cleanFun: () => {this.setState({test9: ''})} }}
								defaultText={'aaa'}
								onChange={(e) => {this.setState({test9: e.target.value})}} />
						
						</FormGroup>

						<FormGroup  groupId={'inputId2'}>
						
							<Label>
					
								<span>姓名</span>
						
							</Label>
						
							<Input
								name={'a222'}
								type='input' 
								validateData={{ promptText: '请输入正确的姓名3', validateFun: (value) => { return !!value && (value.trim() != '') && /^[\.·\u4e00-\u9fa5]{2,20}$/.test(value); } }}
								value={this.state.test10}
								cleanBtn={{ state: true, cleanFun: () => {this.setState({test10: ''})} }}
								defaultText={'aaa'}
								onChange={(e) => {this.setState({test10: e.target.value})}} />
						
						</FormGroup>
				
					</div>

					<div className="cards" style={{padding:"14px"}}>

						<Button
							size='long'
							type='primary'
							isDisabled={btnIsDisabled}
							onClick={this.formHandler.bind(this)}
						>开关按钮</Button>

					</div>
				
				</Form>

				<Toast
					showState={this.state.showState}
					toastType={'Hint'}
					opacity={0}
					timeControl={{ time: 2000, cbFun: () => {this.setState({showState: false})}}}
					message={this.state.promptText} />

			</div>

		)

	}

}