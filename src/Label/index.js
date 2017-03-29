import React from 'react';

/*
 * props:
 *	linkId boolen 
 */

const propTypes = {};
const defaultProps = {};

export default class Label extends React.Component {

	render () {

		const { children } = this.props;

		return (

			<label htmlFor="">

				{children}

			</label>

		)

	}

}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
