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
* [Dialog](Dialog)
* [Form](#form)
* [FormGroup](#formgroup)
* [Label](#label)
* [Input](#input)
* [Switch](#switch)
* [Select](#select)
* [RadioGroup](#radiogroup)
* [Radio](#radio)
* [CheckboxGroup](#checkboxgroup)
* [Checkbox](#checkbox)
* [CheckBtn](#checkbtn)
* [GetCodeBtn](#getcodebtn表单中特殊按钮)
* [Button](#button)
* [List](#list表单展示)
* [Icon](#icon)
* [SvgIcon](#svgIcon)
* [Tabs](#tab标签切换)
* [Tab](#tab标签切换)
* [TabsFooter](#tabsfooter标签切换)
* [SortGroup](#sort排序)
* [Sort](#sort排序)
* [NList](#normallist)
* [NListItem](#normallist)
* [SelectableList](#normallist)

******
### Dialog
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| showState | 展示状态 | bool | false | 必要 |
| dialogType | 展示形式 | string | Confirm(或Alert) | 必要 |
| headText | 提示头文字 | string | '提示' | 可选 |
| contentText | 提示内容文字 | string | '提示内容' | 可选 |
| opacity | 背景蒙层透明度 | number | 5 | 可选 |
| btnLeftText | 左按钮文案 | string | '取消' | 可选 |
| btnRightText | 右按钮文案 | string | '确定' | 可选 |
| btnLeftCbFun | 左按钮点击时触发的函数 | fun | ()=>{} | 可选 |
| btnRightCbFun | 右按钮点击时触发的函数 | fun | ()=>{} | 可选 |
| btnCommonFun | 按钮点击触发的共用函数 | fun | ()=>{} | 可选 |

```
<Dialog 
	dialogType={'Confirm'}
	showState={true}
	headText={'test head'}
	contentText={'提示内容提示内容提示内容'} 
	btnCommonFun={() => {this.setState({dialogState: false})}}
	btnLeftCbFun={() => {console.log('left fun')}}
	btnRightCbFun={() => {console.log('right fun')}}/>
```
******
### Toast
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| toastType | toast类型 | string | Hint(Loading Success Fail Netless) | 必要 |
| showState | 展示状态 | bool | false | 必要 |
| opacity | 背景蒙层透明度 | number | 5 | 可选 |
| message | 显示文案 | string | '提示' | 可选 |
| timeControl | 配置展示时间 | obj | 无 | 可选 |

```
<Toast
	showState={this.state.showState}
	toastType={'Hint'}
	opacity={0}
	timeControl={{ time: 2000, cbFun: () => {this.setState({showState: false})}}}
	message={'提示文字'} />
```

******
### Form
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| listenRequireMapFun | 监听内部条件验证选项的实时信息 | fun | 无 | 可选 |
| style | 增加样式 |  obj | 无 | 可选 |

```
<Form listenRequireMapFun={(mapData) => { console.log(mapData) }} >
...
</Form>
```
******
### FormGroup
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| groupId | 赋予组内空间id | number or string | 无 | 可选 |
| layout | 组内成员布局 | obj | 无 | 可选 |
| style | 增加样式 |  obj | 无 | 可选 |
| children | 子类 | node | 无 | 必要 |

```
//PropTypes.string
<FormGroup  groupId={'inputId'}>
```
```
//PropTypes.obj，参照flex布局
<FormGroup layout={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
```
******
### Label
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | 子类 | node | 无 | 必要 |
| style | 增加样式 |  obj | 无 | 可选 |

```
<Label>		
	<span>姓名</span>				
</Label>
```
******
### Input
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| type | input的类型 | 'input' or 'textarea' | 'input' | 必要 |
| value | 输入的值 | all | 无 | 必要 |
| defaultText | 默认placeholder | all | '' | 必要 |
| onChange | 值更改时触发次函数 | fun | ()=>{} | 必要 |
| maxLength | textarea中最大长度，超出文字标红 | number | 200 | 可选 |
| validateData | 验证信息 | obj{ promptText: string, validateFun: fun }| 无 | 可选 |
| cleanBtn | 右侧清除按钮则配置 | obj{ state: true, cleanFun: fun } | 无 | 可选 |
| preffix | 输入框前缀 | node | 无 | 可选 |
| suffix | 输入框后缀 | node | 无 | 可选 |
| disabled | 是否不可操作 | bool | false | 可选 |
| style | 增加样式 |  obj | 无 | 可选 |

```
<Input
	type='input' 
	validateData={{ promptText: '请输入正确的姓名', validateFun: (value) => { return !!value && (value.trim() != '') && /^[\.·\u4e00-\u9fa5]{2,20}$/.test(value); } }}
	value={this.state.test5}
	cleanBtn={{ state: true, cleanFun: () => {this.setState({test5: ''})} }}
	defaultText={'aaa'}
    suffix={<GetCodeBtn onClick={() => {}} countNum={60} />} />
	onChange={(e) => {this.setState({test5: e.target.value})}} />
```
******
### Switch
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| checked | 选中状态 | bool | false | 必要 |
| onChange | 选择时，调用此函数 | fun | 必要 |
| disabled | 是否不可操作 | bool | false | 可选 |
| style | 增加样式 |  obj | 无 | 可选 |

```
<Switch
	disabled={true}
	checked={this.state.checked} 
	onChange={() => { this.setState({checked: !this.state.checked}) }} />
```
******
### Select
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| selectedValue | 选中的值 | string or number or bool | 无 | 必要 |
| onChange | 选择时，调用此函数 | fun | ()=>{} | 必要 |
| optionMap | option信息数组 | array[{ text: string or number, value: string or number }] | [...] | 必要 |
| disabled | 是否不可操作 | bool | false | 可选 |
| style | 增加样式 |  obj | 无 | 可选 |

```
<Select
	selectedValue={this.state.selectVal}
	onChange={(e) => {this.setState({selectVal: e.target.value})}}
	optionMap={[{text:1, value:1}, {text:2, value:2}, {text:3, value:4}]} />
```
******
### RadioGroup
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| name | Radio的name属性 | string | 无 | 必要 |
| selectedValue | 选中的值 | array | [...] | 必要 |
| onChange | 选择时，调用此函数 | fun | 无 | 必要 |
| style | 增加样式 |  obj | 无 | 可选 |
| children | 子类 | node | 无 | 必要 |

### Radio
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| text | 选择项显示的文字 | string or number | 无 | 必要 |
| value | 选择项实际的值 | string or number or bool | 无 | 必要 |
| disabled | 是否不可操作 | bool | false | 可选 |
| style | 增加样式 |  obj | 无 | 可选 |

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

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| name | Checkbox的name属性 | string | 无 | 必要 |
| selectedValue | 选中的值 | array | [...] | 必要 |
| onChange | 选择时，调用此函数 | fun | 无 | 必要 |
| style | 增加样式 |  obj | 无 | 可选 |
| children | 子类 | node | 无 | 必要 |

### Checkbox
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| text | 选择项显示的文字 | string or number | 无 | 必要 |
| value | 选择项实际的值 | string or number or bool | 无 | 必要 |
| disabled | 是否不可操作 | bool | false | 可选 |
| style | 增加样式 |  obj | 无 | 可选 |

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

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| btnMap | 选择按钮的信息 | array[{ text: string or number, value: string or number }] | [...] | 必要 |
| selectedValue | 被选中的值 | string or number or bool | 无 | 必要 |
| onChange | 选择时，调用此函数 | func | ()=>{} | 必要 |
| disabled | 是否不可操作 | bool | false | 可选 |
| style | 增加样式 |  obj | 无 | 可选 |

```
<CheckBtn
	btnMap={[{ text: '有', value: true }, { text: '无', value: false }]}
	selectedValue={this.state.checkBtn}
	onChange={(val) => {this.setState({ checkBtn: val })}} />
```

******
### GetCodeBtn(表单中特殊按钮)
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| text | 按钮显示的文字 | string | '获取验证码' | 可选 |
| countNum | 倒计时时间 | number | 60 | 可选 |
| onClick | 点击时调用的函数 | func | () => {} | 可选 |
| disabled | 是否不可操作 | bool | false | 可选 |
| style | 增加样式 |  obj | 无 | 可选 |

```
<GetCodeBtn 
      text={ '获取验证码'}
      countNum={60}
      onClick={() => {}} />
```

******
### Button
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| size | 按钮大小 | string(small,middle,big,long) | small | 可选 |
| type | 按钮类型 | string(primary,colorfulHollow,grayHollow) | primary | 可选 |
| icon | 按钮内图标地址 | string | 空 | 可选 |
| isDisabled | 是否禁用 | bool | false | 可选 |
| isRadius | 是否有圆角 | bool | true | 可选 |
| onClick | 点击事件 |  func | ()=>{} | 可选 |

```
<Button
	size='small'
	btnType='primary'
	onClick={(e)=>{this.callbackFun(e)}}
>开关按钮</Button>
```

******
### List(表单展示)
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| label | 表单标题 | string | 空 | 可选 |
| value | 表单值 | string | 空 | 可选 |
| icon | 表单标题前图标 | string | 空 | 可选 |
| activeNumber | 圆形提示数值 | number | 无 | 可选 |
| onClick | 点击事件 |  func | ()=>{} | 可选 |
| arrow | 是否有箭头 |  bool | false | 可选 |

```
<ListGroup>
	<List
		label={this.data.label}
		value={this.data.value}
		icon={this.data.icon}
	></List>

	<List 
		label={this.data.label}
		value={this.data.value}
		activeNumber={this.data.activeNumber}
		arrow={this.data.arrow}
	></List>
</ListGroup>

```
******
### Icon
* desc

  普通icon，可自定义添加属性className,style，或在<Icon>中添加任意inline或inline-block元素。

  默认inline-block区域24px*24px

* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | 任意inline或inline-block元素 | node | 无 | 可选 |
| className | 增加样式 | string | 无 | 可选 |
| style | 增加样式 |  obj | 无 | 可选 |

*其他属性(eg: className等未在文档中声明的属性)，也可加到当前元素上*

```
<Icon className="demo-icon-test" style={{color: 'red'}}>
   <img />
   ...
</Icon>
```
******
### SvgIcon
* desc

  svgIcon

  默认svg区域大小：24px*24px

* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | 任意有效的svg图形路径 | node | 无 | 可选 |
| viewBox | 设定svg内图形展示范围 | string | '0 0 24 24' | 可选 |
| color | svg内图形填充色，对应style中的fill |  string | '#333' | 可选 |

*其他属性(eg: className等未在文档中声明的属性)，也可加到当前元素上*

```
<SvgIcon className="test" color="#333" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
</SvgIcon>
```
******
### Tab标签切换
* Tabs props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | <Tab> |  node |  | 可选 |
| value | 选中和当前value匹配的tab.当设置value且与相应的tab匹配，则initSelectedIndex无效 | string |  | 可选 |
| onSelectedChange | 选中项改变时触发.参数(value, tab) |  func | () => {} | 可选 |
| initSelectedIndex | 初始选中的tab index |  number | 0 | 可选 |

*其他属性(eg: className等未在文档中声明的属性)，也可加到当前元素上*

* Tab props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | 任意html元素 |  node |  | 可选 |
| value | 用于标识唯一的tab，不能重复 | string |  | 可选 |
| label | tab文字 |  string |  | 是 |
| icon | icon图标 |  node |  | 可选 |
| onSelectAction | 当前选中某项触发.参数(tab) |  func | () => {} | 可选 |


```
<Tabs value='a' initSelectedIndex={0}>
    <Tab value='a'>
        <p>content</p>
    </Tab>
    <Tab value='b'/>
        ...
    <Tab value='c'/>
</Tabs>
```
******
### TabsFooter标签切换
* props 与 Tabs props一致

******
### NormalList
* NList props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | <ListItem> | node |  | 可选 |

* SelectableList props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | 子元素 |  node |  | 可选 |
| value | 区分s的唯一值 | string |  | 可选 |
| onSelectedChange | 选中项改变时触发.参数(value, item) | node |  | 可选 |

* NListItem props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| value | 选中和当前value匹配的tab | string |  | 可选 |
| primaryText | 文字 |  string | 'sort' | 可选 |
| onSelectAction | 适用于多个sort为一组sortGroup情况，当前选中某项触发.参数(item)| func | () => {} | 可选 |

*其他属性(eg: className等未在文档中声明的属性)，也可加到当前元素上*

```
默认List
<NList>
    <NListItem/>
    ...
</NList>

可选择的List
<SelectableList value='a'>
    <NListItem value='a' primaryText='item1'/>
    <NListItem value='b' primaryText='item2'/>
</SelectableList>
```

******
### Sort排序
* Sort props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| value | 区分sort的唯一值 | string |  | 可选 |
| label | 排序文字 |  string | 'sort' | 可选 |
| sortInfo | 1.单项排序:['单项排序key'] 2.选择排序: [key: '', sortBy: 0].0为升序，1为降序. 3. 双向排序: ['双向排序key1', '双向排序key2'] | string |  | 可选 |
| clickAction | 点击排序后的行为。参数：(key, sortBy) | func | () => {} | 可选 |
| onSelectAction | 适用于多个sort为一组sortGroup情况. 当前选中某项触发.参数(item)| func | () => {} | 可选 |

* SortGroup props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | <Sort> | node |  | 是 |
| value | 选中和当前value匹配的tab | string |  | 可选 |
| onSelectedChange | 适用于多个sort为一组sortGroup情况. 选中项改变时触发.参数(value, item) | node |  | 可选 |

*其他属性(eg: className等未在文档中声明的属性)，也可加到当前元素上*

```
<SortGroup className="test" color="#333" viewBox="0 0 24 24">
    <Sort/>
</SortGroup>
```
******
