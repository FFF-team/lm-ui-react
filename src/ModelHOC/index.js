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

			return (

				<div key="modelHOC" className={ showState ? "lm-ui-model" : "lm-ui-model hide"}>
					
					{
					showState ? <WrappedComponent {...this.props} /> : null
					}

				</div>

			)

		}

	}

export default ModelHOC;
