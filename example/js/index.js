import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Link, Route, Router, hashHistory } from 'react-router';



import Navigation from './components/Navigation.js';
import UserDialog from './components/UserDialog.js';
import UserToast from './components/UserToast.js';
import UseFrom from './components/UseFrom.js';
import UseTabSwitch from './components/UseTabSwitch';
import UserButton from './components/UserButton.js';
import UserList from './components/UserList.js';

import '../css/index.scss';

let rootElement = document.getElementById('root');

ReactDOM.render((
	    
		<Router history={hashHistory}>

	        <Route path="/">

	        	<IndexRedirect to="/Navigation" />

	        	<Route path="/Navigation" component={Navigation} />

				<Route path="/UseTab" component={UseTabSwitch}/>
	        	<Route path="/UserDialog" component={UserDialog} />
	        	<Route path="/UserToast" component={UserToast} />
	        	<Route path="/UseFrom" component={UseFrom} />
	        	<Route path="/Button" component={UserButton} />
	        	<Route path="/List" component={UserList} />

	        </Route>
	        
	    </Router>

), rootElement )
