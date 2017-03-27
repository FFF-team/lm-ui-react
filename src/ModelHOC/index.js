import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.scss';

const ModelHOC = (WrappedComponent) => 
	
	class extends React.Component {

		constructor (props) {

			super (props);

		}

		render () {

			const { showState } = this.props;

			if (!showState) { return <div></div> }

			return (

				<div className="lm-ui-model">
					
					<WrappedComponent {...this.props} />

				</div>

			)

		}

	}

export default ModelHOC;
