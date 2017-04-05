import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Link, Route, Router, hashHistory } from 'react-router';

import Navigation from './components/Navigation.js';
import UserDialog from './components/UserDialog.js';
import UserToast from './components/UserToast.js';
import UseFrom from './components/UseFrom.js';

import UserButton from './components/UserButton.js';
import UserList from './components/UserList.js';

import UseTab from './components/UseTab/UseTab';
import UseTabFooter from './components/UseTabFooter/UseTabFooter';
import UseFilter from './components/UseFilter/FilterPage'

import '../css/index.scss';

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
				<Route path="/UseFilter" component={UseFilter} />

	        </Route>
	        
	    </Router>

), rootElement )
