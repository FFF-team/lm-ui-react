import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {

	render () {

		return (

			<div>

				<div className="topBanner">lm-ui-react 导航页</div>

				<ul>

					<li><Link to={{ pathname: '/UserDialog', query: { name: '弹出框' } }} className="list-item" >弹出框</Link></li>


					<li><Link to={{ pathname: '/Button', query: { name: '按钮' } }} className="list-item" >按钮</Link></li>

					<li><Link to={{ pathname: '/UserToast', query: { name: '提示框' } }} className="list-item" >提示框</Link></li>
					
					<li><Link to={{ pathname: '/UseFrom', query: { name: '表单' } }} className="list-item" >表单</Link></li>


					<li><Link to='/UserDialog' className="list-item">弹出框</Link></li>

					<li><Link to='/UseTab' className="list-item">选项卡</Link></li>

					<li><Link to='/List' className="list-item">表单列表</Link></li>
					
					{/*<li><Link to='/UseTabFooter' className="list-item">导航</Link></li>*/}
					
					<li><Link to='/UseTabsRoute' className="list-item">标签栏</Link></li>
					
					<li><Link to='/UseFilter' className="list-item">筛选</Link></li>
				</ul>

			</div>

		)

	}

}
