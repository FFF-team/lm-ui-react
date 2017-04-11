import React from 'react';
import { Dialog } from 'src/index.js';
import TopBanner from './TopBanner';

export default class UserDialog extends React.Component {

	constructor(props) {

	    super(props)

	    this.state = {

	    	dialogState: false,

	    	dialogType: "Alert",

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
								onClick={()=>{this.setState({dialogState: !this.state.dialogState, dialogType: "Alert"})}}>
								alert测试
							</a>

						</li>

						<li>

							<a href="javascript:;" 
							 	className="list-item"
								onClick={()=>{this.setState({dialogState: !this.state.dialogState, dialogType: "Confirm"})}}>
								confirm测试
							</a>

						</li>

					</ul>

				</div>

				<Dialog 
					dialogType={this.state.dialogType}
					showState={this.state.dialogState}
					headText={'test head'}
					contentText={'提示内容提示内容提示内容'} 
					btnCommonFun={() => {this.setState({dialogState: false})}}
					btnLeftCbFun={() => {console.log('left fun')}}
					btnRightCbFun={() => {console.log('right fun')}}/>

			</div>

		)

	}

}
