/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadCurriculum from '../../redux/actions/actionCreator';
import './index.css';

function Header({ dispatch, curriculum }) {
  useEffect(() => {
    dispatch(loadCurriculum());
  }, []);
  return (
    <header className="header">
      <div className="image-container">
        <img className="header__image" src={curriculum.image} alt={curriculum.name} />
      </div>
      <h1 className="header__title">
        {curriculum.name}
        {' '}
        {curriculum.surname}
      </h1>
      <ul className="header__nav nav">
        <li className="nav__item">
          <Link to="/">About me</Link>
        </li>
        <li className="nav__item">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="nav__item">Portfolio</li>
        <li className="nav__item">Contact</li>
      </ul>
      <div className="header__social">
        <a type="button" target="_blank" className="social social__linkedin" href={curriculum?.socialMedia?.linkedin} rel="noreferrer"> </a>
        <a type="button" target="_blank" className="social social__instagram" href={curriculum?.socialMedia?.instagram} rel="noreferrer"> </a>
        <a type="button" target="_blank" className="social social__github" href={curriculum?.socialMedia?.gitHub} rel="noreferrer"> </a>
        <a type="button" target="_blank" className="social social__vimeo" href={curriculum?.socialMedia?.vimeo} rel="noreferrer"> </a>
      </div>
    </header>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  curriculum: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    socialMedia: PropTypes.shape({
      linkedin: PropTypes.string.isRequired,
      gitHub: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

function mapStateToProps({ curriculum }) {
  return {
    curriculum,
  };
}

export default connect(mapStateToProps)(Header);
