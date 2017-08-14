import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/*
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | name | Radio的name属性 | string | 无 | 必要 |
 * | selectedValue | 选中的值 | array | [...] | 必要 |
 * | onChange | 选择时，调用此函数 | fun | 无 | 必要 |
 *
 * <RadioGroup
 * 	name={'radioName'}
 * 	selectedValue={this.state.radioVal}
 * 	onChange={(val) => {this.setState({ radioVal: val }) }}
 * 	<Radio text={'11'} value={1} />
 * 	<Radio text={'22'} value={2} />
 * 	<Radio text={'33'} value={3} />
 * </RadioGroup>
 */

const propTypes = {

	name: PropTypes.string,
	selectedValue: PropTypes.oneOfType([

      PropTypes.string,
      PropTypes.number,
      PropTypes.bool

    ]).isRequired,
    onChange: PropTypes.func.isRequired

};

const defaultProps = {};

const childContextTypes = {

	radioGroup: PropTypes.object

};

export default class RadioGroup extends React.Component {

	getChildContext () {

		const {name, selectedValue, onChange} = this.props;

		return {
		
			radioGroup: {

        		name, selectedValue, onChange

      		}

		};

    }

	render () {

		const { children, name, selectedValue, onChange, ...arg } = this.props;

		return (

			<div className="lm-ui-radio-group" {...arg}>

				{ children }

			</div>

		)

	}

}

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
RadioGroup.childContextTypes = childContextTypes;