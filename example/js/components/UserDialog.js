import React from 'react';
import { Dialog } from 'src/index.js';
import TopBanner from './TopBanner';
import { ActionSheet } from 'src'

export default class UserDialog extends React.Component {

	constructor(props) {

	    super(props)

	    this.state = {

	    	dialogState: false,

	    	dialogType: "Alert",
			
			actionState: false

	    }
	
	}
	
	data = {
		actionList: [
			{
				label: '确定',
				key: 'ok',
			},
			{
				label: '其他操作',
				key: 'other',
			}
		],
		actionBottom: [{
			label: '取消',
			key: 'cancel'
		}]
	};
    
    handleActionChange = (item) => {
    	console.log(item)
	   this.setState({
		   actionState: false
	   })
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
						
						<li>
							
							<a href="javascript:;"
							   className="list-item"
							   onClick={()=>{this.setState({actionState: !this.state.actionState})}}>
								功能操作
							</a>
							
						</li>

					</ul>

				</div>

				<Dialog 
					dialogType={this.state.dialogType}
					showState={this.state.dialogState}
					headText={'提示标题'}
					contentText={'内容'}
					btnCommonFun={() => {this.setState({dialogState: false})}}
					btnLeftCbFun={() => {console.log('left fun')}}
					btnRightCbFun={() => {console.log('right fun')}}/>
				
				<ActionSheet
					showState={ this.state.actionState }
					list={ this.data.actionList }
					bottom={ this.data.actionBottom }
					onActionChange={ this.handleActionChange }
					className="choose-type-modal"
				/>

			</div>

		)

	}

}
