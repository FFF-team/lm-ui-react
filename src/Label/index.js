import React from 'react';
import './index.scss';
/*
 * props:
 *	groupId (string || number) - - link label and other
 */

const propTypes = {};
const defaultProps = {};
const contextTypes = {

	groupId: React.PropTypes.oneOfType([

		React.PropTypes.string,
		React.PropTypes.number

	])

};

export default class Label extends React.Component {

	render () {

		const { children } = this.props;
		const { groupId } = this.context;

		return (

			<label htmlFor={groupId && groupId} className="lm-ui-label">

				{children}

			</label>

		)

	}

}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
Label.contextTypes = contextTypes;