import React from 'react';

/*
 * props:
 *	...
 */

const propTypes = {};
const defaultProps = {};

export default class Form extends React.Component {

	render () {

		const { children } = this.props;

		return (

			<form>

				{children}

			</form>

		)

	}

}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
