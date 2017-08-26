import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import './index.css';

// import {Router, Route} from 'react-router';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter> 
  <Switch>
  	<Route exact path='/' component={App} />
  	<Route path='/signup' component={Signup} />
  	<Route path='/login' component={Login} />
  	<Route path='/contact' component={Contact} />
  </Switch>
   </BrowserRouter>,
  document.getElementById('root')
);
