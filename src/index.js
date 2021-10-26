import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import App from './App';
import Quote from './components/Quote';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
