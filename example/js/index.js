import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Link, Router, Route, hashHistory } from 'react-router';
//import createHistory from 'history/createHashHistory'

import Navigation from './components/Navigation.js'
import UseAlert from './components/UseAlert.js';
import '../css/index.scss';

let rootElement = document.getElementById('root');
//let hashHistory = createHistory();

ReactDOM.render((
	    
		<Router history={hashHistory}>

	        <Route path="/">

	        	<IndexRedirect to="/Navigation" />

	        	<Route path="/Navigation" component={Navigation} />
	        	<Route path="/UseAlert" component={UseAlert} />

	        </Route>
	        
	    </Router>

), rootElement )
