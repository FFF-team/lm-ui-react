# lm-ui-react

## 项目描述
* 58金融贷款组ui库

## 应用技术
* react 
* jest && enzyme(单元测试)

## 目录结构
* /src 存放es6编写的源码
* /lib 存放经过babel编译的es5代码
* /example 存放开发用例代码
* /tool 存放文件编译脚本
* /__test__ 存放单元测试代码

## 开始运行
* 安装依赖包
```
npm install
```
* 查看用例
```  
npm run example
```
* 进行单元测试
```  
npm test
```
* 编译生成lib文件
```  
npm run lib
```
* 编译生成lib&&dist文件
```  
npm run build
```
----------
## DOC
---------
### 控件列表
* [Form](#anchor)
* [FormGroup](#FormGroup)
* [Input](#Input)
* [Switch](#Switch)
* [Select](#Select)
* [RadioGroup](#RadioGroup)
* [Radio](#Radio)
* [CheckboxGroup](#CheckboxGroup)
* [Checkbox](#Checkbox)
* [CheckBtn](#CheckBtn)
* [GetCodeBtn](#GetCodeBtn)
******
### Form
* props
1.listenRequireMapFun，如果存在验证信息，此函数可以实时输出各个验证信息的状态以及报错信息。
```
/*
 * listenRequireMapFun监听表内验证信息，并以mapData返回。
*/
<Form listenRequireMapFun={(mapData) => { console.log(mapData) }} >
...
</Form>
```
******
### FormGroup
* props
1.groupId，方案link组内label和表单项。
```
//PropTypes.string
<FormGroup  groupId={'inputId'}>
```
2.layout，组内成员布局
```
//PropTypes.obj，参照flex布局
<FormGroup layout={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
```
******
### Input
* props
1.type，input || textarea
2.value，所输入的值。
3.defaultText，默认placeholder。
4.preffix，前缀。
5.suffix，后缀。
6.onChange，监听事件。
7.validateData，如果需要进行规则验证，那么需要设置次配置项，promptText：提醒文案，validateFun：验证函数。
8.cleanBtn，如果需要右侧清除按钮则需要配置此项，state：是否开启（true||false），cleanFun：点击时的回调函数。
9.maxLength，限制textarea中的最大字数
```
//PropTypes.string.isRequired
```
******
### Switch
* props
1.checked，是否默认选中。
2.disabled，是否不可修改。
3.onChange，change 事件触发的回调函数。
4.name，switch 的 name。
```
<Switch
	disabled={true}
	name={'name'}
	checked={this.state.checked} 
	onChange={() => { this.setState({checked: !this.state.checked}) }} />
```
******
### Select
* props
1.value，指定当前选中的条目。
2.onChange，选中 option时，调用此函数。
3.optionMap，option{text:..., value:...}信息数组，text显示文字，value实际值。
4.disabled，是否不可修改。
```
<Select
    disabled={true}
	value={this.state.selectVal}
	onChange={(e) => {this.setState({selectVal: e.target.value})}}
	optionMap={[{text:1, value:1}, {text:2, value:2}, {text:3, value:4}]} />
```
******
### RadioGroup
* props
1.name
2.selectedValue，被选中的值。
3.onChange，选择时，调用此函数。

### Radio
* props
1.text，选择项显示的文字
2.value，选择项实际的值
```
<RadioGroup
	name={'radioName'}
	selectedValue={this.state.radioVal}
	onChange={(val) => {this.setState({ radioVal: val }) }}
	>
	<Radio text={'11'} value={1} />
	<Radio text={'22'} value={2} />
	<Radio text={'33'} value={3} />
</RadioGroup>
```
******
### CheckboxGroup
* props
1.name
2.selectedValue，被选中的值。
3.onChange，选择时，调用此函数。

### Checkbox
* props
1.text，选择项显示的文字
2.value，选择项实际的值
```
<CheckboxGroup
	name={'checkboxName'}
	selectedValue={this.state.checkboxVal}
	onChange={(val) => {console.log(`checkbox/${val}`); this.setState({ checkboxVal: val })}}>
	<Checkbox text={'11'} value={1} />
	<Checkbox text={'22'} value={2} />
	<Checkbox text={'33'} value={3} />
</CheckboxGroup>
```
******

### CheckBtn
* props
1.selectedValue，被选中的值。
2.onChange，选择时，调用此函数。
3.btnMap，选择按钮的信息[{text:.., value:...},...]，text显示文字，value实际值。
```
<CheckBtn
	btnMap={[{ text: '有', value: true }, { text: '无', value: false }]}
	selectedValue={this.state.checkBtn}
	onChange={(val) => {this.setState({ checkBtn: val })}} />
```

******
### GetCodeBtn(表单中特殊按钮)
* props
1.onClick点击时调用的函数。
2.text按钮显示的文字。
3.countNum倒计时时间。
```
<GetCodeBtn 
      text={ '获取验证码'}
      countNum={60}
      onClick={() => {}} />
```