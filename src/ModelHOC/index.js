import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import classname from 'classnames'

/*
 * showState: true false
 * timeControl: {time: xx, cbFunc: () => {}}
 * opacity 0-10
 */

const opacitys = ["lm-opcity0", "lm-opcity1", 'lm-opcity2', 'lm-opcity3', 'lm-opcity4', 'lm-opcity5', 'lm-opcity6', 'lm-opcity7', 'lm-opcity8', 'lm-opcity9', 'lm-opcity10']

const ModelHOC = (WrappedComponent) =>

	class extends React.Component {

		constructor (props) {

			super (props);
			this.timer = null;

			this.data = {
				time: 0,
				timeFun: () => { this.setState({showState: false}) }
			};

			// init state
			this.state = {
				showState: false
			};

		}

		componentDidMount () {
            this.init(this.props);
		}

        componentWillReceiveProps (nextProps) {
			if (this.isPropsDifferent(this.props, nextProps)) {
                this.init(nextProps)
			}
        }

        componentWillUnmount () {
            if (this.timer) clearTimeout(this.timer);
        }

        isPropsDifferent(prev, next) {
			// todo: 只判断showState情况
			if (prev.showState !== next.showState) {
				return true
			}

			return false
		}

        init (props) {

			const { showState, timeControl = {} } = props;

			const { time, timeFun } = this.data;

			this.data = {
                time: timeControl.time || time,
                timeFun: timeControl.cbFun || timeFun,
			};

			this.setState({

                showState: showState

			}, () => {
                this.timeControlShow()
			});

		}

		timeControlShow () {

			const { showState } = this.state;

			const { time, timeFun } = this.data;


			if (time > 0 && showState === true) {
                this.timer = setTimeout(() => {

                    timeFun();

                }, time)
			}


		}

		render () {
			const { opacity, modelStyle } = this.props;
			const { showState } = this.state;

			const cn = classname({
				'hide': !showState,
				[opacitys[opacity]]: opacity%1 === 0
			}, 'lm-ui-model');

			return (

				<div key="modelHOC" className={ cn } style={ modelStyle || {} }>

					{
					showState ? <WrappedComponent {...this.props} /> : null
					}

				</div>

			)

		}

	}

export default ModelHOC;
