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
          details.map((detail) => (
            <ul>
              <li>{detail.name}</li>
              <li>{detail.street}</li>
              <li>{detail.telf}</li>
              <li>{detail.email}</li>
              <li>{detail.birthDate}</li>
              <li>{detail.studies.schoolName}</li>
              <li>{detail.studies.startDate}</li>
              <li>{detail.studies.endDate}</li>
              <li>{detail.experience.businessName}</li>
              <li>{detail.experience.startDate}</li>
              <li>{detail.experience.endDate}</li>
              <li>{detail.experience.activities.activityName}</li>
              <li>{detail.languages.name}</li>
              <li>{detail.languages.level}</li>
            </ul>
          ))
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
