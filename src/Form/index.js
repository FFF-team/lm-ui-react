import React from 'react';
import emitter from '../Events';

/*
 * props:
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | listenRequireMapFun | 监听内部条件验证选项的实时信息 | fun | 可选 |
 * | style | 增加样式 |  obj | 无 | 可选 |
 *
 * <Form listenRequireMapFun={(mapData) => { console.log(mapData) }} >
 * 	...
 * </Form> 
 */<Form listenRequireMapFun={(mapData) => { console.log(mapData) }} >
...
</Form>

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
