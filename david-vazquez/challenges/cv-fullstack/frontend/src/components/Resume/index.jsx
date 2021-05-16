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
    <>
      <h2>Resume</h2>
      <h3>Education</h3>
      <ul>
        {curriculum?.education
        && (curriculum?.education).map((element) => (
          <li>
            <span className="education__title">{element.title}</span>
            <span className="education__time">
              {element.dateStart}
              {' - '}
              {element.dateEnd}
            </span>
            <div className="education__place">
              {element.center}
              {' '}
              {element.city}
            </div>
          </li>
        ))}
      </ul>
      <h3>Experience</h3>
      {curriculum?.experience
        && (curriculum?.experience).map((element) => (
          <li>
            <span className="education__title">{element.position}</span>
            <span className="education__time">
              {element.dateStart}
              {' - '}
              {element.dateEnd}
            </span>
            <div className="education__place">
              {element.company}
            </div>
            <p>{element.description}</p>
          </li>

        ))}
      <h3>Design Skills</h3>
      {curriculum?.designSkills
        && (curriculum?.designSkills).map((element) => (
          <li>{element.skill}</li>
        ))}
      <h3>Coding Skills</h3>
      {curriculum?.codingSkills
        && (curriculum?.codingSkills).map((element) => (
          <li>{element.skill}</li>
        ))}
    </>
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
