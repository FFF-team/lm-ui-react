import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {

	render () {

		return (

			<div style={{ backgroundColor: '#fff' }}>

				<div className="topBanner">lm-ui-react 导航页</div>

				<ul>

					<li><Link to={{ pathname: '/UserDialog', query: { name: '弹出框' } }} className="list-item" >弹出框</Link></li>


					<li><Link to={{ pathname: '/Button', query: { name: '按钮' } }} className="list-item" >按钮</Link></li>

					<li><Link to={{ pathname: '/UserToast', query: { name: '提示框' } }} className="list-item" >提示框</Link></li>
					
					<li><Link to={{ pathname: '/UseFrom', query: { name: '表单' } }} className="list-item" >表单</Link></li>

					<li><Link to={{ pathname: '/UseTab', query: { name: '选项卡' } }} className="list-item">选项卡</Link></li>

					<li><Link to={{ pathname: '/List', query: { name: '表单列表' } }} className="list-item">表单列表</Link></li>
					
					{/*<li><Link to='/UseTabFooter' className="list-item">导航</Link></li>*/}
					
					<li><Link to={{ pathname: '/UseTabsRoute', query: { name: '标签栏' } }} className="list-item">标签栏</Link></li>
					
					<li><Link to={{ pathname: '/UseFilter', query: { name: '筛选' } }} className="list-item">筛选</Link></li>

					<li><Link to={{ pathname: '/UseDatePicker', query: { name: '日期选择' } }} className="list-item grey">日期选择</Link></li>

					<li><Link to={{ pathname: '/UseCarousel', query: { name: '走马灯' } }} className="list-item">走马灯</Link></li>

					<li><Link to={{ pathname: '/UseSlider', query: { name: '横向滑动' } }} className="list-item">横向滑动</Link></li>
				
				</ul>

			</div>

		)

	}

}
