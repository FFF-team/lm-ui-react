import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.scss';

/*
showState: true false
opacity 0-10
 */

const opacitys = ["lm-opcity0", "lm-opcity1", 'lm-opcity2', 'lm-opcity3', 'lm-opcity4', 'lm-opcity5', 'lm-opcity6', 'lm-opcity7', 'lm-opcity8', 'lm-opcity9', 'lm-opcity10']

const ModelHOC = (WrappedComponent) => 
	
	class extends React.Component {

		constructor (props) {

			super (props);

		}

		render () {

			const { showState, opacity} = this.props;

			let HOCclass = showState ? "lm-ui-model" : "lm-ui-model hide";

			HOCclass = Number.isInteger(opacity) ? HOCclass + " " + opacitys[opacity] : HOCclass;

			return (

				<div key="modelHOC" className={ HOCclass }>
					
					{
					showState ? <WrappedComponent {...this.props} /> : null
					}

				</div>

			)

		}

	}

export default ModelHOC;
