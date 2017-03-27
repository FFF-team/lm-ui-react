import React from 'react';
import { Alert } from '../../../src/index.js';

export default class UseAlert extends React.Component {

	constructor(props) {

	    super(props)

	    this.state = {

	    	alertState: false

	    }
	
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
								onClick={()=>{this.setState({alertState: !this.state.alertState})}}>
								alert测试
							</a>

						</li>

					</ul>

				</div>

				<Alert 
					showState={this.state.alertState}
					headText={'test head'}
					contentText={'提示内容提示内容提示内容提示内容提示内容提示内容'} 
					btnCommonFun={() => {this.setState({alertState: false})}}
					btnLeftCbFun={() => {console.log('left fun')}}
					btnRightCbFun={() => {console.log('right fun')}}/>

			</div>

		)

	}

}
