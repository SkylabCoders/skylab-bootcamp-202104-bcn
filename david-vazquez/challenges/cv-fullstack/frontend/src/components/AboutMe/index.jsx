/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadCurriculum from '../../redux/actions/actionCreator';
import './index.css';

function Resume({ dispatch, curriculum }) {
  useEffect(() => {
    dispatch(loadCurriculum());
  }, []);

  return (
    <main className="main">
      <h2>About me</h2>
      <div className="bio-container">
        <p>{curriculum.biography}</p>
      </div>
    </main>
  );
}

Resume.propTypes = {
  dispatch: PropTypes.func.isRequired,
  curriculum: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    education: PropTypes.shape({
      map: PropTypes.func.isRequired,
    }).isRequired,
    experience: PropTypes.shape({
      map: PropTypes.func.isRequired,
    }).isRequired,
    designSkills: PropTypes.shape({
      map: PropTypes.func.isRequired,
    }).isRequired,
    codingSkills: PropTypes.shape({
      map: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

function mapStateToProps({ curriculum }) {
  return {
    curriculum,
  };
}

export default connect(mapStateToProps)(Resume);
