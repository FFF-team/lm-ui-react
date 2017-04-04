import React from 'react';
import emitter from '../Events';

/*
 * props:
 *	listenRequireMapFun实时监听&&反馈表单中需要验证项的信息
 */

const propTypes = {};
const defaultProps = {};

export default class Form extends React.Component {

	constructor (props) {

		super (props);

		this.state = {

			requiredMap: []

		}

	}

	componentDidMount () {
		
		const { listenRequireMapFun } = this.props;
		/* 
		 * 单纯的负责监听errorMsg事件，并记录接收到的信息，
		 * 并通过listenRequireMapFun接口输出。
		 */
		emitter.addListener('errorMsg', (id, data) => {
			//每个input都有唯一的数字id
			let map = [...this.state.requiredMap];
			
			map[id.id] = data;

			this.setState({ requiredMap: map })

			listenRequireMapFun(this.state.requiredMap)

		});

	}

	render () {

		const { children, listenRequireMapFun, ...arg } = this.props;

		return (

			<form {...arg}>

				{children}

			</form>

		)

	}

}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
