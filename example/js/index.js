import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Link, Route, Router, hashHistory } from 'react-router';

import Navigation from './components/Navigation.js';
import UserDialog from './components/UserDialog.js';
import UserToast from './components/UserToast.js';
import '../css/index.scss';

let rootElement = document.getElementById('root');

ReactDOM.render((
	    
		<Router history={hashHistory}>

	        <Route path="/">

	        	<IndexRedirect to="/Navigation" />

	        	<Route path="/Navigation" component={Navigation} />
	        	<Route path="/UserDialog" component={UserDialog} />
	        	<Route path="/UserToast" component={UserToast} />
	        </Route>
	        
	    </Router>

), rootElement )
