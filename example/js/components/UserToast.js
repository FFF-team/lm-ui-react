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

		let _this = this;
		setTimeout(function() {
			_this.setState({showState: !_this.state.showState});
		}, 3000);

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
								onClick={()=>{this.setState({showState: !this.state.showState, toastType: "Hint"}); this.callBack()}}>
								Hint测试
							</a>

						</li>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({showState: !this.state.showState, toastType: "Loading"}); this.callBack()}}>
								Loading测试
							</a>

						</li>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({showState: !this.state.showState, toastType: "Success"}); this.callBack()}}>
								Success测试
							</a>

						</li>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({showState: !this.state.showState, toastType: "Fail"}); this.callBack()}}>
								Fail测试
							</a>

						</li>
						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({showState: !this.state.showState, toastType: "Netless"}); this.callBack()}}>
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
