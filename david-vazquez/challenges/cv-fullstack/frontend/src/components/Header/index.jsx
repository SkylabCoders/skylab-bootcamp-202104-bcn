import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
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
      <img className="header__image" src={curriculum.image} alt={curriculum.name} />
      <h1 className="header__title">
        {curriculum.name}
        {' '}
        {curriculum.surname}
      </h1>
      <ul className="header__nav nav">
        <li className="nav__item">About me</li>
        <li className="nav__item">Resume</li>
        <li className="nav__item">Portfolio</li>
        <li className="nav__item">Contact</li>
      </ul>
      <ul className="header__social">
        <li className="social social__linkedin" />
        <li className="social social__instagram" />
        <li className="social social__github" />
        <li className="social social__vimeo" />
      </ul>
    </header>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  curriculum: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps({ curriculum }) {
  return {
    curriculum,
  };
}

export default connect(mapStateToProps)(Header);
