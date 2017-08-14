import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/*
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | name | Checkbox的name属性 | string | 无 | 必要 |
 * | selectedValue | 选中的值 | array | [...] | 必要 |
 * | onChange | 选择时，调用此函数 | fun | 无 | 必要 |
 *
 * <CheckboxGroup
 * 	 name={'checkboxName'}
 * 	 selectedValue={this.state.checkboxVal}
 * 	 onChange={(val) => {console.log(`checkbox/${val}`); this.setState({ checkboxVal: val })}}>
 * 	 <Checkbox text={'11'} value={1} />
 * 	 <Checkbox text={'22'} value={2} />
 * 	 <Checkbox text={'33'} value={3} />
 * </CheckboxGroup>
 */

const propTypes = {

	name: PropTypes.string,
	selectedValue: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired

};

const defaultProps = {};

const childContextTypes = {

	checkboxGroup: PropTypes.object

};

export default class CheckboxGroup extends React.Component {

	getChildContext () {

		const {name, selectedValue, onChange} = this.props;

		return {
		
			checkboxGroup: {

        		name, selectedValue, onChange

      		}

		};

    }

	render () {

		const { children, name, selectedValue, onChange, ...arg } = this.props;

		return (

			<div className="lm-ui-checkbox-group" {...arg}>

				{ children }

			</div>

		)

	}

}

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;
CheckboxGroup.childContextTypes = childContextTypes;