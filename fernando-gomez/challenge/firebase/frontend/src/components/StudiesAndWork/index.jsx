/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './form.css';

function StudiesAndWork({ curriculum }) {
  const { studies, work } = curriculum;
  return (
    <>
      <nav className="top-nav">
        <h2 className="top-nav__title">
          StudiesAndWork
        </h2>
        <Link
          to="/"
          className="top-nav__home"
        >
          <i className="fas fa-home" />
        </Link>
      </nav>

      <ul
        className="work"
      >
        {work?.slice(0).reverse().map((workElement) => (
          <li
            key={workElement._id}
            className="work__list workElement"
          >
            <span className="workElement__image">
              <img
                src={workElement.institutionImage}
                alt={workElement.institution}
              />
            </span>
            <span className="workElement__description description">
              <p className="description__institution">
                {workElement.institution}
              </p>
              <p className="description__title">
                {workElement.title}
              </p>
              <div className="time">
                <p className="description__start">
                  {workElement.start}
                </p>
                <p className="description__finish">
                  {workElement.finish !== workElement.start ? workElement.finish : ''}
                </p>
              </div>
            </span>

          </li>
        ))}
      </ul>

      <ul
        className="studies"
      >
        {studies?.slice(0).reverse().map((study) => (
          <li
            key={study._id}
            className="studies__study study"
          >
            <span className="study__image">
              <img
                src={study.institutionImage}
                alt={study.institution}
                className="study__image"
              />
            </span>
            <span className="study__description description">
              <p className="description__institution">
                {study.institution}
              </p>
              <p className="description__title">
                {study.title}
              </p>
              <div className="time">
                <p className="description__start">
                  {study.start}
                </p>
                {study.finish !== study.start ? (
                  <p className="description__finish">
                    {study.finish}
                  </p>
                ) : null}
              </div>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

StudiesAndWork.propTypes = {
  curriculum: PropTypes.shape({
    studies: PropTypes.shape([]).isRequired,
    work: PropTypes.shape([]).isRequired,
  }).isRequired,
};

function mapStateToProps({ curriculum }) {
  return {
    curriculum,
  };
}

export default connect(mapStateToProps)(StudiesAndWork);
