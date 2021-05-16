import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionsCreator';

function DashBoard({ details, dispatch }) {
  useEffect(() => {
    if (!details.length) dispatch(loadData());
  }, []);

  return (
    <>
      <h1>Personal Information</h1>
      {
          details.map((detail) => detail.studies.map((study) => (
            <ul>
              <li>{study.schoolName}</li>
              <li>{study.startDate}</li>
              <li>{study.endDate}</li>
            </ul>
          )))
      }
    </>
  );
}
DashBoard.propTypes = {
  map: PropTypes.func.isRequired,
  details: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(DashBoard);
