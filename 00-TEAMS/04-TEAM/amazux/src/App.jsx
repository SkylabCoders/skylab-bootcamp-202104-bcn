import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './components/Header';
import ErrorMessage from './components/ErrorMessage';
import Dashboard from './components/Dashboard';
import './App.css';

function App({ error }) {
  return (
    <>
      {error && <ErrorMessage message="Hay un error" />}
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </main>
    </>

  );
}

App.propTypes = {
  error: PropTypes.string.isRequired
};

function mapStateToProps({ error }) {
  return { error };
}

export default connect(mapStateToProps)(App);
