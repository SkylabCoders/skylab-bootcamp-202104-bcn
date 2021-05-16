import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadCurriculum from '../../redux/actions/actionCreator';

function Header({ dispatch, curriculum }) {
  useEffect(() => {
    dispatch(loadCurriculum());
  }, []);
  return (
    <>
      <h1>
        {curriculum.name}
        {' '}
        {curriculum.surname}
      </h1>
      <ul>
        <li>About me</li>
        <li>Resume</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li>Linkedin</li>
        <li>Instagram</li>
        <li>Github</li>
        <li>Vimeo</li>
      </ul>
    </>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  curriculum: PropTypes.shape({
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
