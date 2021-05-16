/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../common/Loader';
import Terminal from './Terminal';
import loadCv from '../../redux/actions/actionCreators';
import './resume.css';

const Resume = ({ cv, actions }) => {
  useEffect(() => {
    if (!cv.name) { actions.loadCv(); } else { console.log(cv); }
  }, []);

  return (
    <>
      {
        cv.name ? (
          <Terminal cv={cv} />
        ) : <Loader />
    }
    </>

  );
};

Resume.propTypes = {
  cv: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    loadCv: PropTypes.func.isRequired,
  }).isRequired,
};

Resume.defaulfProps = {
  cv: {
    name: '',
    lastName: '',
    birthDate: '',
    nationality: '',
  },
};

function mapStateToProps({ cv }) {
  return { cv };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { loadCv },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
