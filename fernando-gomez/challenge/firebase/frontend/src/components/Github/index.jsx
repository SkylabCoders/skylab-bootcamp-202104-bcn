/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { loadCurriculum } from '../../redux/actions/actionCreators';
// import './form.css';

function Github({ curriculum, dispatch }) {
  useEffect(() => {
    if (!curriculum.length) dispatch(loadCurriculum());
  }, []);

  return (
    <>
      <h2>Github</h2>
    </>
  );
}

Github.propTypes = {
  curriculum: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ curriculum }) {
  return {
    curriculum,
  };
}

export default connect(mapStateToProps)(Github);
