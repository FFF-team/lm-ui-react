import React from 'react';
import './index.scss';

/*
 * props:
 *  groupId
 *  layout ()
 */

const propTypes = {

	groupId: React.PropTypes.string,
	layout: React.PropTypes.shape({
		direction: React.PropTypes.string,
		justifyContent: React.PropTypes.string
	})

};

const defaultProps = {

	groupId: null,
	layout: {

		direction: 'row',
		justifyContent: 'flex-start'

	}

}

export default class FormGroup extends React.Component {

	render () {

		const { children } = this.props;

		return (

			<div className="lm-form-group lm-form-layout-row-start">

				{ children }

			</div>

		)

	}

}

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;