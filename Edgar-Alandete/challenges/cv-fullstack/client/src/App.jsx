import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';
import loadCurriculum from './redux/actions/actionCreators';

function App({ dispatch, curriculum }) {
  useEffect(() => {
    dispatch(loadCurriculum());
  }, []);

  return (
    <>

      <h1>Welcome to my CV</h1>
      <p>{curriculum?.name}</p>
    </>
  );
}

App.propTypes = {
  curriculum: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ curriculum }) => ({ curriculum });

export default connect(mapStateToProps)(App);
