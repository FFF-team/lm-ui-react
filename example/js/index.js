import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Link, Route, Router, hashHistory } from 'react-router';

import Navigation from './components/Navigation.js';
import UseAlert from './components/UseAlert.js';
import UseFrom from './components/UseFrom.js';
import '../css/index.scss';

let rootElement = document.getElementById('root');

ReactDOM.render((
	    
		<Router history={hashHistory}>

	        <Route path="/">

	        	<IndexRedirect to="/Navigation" />

	        	<Route path="/Navigation" component={Navigation} />
	        	<Route path="/UseAlert" component={UseAlert} />
	        	<Route path="/UseFrom" component={UseFrom} />

	        </Route>
	        
	    </Router>

), rootElement )
