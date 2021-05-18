import React from 'react';
import { connect } from 'redux';
import './App.css';

function App({ user }) {
  return (
    <>
      <h2>Josep el mejor</h2>
    </>
  );
}
function mapStateToProps({ store }) {
  return {
    user
  };
}
export default connect(mapStateToProps)(App);
