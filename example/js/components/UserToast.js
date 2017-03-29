import React from 'react';
import { Toast } from '../../../src/index.js';

export default class UserToast extends React.Component {

	constructor(props) {

	    super(props)

	    this.callBack = this.callBack.bind(this);

	    this.state = {

	    	showState: false,

	    	toastType: "Hint",

	    	opacity: 0,

	    }
	
	}

	callBack() {

		console.log(12);

	}

	render () {

		return (

			<div>

				<div>

					<div className="topBanner">{this.props.location.query.name ? this.props.location.query.name: 'title'}</div>

					<ul>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({showState: !this.state.showState, toastType: "Hint"})}}>
								Hint测试
							</a>

						</li>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({showState: !this.state.showState, toastType: "Loading"})}}>
								Loading测试
							</a>

						</li>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({showState: !this.state.showState, toastType: "Success"})}}>
								Success测试
							</a>

						</li>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({showState: !this.state.showState, toastType: "Fail"})}}>
								Fail测试
							</a>

						</li>
						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({showState: !this.state.showState, toastType: "Netless"})}}>
								Netless测试
							</a>

						</li>

					</ul>

				</div>

				<Toast 
					showState={this.state.showState}
					toastType={this.state.toastType}
					opacity={this.state.opacity}
					message={'test head'} />

			</div>

		)

	}

}
