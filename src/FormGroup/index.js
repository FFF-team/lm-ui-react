import React from 'react';
import './index.scss';

/*
 * props:
 *  groupId
 *  layout obj
 */

const propTypes = {

	groupId: React.PropTypes.string,
	layout: React.PropTypes.shape({

		direction: React.PropTypes.string,
		justifyContent: React.PropTypes.string,
		alignItems: React.PropTypes.string
		
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

	groupId: React.PropTypes.oneOfType([

		React.PropTypes.string,
		React.PropTypes.number

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
