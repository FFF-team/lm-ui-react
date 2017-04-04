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
		GetCodeBtn } from 'src/index';

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
			checked: true,
			checked1: false,
			selectVal: '',
			radioVal: 1,
			radioVal1: 1,
			checkboxVal: [1,2],
			checkBtn: true

		}

	}

	render () {

		return (

			<div>

				<div className="topBanner">{this.props.location.query.name ? this.props.location.query.name: 'title'}</div>

				<Form listenRequireMapFun={(mapData) => { console.log(mapData) }} >

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
				
						<div className="form-title">表单校验</div>
				
						<FormGroup  groupId={'inputId'}>
						
							<Label>
					
								<span>姓名</span>
						
							</Label>
						
							<Input
								name={'a2'}
								type='input' 
								validateData={{ promptText: '请输入正确的姓名', validateFun: (value) => { return !!value && (value.trim() != '') && /^[\.·\u4e00-\u9fa5]{2,20}$/.test(value); } }}
								value={this.state.test5}
								cleanBtn={{ state: true, cleanFun: () => {this.setState({test5: ''})} }}
								defaultText={'aaa'}
								onChange={(e) => {this.setState({test5: e.target.value})}} />
						
						</FormGroup>
				
					</div>

					<div className="cards">
				
						<div className="form-title">多行文本</div>
				
						<FormGroup>
						
							<Input
								name={'a3'}
								type='textarea'
								maxLength={10}
								rows={2}
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
								value={this.state.selectVal}
								onChange={(e) => {this.setState({selectVal: e.target.value})}}
								optionMap={[{text:1, value:1}, {text:2, value:2}, {text:3, value:4}]} />
						
						</FormGroup>
				
					</div>

					<div className="cards">
				
						<div className="form-title">单选</div>
				
						<RadioGroup
							name={'radioName'}
							selectedValue={this.state.radioVal}
							onChange={(val) => {console.log(`radioName/${val}`); this.setState({ radioVal: val }) }}
							>

							<Radio text={'11'} value={1} />
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

							<Checkbox text={'11'} value={1} />
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
						
								<span>姓名</span>
						
							</Label>
						
							<Input 
								type='input'
								validateData={{ promptText: '请输入正确的姓名', validateFun: (value) => { return !!value && (value.trim() != '') && /^[\.·\u4e00-\u9fa5]{2,20}$/.test(value); } }}
								cleanBtn={{ state: true, cleanFun: () => {this.setState({test8: ''})} }}
								value={this.state.test8}
								defaultText={'aaa'}
								onChange={(e) => {this.setState({test8: e.target.value})}}
								suffix={<GetCodeBtn onClick={() => {}} countNum={60} />} />
						
						</FormGroup>
				
					</div>
				
				</Form>

			</div>

		)

	}

}