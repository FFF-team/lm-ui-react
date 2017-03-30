import React from 'react';
import cs from 'classnames';
import '../../../src/Button/index.scss';

export default class Button extends React.Component {

	constructor(props) {
	    super(props)

	    this.state = {
			showSuction1:true,
			showSuction2:false,
			showSuction3:false
	    }
	}

	change(state){

		this.setState({showSuction1: false,showSuction2: false,showSuction3: false},function(){
			let tmpObj = {};
			tmpObj[state] = true;

		    this.setState(tmpObj);
		});
	}

	render () {

		return (

			<div>

				<div>

					<div className="topBanner">{this.props.location.query.name ? this.props.location.query.name: 'title'}</div>

				</div>
				<div className='btn-content'>
					<div className='btn-subTitle'>小按钮</div>
					<div>

						<button className='lm-ui-btn lm-ui-btn-small lm-ui-btn-primary'>立即申请</button>

						<button className='lm-ui-btn lm-ui-btn-small lm-ui-btn-colorful-hollow'>立即申请</button>
						
						<button className='lm-ui-btn lm-ui-btn-small lm-ui-btn-gray-hollow'>立即申请</button>
					    
					    <button className='lm-ui-btn lm-ui-btn-small lm-ui-btn-gray-hollow' disabled>禁用</button>

					</div>
					<div className='btn-subTitle'>中按钮</div>
					<div>

						<button className='lm-ui-btn lm-ui-btn-middle lm-ui-btn-primary'>立即申请</button>

					</div>
					<div className='btn-subTitle'>大按钮</div>
					<div>
					
						<button className='lm-ui-btn lm-ui-btn-big lm-ui-btn-primary'>立即申请</button>

					</div>
					<div className='btn-subTitle'>长按钮及icon</div>
					<div>
					
						<button className='lm-ui-btn lm-ui-btn-long lm-ui-btn-primary'><span className='lm-ui-btn-icon'></span>立即申请</button>
						<br/>
						<button className='lm-ui-btn lm-ui-btn-long lm-ui-btn-colorful-hollow'>立即申请</button>

					</div>
					<div className='btn-subTitle'>吸底按钮</div>
					<div className='btn-link'>
						<a onClick={this.change.bind(this,'showSuction1')} href='javascript:;'>长按钮吸底</a>
						<a onClick={this.change.bind(this,'showSuction2')} href='javascript:;'>多按钮吸底</a>
						<a onClick={this.change.bind(this,'showSuction3')} href='javascript:;'>分栏按钮吸底</a>
					</div>
					<div className={cs({'lm-ui-btn-suction':true,'hide':!this.state.showSuction1})}>
					
						<button className='lm-ui-btn lm-ui-btn-long lm-ui-btn-primary'>立即申请</button>

					</div>
					<div className={cs({'lm-ui-btn-suction lm-ui-flex-box':true,'hide':!this.state.showSuction2})}>
					
						<button className='lm-ui-btn lm-ui-btn-primary lm-ui-btn-item'>多按钮</button>
						<button className='lm-ui-btn lm-ui-btn-colorful-hollow lm-ui-btn-item'>多按钮</button>

					</div>
					<div className={cs({'lm-ui-btn-suction lm-ui-flex-box':true,'hide':!this.state.showSuction3})}>
						<div className='lm-ui-btn-item'>something</div>
					    <button className='lm-ui-btn lm-ui-btn-suction-button lm-ui-btn-primary'>分栏</button>
					</div>
				</div>

			</div>

		)

	}

}
