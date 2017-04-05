import React from 'react';
import './index.scss';

/*	
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | selectedValue | 选中的值 | string or number or bool | 无 | 必要 |
 * | onChange | 选择时，调用此函数 | fun | ()=>{} | 必要 |
 * | optionMap | option信息数组 | array[{ text: string or number, value: string or number }] | [...] | 必要 |
 * | disabled | 是否不可操作 | bool | false | 可选 |
 * | style | 增加样式 |  obj | 无 | 可选 |
 *
 * <Select
 *  disabled={true}
 * 	value={this.state.selectVal}
 * 	onChange={(e) => {this.setState({selectVal: e.target.value})}}
 * 	optionMap={[{text:1, value:1}, {text:2, value:2}, {text:3, value:4}]} />
 */

const propTypes = {

	optionMap: React.PropTypes.array.isRequired,
	onChange: React.PropTypes.func.isRequired,
	selectedValue: React.PropTypes.oneOfType([

    	React.PropTypes.string,
    	React.PropTypes.number,
    	React.PropTypes.bool

  	]) 

};

const defaultProps = {

	optionMap: [],
	onChange: () => {}

};

const contextTypes = {

	groupId: React.PropTypes.oneOfType([

		React.PropTypes.string,
		React.PropTypes.number

	])

};

export default class Select extends React.Component {

	render () {

		const { optionMap, onChange, selectedValue, ...arg } = this.props;
		const { groupId } = this.context;

		return (

			<div className="lm-ui-select-wrap">

				<select 
					className='lm-ui-select'
					id={groupId && groupId}
					value={selectedValue}
					onChange={onChange}
					{...arg}>
					
					<option value={''} disabled>请选择</option>

					{
				
						optionMap.map((item, index) => {
				
							return <option 
								key={index}
								value={item.value}>{item.text}</option>
				
						})
				
					}
				
				</select>
				
				<i className="lm-ui-icon-arrow-down"></i>

			</div>

		)

	}

}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
Select.contextTypes = contextTypes;