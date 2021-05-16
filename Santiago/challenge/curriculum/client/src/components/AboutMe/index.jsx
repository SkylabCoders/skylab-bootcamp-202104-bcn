import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionsCreator';
import './styles/style.css';

function DashBoard({ details, dispatch }) {
  useEffect(() => {
    if (!details.length) dispatch(loadData());
  }, []);

  return (
    <div className="main-container">
      <div className="about-me">
        <h3>About me</h3>
        {
          details.map((detail) => (
            <div className="about-me__details">
              <span>{`Name: ${detail.name}`}</span>
              <span>{`Direction: ${detail.street}`}</span>
              <span>{`Number: ${detail.telf}`}</span>
              <span>{`Email: ${detail.email}`}</span>
              <span>{`Birth date: ${detail.birthDate}`}</span>
            </div>
          ))
        }
      </div>

      <div className="education">
        <h3>Education</h3>
        {
          details.map((detail) => detail.studies.map((study) => (
            <div className="education__details">
              <p>{study.schoolName}</p>
              <p>{`Since: ${study.startDate}`}</p>
              <p>{`To: ${study.endDate}`}</p>
            </div>
          )))
        }
      </div>

      <div className="experience">
        <h3>Experience</h3>
        {
          details.map((detail) => detail.experience.map((work) => (
            <ul>
              <p>{work.businessName}</p>
              <p>{`Sice: ${work.startDate}`}</p>
              <p>{`To: ${work.endDate}`}</p>
              <p>{work.description}</p>
            </ul>
          )))
        }
      </div>

      <div className="languages">
        <h3>Languages</h3>
        {
          details.map((detail) => detail.languages.map((language) => (
            <ul>
              <p>{`Name: ${language.name}`}</p>
              <p>{`Level: ${language.level}`}</p>
            </ul>
          )))
        }
      </div>

      <div className="social-media">
        <h3>Follow me in:</h3>
        {
          details.map(((detail) => (
            <>
              <p>{detail.socialMedia.linkedin}</p>
              <p>{detail.socialMedia.github}</p>
            </>
          )))
        }
      </div>
    </div>
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
