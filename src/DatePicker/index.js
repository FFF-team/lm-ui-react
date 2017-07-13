import React from 'react';
import './index.scss';

/*
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | text | 选择项显示的文字 | string or number | 无 | 必要 |
 * | value | 选择项实际的值 | string or number or bool | 无 | 必要 |
 */

const propTypes = {

	

};

const defaultProps = {



};

export default class DatePicker extends React.Component {

	render () {

		return (

			<div>{'hello world im DatePicker'}</div>

		)

	}

}

// DatePicker.propTypes = propTypes;
// DatePicker.defaultProps = defaultProps;