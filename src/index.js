import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Router, Route} from 'react-router';

ReactDOM.render(
  <Router>
  	<Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
