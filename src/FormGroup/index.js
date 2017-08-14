import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/*
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | groupId | 赋予组内空间id | number or string | 无 | 可选 |
 * | layout | 组内成员布局 | obj | 无 | 可选 |
 *
 * <FormGroup  groupId={'inputId'}>
 * <FormGroup layout={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
 */

const propTypes = {

	groupId: PropTypes.string,
	layout: PropTypes.shape({

		direction: PropTypes.string,
		justifyContent: PropTypes.string,
		alignItems: PropTypes.string
		
	})

};

const defaultProps = {

	groupId: null,
	layout: {

		direction: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'

	}

}

const childContextTypes = {

	groupId: PropTypes.oneOfType([

		PropTypes.string,
		PropTypes.number

	])

};

export default class FormGroup extends React.Component {

	getChildContext () {

		return {
		
			groupId: this.props.groupId	

		};	

    }

    parseClass (direction, justifyContent, alignItems) {

    	const preffix = 'lm-ui-layout';

    	return `lm-ui-form-group 
    	${preffix}-flex-direction-${direction} 
    	${preffix}-justify-content-${justifyContent} 
    	${preffix}-align-items-${alignItems}`

    }

	render () {

		const { children, layout: {direction, justifyContent, alignItems} } = this.props;
		const argArr = [direction, justifyContent, alignItems];
		const clsName = this.parseClass(...argArr);

		return (

			<div className={clsName}>

				{ children }

			</div>

		)

	}

}

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;
FormGroup.childContextTypes = childContextTypes;
