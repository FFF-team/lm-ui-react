import React from 'react';
import './index.scss';

/*	
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | checked | 选中状态 | bool | false | 必要 |
 * | onChange | 选择时触发此函数 | fun | 必要 |
 * | disabled | 是否不可操作 | bool | false | 可选 |
 * | style | 增加样式 |  obj | 无 | 可选 |
 *
 * <Switch
 * 	disabled={true}
 * 	name={'name'}
 * 	checked={this.state.checked} 
 * 	onChange={() => { this.setState({checked: !this.state.checked}) }} />
 */

const propTypes = {

	checked: React.PropTypes.bool.isRequired,
	onChange: React.PropTypes.func.isRequired

};

const defaultProps = {

	checked: false,

};

const contextTypes = {

	groupId: React.PropTypes.oneOfType([

		React.PropTypes.string,
		React.PropTypes.number

	])

};

export default class Switch extends React.Component {

	render () {

		const { checked, onChange, ...arg } = this.props;
		const { groupId } = this.context;
		
		return (

			<input 
				id={groupId && groupId}
				onChange={onChange}
				checked={checked}
				type="checkbox" 
				className="lm-ui-check-switch"
				{...arg}/>

		)

	}

}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
Switch.contextTypes = contextTypes;





