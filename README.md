# lm-ui-react
[![Build Status](https://travis-ci.org/FFF-team/lm-ui-react.svg?branch=master)](https://travis-ci.org/FFF-team/lm-ui-react)

## 项目描述
* 58金融贷款组ui库

## 应用技术
* react 
* jest && enzyme(单元测试)
* travis(持续集成)

## 目标
* 拥抱函数式无状态组件，使组件更加简洁可靠
* 单元测试覆盖率达到80%以上

## 测试点（渲染，初始化，交互）
* 1.render结构是否正常
* 2.检查初始值
* 3.检查点击事件，反馈是否正常
* 4.根据测试覆盖率，作stmts, branch, funcs, lines相应的fill，希望达到70%以上

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
### 基本原则

- 对于展示组件来说，多用函数式无状态组件
    - 语法简洁性（fb）
    - 初始化快（就是一个纯函数，不需要在构建类）首次render性能好
    - 占内存少
- 请慎用setState，确保你的每一次setState都确实会体现到UI上
    - 每次setState都会引起组件重新渲染，确保你的每一次setState都是有意义的。（性能相关）
    - 某些setState前先判断新旧值是否相同
- 请慎将component当作props传入
    - 这种方式性能消耗较大
    - 推荐<parent><son></son></parent>这种包裹方式
    - 如果是前缀后缀之类的情景，请传入函数式无状态组件
- 请将方法的bind函数一律置于constructor
    - 在constructor只需要bind一次，如果在render中每次render都会去执行bind方法（性能相关）
- 请只将组件需要的props传入组件，避免其他不相关props改变引起组件重新渲染
    - 避免引起组件不必要的渲染
- 请在希望发生重新渲染的dom或组件上设置唯一key,否则react可能在某些情况下不会重新渲染
    - 如果你希望某个状态改变后，这个组件会执行卸载并重建操作，那么请给他一个key(可以用这个改变的状态当key！)否则很有可能会执行更新操作（特定需求场景）
- 慎用太新ES6语法
    - 比如：Object.assign进行浅复制（微信上不支持）等...
    - 如果一定要用得话，请增加对应polyfile

### 进一步优化原则

- 请将jsbundle拆分为几个chunk，进行异步加载。router中内置require.ensure
    - 原则上控制主包大小在100KB左右

- 请使用immutable和PureComponent对渲染进行优化，提升项目性能
    - 务必一起使用
    - immutable不可变数据结构
    - PureComponent实质在组件shouldComponentUpdate生命周期中对新旧props，state做了次浅对比
    
----------
## DOC
---------
### 控件列表
* [Dialog](#dialog)
* [Toast](#toast)
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
* [List](#list)
* [Icon](#icon)
* [SvgIcon](#svgicon)
* [Tabs](#tab标签切换)
* [Tab](#tab标签切换)
* [TabsFooter](#tabsfooter标签切换)
* [SortGroup](#sort排序)
* [Sort](#sort排序)
* [SelectableListHOC](#selectablelisthoc)
* [ActionSheet](#actionSheet功能列表弹层)
* [Carousel](#carousel)
* [Slider](#slider)

******
### Dialog
* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| modelStyle | 遮罩层样式设置 | object | {} | 可选 |
| opacity | 背景蒙层透明度 | number | 5 | 可选 |
| showState | 展示状态 | bool | false | 必要 |
| dialogType | 展示形式 | string | Confirm(Alert CustomPrompt CustomForm Custom) | 必要 |
| dialogStyle | 弹窗样式设置 | object | {} | 可选 |
| headerType | 弹窗头部展示类型 | string | Alert(Confirm CustomPrompt CustomForm) | 可选 |
| headText | 提示头文字 | string | '提示' | 可选 |
| headerStyle | 弹窗头部样式设置 | object | {} | 可选 |
| contentText | 提示内容文字 | string | '提示内容' | 可选 |
| contentStyle | 弹窗内容样式设置 | object | {} | 可选 |
| footerTypee | 弹窗底部展示类型 | string | Alert(Confirm Close) | 可选 |
| btnLeftText | 左按钮文案 | string | '取消' | 可选 |
| btnRightText | 右按钮文案 | string | '确定' | 可选 |
| btnLeftCbFun | 左按钮点击时触发的函数 | fun | ()=>{} | 可选 |
| btnRightCbFun | 右按钮点击时触发的函数 | fun | ()=>{} | 可选 |
| btnCommonFun | 按钮点击触发的共用函数 | fun | ()=>{} | 可选 |
| btnCloseFun | 点击关闭按钮时触发的函数 | fun | ()=>{} | 可选 |

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
| preffix | 前缀 | node | 无 | 可选 |
| mode | 展现模式 | string | form(button) | 必要 |
| uniqueId | 唯一id | string or number | 无 | 可选（如果mode==='button'则必要） | 
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

	<Radio mode={'button'} uniqueId={111} text={'44'} value={4}  />
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
| preffix | 前缀 | node | 无 | 可选 |
| mode | 展现模式 | string | form(button) | 必要 |
| uniqueId | 唯一id | string or number | 无 | 可选（如果mode==='button'则必要） | 
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
	
	<Checkbox mode={'button'} uniqueId={111} text={'22'} value={2} />

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
| size | 按钮大小 | string(small,big,long) | small | 可选 |
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
### Icon
* desc

  普通icon，可自定义添加属性className,style，或在<Icon>中添加任意inline或inline-block元素。

  默认inline-block区域大小：20px*20px

* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | 任意inline或inline-block元素 | node | 无 | 可选 |

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

  默认svg区域大小：20px*20px

* props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | 任意有效的svg图形路径 | node | 无 | 可选 |
| viewBox | 设定svg内图形展示范围 | string | '0 0 20 20' | 可选 |
| color | svg内图形填充色，对应style中的fill |  string | '#333' | 可选 |

*其他属性(eg: className等未在文档中声明的属性)，也可加到当前元素上*

```
<SvgIcon className="test" color="#333" viewBox="0 0 20 20">
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
| children | 任意html元素，即当前tab下的内容 |  node |  | 可选 |
| value | 用于标识唯一的tab，不能重复 | string |  | 可选 |
| label | tab文字 |  string |  | 是 |
| icon | icon图标 |  node |  | 可选 |
| onSelectAction | 当前选中某项触发.参数(tab) |  func | () => {} | 可选 |

*其他属性(eg: className等未在文档中声明的属性)，也可加到当前元素上*


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
### List
* List props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | <ListItem> | node |  | 可选 |
| value | 适用于增加SelectableListHOC后。选中和当前value匹配的item | string |  | 必选 |
| onSelectedChange | 适用于增加SelectableListHOC后。选中项改变时触发.参数(value, item)| func | () => {} | 可选 |

* ListItem props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| primaryText | 文字 |  string | 'list-item' | 可选 |
| secondaryText | 右侧文字 |  string | '' | 可选 |
| leftIcon | 左侧图标 |  number | '' | 可选 |
| rightArrow | 右侧箭头 |  element | '' | 可选 |
| value | 适用于增加SelectableListHOC后。区分不同item唯一值 | string |  | 必选 |
| onClick | 列表点击行为.若为可选择的列表，参数({value);若为普通列表,参数(event) | func | () => {} | 可选 |
| children | 自定义组件内容 |  node | null | 可选 |

*其他属性(eg: className等未在文档中声明的属性)，也可加到当前元素上*

**当ListItem设置children，则primaryText, secondaryText失效**

```
<List>
    <ListItem primaryText="内容" secondaryText="其他内容"/>
    ...
</List>


<ListItem onClick={ () => {} }>
    <div>
       自定义内容
    </div>
</ListItem>
```

******
### Sort排序

* SortGroup props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | <SortToggle>, <SortLabel>, <SortList>, <SortMulti>其中一个或多个的集合| node |  | 是 |
| onSortInfoUpdate | 筛选条件变化后的回调，参数(sortInfo)当前的筛选条件 | func | () => {} | 可选 |

* SortLabel、SortList、SortToggle props


|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| filterItem | 筛选条件，具体格式如下说明 | array | [{label: '筛选',value: '1'}] | 是 |
| onClick | 点击排序后的回调。参数：(当前选中的筛选条件， 选中状态) | func | () => {} | 可选 |
| name | 唯一，sortGroup用来搜集当前选中的项 | string | 'sort_index' | 可选 |

filterItem说明：对于SortList可为函数，且返回promise，用于异步获取list

|   参数    | 说明 | 类型 |
| ---------- | ------ | ------ |
| value | 筛选key值，唯一 | string |
| label | 文本，即选择某项筛选条件后显示的名称 | string |
| displayLabel | 文本，通常用于SortList下拉列表中选中某项后，最终展示的标题 | string |
| isDefault | 是否默认选中.通常用于SortList | bool |
| isAll | 点击该项时，不进行筛选.通常用于SortList | bool |

* SortMulti props

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| filterItem | 筛选条件 | array | [{title: '多选标题', items: \[{label: xx, value: xx}\]] | 是 |
| onClick | 同上 | func | () => {} | 可选 |
| name | 同上 | string | '' | 可选 |

```

const onSortInfoUpdate = (ret) => {
    console.log(ret)
    // {
    //    sort_0:  {label: 'xx', value: '1'},
    //    sort_1: {xxxxx}
    // }
}

<SortGroup onSortInfoUpdate={onSortInfoUpdate}>
    <SortLabel filterItem={[{label: '筛选', value: '1'}]}/>
    <SortList filterItem={
       [
          label: '条件1',
          vlaue: '1',
          isDefault: true
       ],
       [
          label: '条件2',
          value: '2'
       ]
    }/>
</SortGroup>
```
******
### SelectableListHOC
* desc

  给列表提供可选择的功能

* params

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| config | 自定义选中项样式，可添加selectedClassName或selectedStyle, | obj | {selectedClassName: '', selectedStyle: {color: '#ff552e'}} | 可选 |
| component | List | node |  | 必选 |
| children | ListItem | node |  | 必选 |
| value | 当前选中项，受控，需要在onSelectedChange中手动更新value | string |  | 必选 |
| initValue | 初始选中项 | string |  | 否 |
| onSelectedChange | 点击某项触发 | func |  | 必选 |


```
const SelectableList = SelectableListHOC({
      selectedClassName: 'active'
  })(List);

<SelectableList value='a' onSelectedChange={ (event, value, item) => {} }>
   <ListItem value="a" onClick={ () => {} } >
      <自定义内容/>
   </ListItem>
   <ListItem value="a" >
      <自定义内容/>
   </ListItem>
</SelectableList>
```
******
### ActionSheet
* desc

  功能操作弹层

* params

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| showState | 状态, | bool | false | 必选 |
| label | 操作说明 | node | 操作的说明或提示 | 必选 |
| tip | 其他文字说明 | node |  | 可选 |
| onActionChange | 选中触发 | function | () => {} | 必选 |
| list | 操作列表1 | array | [] | 必选 |
| bottom | 操作列表2 | array | [] | 必选 |


```
const handleActionChange = (item) => {
    // {label: 'xx', key: 'xxx'}
};

<ActionSheet
	showState={ true }
	list={ [
           			{
           				label: '确定',
           				key: 'ok',
           			},
           			{
           				label: '其他操作',
           				key: 'other',
           			}
           		]
           }
	bottom={ [{
             			label: '取消',
             			key: 'cancel'
             		}]
             }
	onActionChange={ handleActionChange }
	className="choose-type-modal"
/>
```
******
### NotifyLabel props
* desc

  通知标签，一版般用在列表右侧，默认20x20圆形图标

* params

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| content | 内容 | element |  | 可选 |
| style | 自定义样式 | obj |  | 可选 |

  ```
  <NotifyLabel content={1} style={{color: 'red'}}/>
  ```

******
### Carousel
* desc

  跑马灯

* params

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| width | 宽度 | number or string | 100% | 可选 |
| height | 高度 | number | 200 | 可选 |
| slideIndex | 当前所处焦点 | number | 0 | 可选 |
| swipeSpeed | 切换命中比例 | number | 3 | 可选 |
| speed | 切换时间 | number | 300 | 可选 |
| easing | 动画曲线 | string | easeOutCirc（https://github.com/chenglou/tween-functions） | 可选 |
| autoplay | 是否自动播放 | bool | false | 可选 |
| autoplayInterval | 自动播放时间间隔 | number | 8000 | 可选 |
| arrow | 下方圆点 | bool | true | 可选 |
| page | 页码 | bool | false | 可选 |
| beforeSlide | 滑动前函数 | fun | () => {} | 可选 |
| beforeSlide | 滑动后函数 | fun | () => {} | 可选 |
```
<Carousel autoplay={true}>

	<div className="test-page1">1</div>
	<div className="test-page2">2</div>
	<div className="test-page3">3</div>
	<div className="test-page4">4</div>

</Carousel>
```
******
### Slider
* desc

  slider 横向滚动

* params

|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| children | 子 | node | 无 | 可选 |
```
<Slider>

	<div style={{width: 200, height: 150, backgroundColor: '#cccccc'}}></div>
	<div style={{width: 200, height: 150, backgroundColor: 'pink'}}></div>
	<div style={{width: 200, height: 150, backgroundColor: '#8a2be2'}}></div>
	<div style={{width: 200, height: 150, backgroundColor: '#FF9912'}}></div>

</Slider>
```
******
### Divider props
* desc

  分割线，一般用于列表之间

* params


|   参数    | 说明 | 类型 | 默认值 | 是否必要 |
| ---------- | ------ | ------ | --------- | --------- |
| inset | 是否有14px的左右padding | boolean | false | 可选 |
| style | 自定义样式 | obj |  | 可选 |

```
<List>
    <ListItem />
    <Divider />
    <ListItem />
</List>

```
******
