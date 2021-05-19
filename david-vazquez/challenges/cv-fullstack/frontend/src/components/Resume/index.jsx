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
      <div className="resume">
        <div className="resume__left">
          <h3>Education</h3>
          <div className="container">
            <div className="container__line" />
            <ul className="container__items">
              {curriculum?.education
        && (curriculum?.education).map((element) => (
          <li className="container__item">
            <div className="container__item-left">
              {element.dateStart}
              {' '}
              {element.dateEnd}
            </div>
            <div className="container__top">
              <div className="container__circle" />
              <span className="education__title">{element.title}</span>
            </div>
            <div className="container__desc">
              <div className="education__place">
                {element.center}
                {' '}
                {element.city}
              </div>
            </div>
          </li>
        ))}
            </ul>
          </div>
          <h3>Experience</h3>
          <div className="container">
            <div className="container__line" />
            <ul className="container__items">
              {curriculum?.experience
        && (curriculum?.experience).map((element) => (
          <li className="container__item">
            <div className="container__item-left">
              {element.dateStart}
              {' '}
              {element.dateEnd}
            </div>
            <div className="container__top">
              <div className="container__circle" />
              <span className="education__title">
                {element.position}
                {' // '}
                {element.company}
              </span>
            </div>
            <div className="container__desc">
              <span className="education__time" />
              <div className="education__place" />
              <div clasName="description">
                {element.description}
              </div>
            </div>
          </li>

        ))}
            </ul>
          </div>
        </div>
        <div className="resume__right">
          <h3>Design Skills</h3>
          <ul className="skills">
            {curriculum?.designSkills
        && (curriculum?.designSkills).map((element) => (
          <li className="item">
            {element.skill}
            <div className="container">
              <div className="container__progress" style={{ width: `${element.level}%` }} />
            </div>
          </li>
        ))}
          </ul>
          <h3>Coding Skills</h3>
          <ul className="skills">
            {curriculum?.codingSkills
        && (curriculum?.codingSkills).map((element) => (
          <li className="item">
            {element.skill}
            <div className="container">
              <div className="container__progress" style={{ width: `${element.level}%` }} />
            </div>
          </li>
        ))}
          </ul>
        </div>
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
