import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Link, Route, Router, hashHistory, IndexRoute } from 'react-router';

import Navigation from './components/Navigation';
import UserDialog from './components/UserDialog';
import UserToast from './components/UserToast';
import UseFrom from './components/UseFrom';

import UserButton from './components/UserButton';
import UserList from './components/UserList';

import UseTab from './components/UseTab/UseTab';
import UseTabFooter from './components/UseTabFooter/UseTabFooter';
import UseFilter from './components/UseFilter/FilterPage'
import UseTabsRoute from './components/UseTabFooter/UseTabsRoute'

import '../css/index.scss';
import Radio from "../../src/Radio/index";

let rootElement = document.getElementById('root');

ReactDOM.render((
	    
		<Router history={hashHistory}>

	        <Route path="/">

	        	<IndexRedirect to="/Navigation" />

	        	<Route path="/Navigation" component={Navigation} />


				<Route path="/UseTab" component={UseTab}/>
	        	<Route path="/UserDialog" component={UserDialog} />
	        	<Route path="/UserToast" component={UserToast} />
	        	<Route path="/UseFrom" component={UseFrom} />

	        	<Route path="/Button" component={UserButton} />
	        	<Route path="/List" component={UserList} />

				<Route path="/UseTabFooter" component={UseTabFooter} />

				<Route path="/UseTabsRoute" component={UseTabsRoute} >
					<IndexRedirect to="tab1" />
					<Route path="tab1" component={UseTab}/>
					<Route path="tab2" component={UseFilter} />
					<Route path="tab3" component={UserButton} />
				</Route>
				<Route path="/UseFilter" component={UseFilter} />

	        </Route>
	        
	    </Router>

), rootElement )
