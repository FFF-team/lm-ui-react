import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {

	render () {

		return (

			<div>

				<div className="topBanner">lm-ui-react 导航页</div>

				<ul>

					<li><Link to={{ pathname: '/UserDialog', query: { name: '弹出框' } }} className="list-item" >弹出框</Link></li>

					<li><Link to={{ pathname: '/UserToast', query: { name: '提示框' } }} className="list-item" >提示框</Link></li>

					<li><Link to='/UserDialog' className="list-item">弹出框</Link></li>

					<li><Link to='/UserDialog' className="list-item">弹出框</Link></li>

				</ul>

			</div>

		)

	}

}
