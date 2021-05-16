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
      <h1>About me</h1>
      {
        details.map((detail) => (
          <ul>
            <li>{detail.name}</li>
            <li>{detail.street}</li>
            <li>{detail.telf}</li>
            <li>{detail.email}</li>
            <li>{detail.birthDate}</li>
          </ul>
        ))
      }

      <h1>Education</h1>
      {
          details.map((detail) => detail.studies.map((study) => (
            <ul>
              <li>{study.schoolName}</li>
              <li>{study.startDate}</li>
              <li>{study.endDate}</li>
            </ul>
          )))
      }

      <h1>Experience</h1>
      {
          details.map((detail) => detail.experience.map((work) => (
            <ul>
              <li>{work.businessName}</li>
              <li>{work.startDate}</li>
              <li>{work.endDate}</li>
              <li>{work.description}</li>
            </ul>
          )))
      }

      <h1>Languages</h1>
      {
          details.map((detail) => detail.languages.map((language) => (
            <ul>
              <li>{language.name}</li>
              <li>{language.level}</li>
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
