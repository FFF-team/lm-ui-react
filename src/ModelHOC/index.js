import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/*
 * showState: true false
 * opacity 0-10
 */

const opacitys = ["lm-opcity0", "lm-opcity1", 'lm-opcity2', 'lm-opcity3', 'lm-opcity4', 'lm-opcity5', 'lm-opcity6', 'lm-opcity7', 'lm-opcity8', 'lm-opcity9', 'lm-opcity10']

const ModelHOC = (WrappedComponent) => 
	
	class extends React.Component {

		constructor (props) {

			super (props);
			this.timer = null;
			this.state = {};

		}

		componentDidMount () {
			//MXR modified at 2017-04-09
			let timeControl = this.props.timeControl;
			if (timeControl) {

				this.updataTimeInfo(timeControl);

			}

		}

		updataTimeInfo (info) {

			this.setState({

				time: info.time,
				timeFun: info.cbFun

			})

		}

		componentWillReceiveProps (nextProps) {
			//只有设置了timeControl
			if (nextProps.showState && this.props.timeControl) {

				this.timeControlShow()

			}

		}

		timeControlShow () {
			//MXR modified at 2017-04-09
			let { time, timeFun } = this.state;
			this.setState({ showState: true })
			this.timer = setTimeout(() => {

				timeFun()

			}, time)

		}

		componentWillUnmount () {
			//MXR modified at 2017-04-09
			//如果存在timer，干掉。
			if (this.timer) clearTimeout(this.timer);
		}

		render () {
			const { showState, opacity, modelStyle } = this.props;
			//MXR modified at 2017-04-09
			// let { showState } = this.state;

			let HOCclass = showState ? "lm-ui-model" : "lm-ui-model hide";

			HOCclass = opacity%1 === 0 ? HOCclass + " " + opacitys[opacity] : HOCclass;

			return (

				<div key="modelHOC" className={ HOCclass } style={ modelStyle || {} }>
					
					{
					showState ? <WrappedComponent {...this.props} /> : null
					}

				</div>

			)

		}

	}

export default ModelHOC;
