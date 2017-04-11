import React from 'react';
import { Toast } from 'src/index.js';
import TopBanner from './TopBanner';

export default class UserToast extends React.Component {

	constructor(props) {

	    super(props)

	    this.state = {

	    	toastType: "Hint",

	    	opacity: 0,

	    }
	
	}

	render () {

		return (

			<div style={{ backgroundColor: '#fff' }}>

				<div>

					<TopBanner name={this.props.location.query.name} />
					
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
					timeControl={{ time: 2000, cbFun: () => {this.setState({showState: false})}}}
					opacity={this.state.opacity}
					message={'test head'} />

			</div>

		)

	}

}
