import React from 'react';
import './index.scss';

/*
 * props:
 *	linkId boolen 
 */

const propTypes = {};
const defaultProps = {};

export default class ListGroup extends React.Component {

	constructor (props) {
		// debugger;
		super (props);

	}

	render () {

		const { children } = this.props;

		return (
			<div className='lm-ui-listGroup'>
				{ children }
			</div>
		)

	}

}

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;