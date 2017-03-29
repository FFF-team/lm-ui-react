import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {

	render () {

		return (

			<div>

				<div className="topBanner">lm-ui-react 导航页</div>

				<ul>

					<li><Link to={{ pathname: '/UserDialog', query: { name: '弹出框' } }} className="list-item" >弹出框</Link></li>

					<li><Link to={{ pathname: '/UseFrom', query: { name: '表单' } }} className="list-item" >表单</Link></li>

					<li><Link to='/UserDialog' className="list-item">弹出框</Link></li>

					<li><Link to='/UseTab' className="list-item">选项卡</Link></li>
					
				</ul>

			</div>

		)

	}

}
