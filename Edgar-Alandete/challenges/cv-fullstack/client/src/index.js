/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store/index';
import About from './components/About';

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
      <Switch>
        <Route exact path="/about" component={About} />
        <Redirect to="./about" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
