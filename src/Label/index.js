import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/*
 * props:
 *	groupId (string || number) - - link label and other
 */

const propTypes = {};
const defaultProps = {};
const contextTypes = {

	groupId: PropTypes.oneOfType([

		PropTypes.string,
		PropTypes.number

	])

};

const Label = (props, context) => {

	const { children, ...arg } = props;
	const { groupId } = context;

	return (

		<label 
			htmlFor={groupId && groupId} 
			className="lm-ui-label"
			{...arg}>

			{children}

		</label>

	)

};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
Label.contextTypes = contextTypes;

export default Label;