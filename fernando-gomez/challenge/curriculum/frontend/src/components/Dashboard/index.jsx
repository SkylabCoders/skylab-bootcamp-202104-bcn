/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadCurriculum from '../../redux/actions/actionCreators';

function Dashboard({ curriculum, dispatch }) {
  useEffect(() => {
    if (!curriculum.length) dispatch(loadCurriculum());
  }, []);

  return (
    <>
      <h1 className="title">Curriculum</h1>
      <h2>{curriculum.name}</h2>

      <p>{curriculum.resumee}</p>
    </>
  );
}

Dashboard.propTypes = {
  curriculum: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number
  })).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ curriculum }) {
  return {
    curriculum
  };
}

export default connect(mapStateToProps)(Dashboard);
