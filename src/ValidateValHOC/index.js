import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ValidateValHOC = (WrappedComponent) => 
	
	class extends React.Component {

		constructor (props) {

			super (props);

		}

		render () {

			const { showState } = this.props;

			return (

				<WrappedComponent {...this.props} />

			)

		}

	}

export default ValidateValHOC
