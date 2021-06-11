
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
			</Switch>
			
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

