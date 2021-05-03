import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './components/Header';
import ErrorMessage from './components/ErrorMessage';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import './styles/styles.css';

function App({ error }) {
  return (
    <>
      {error.message && <ErrorMessage message={error.message} />}
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/product/:id" exact component={Products} />
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
