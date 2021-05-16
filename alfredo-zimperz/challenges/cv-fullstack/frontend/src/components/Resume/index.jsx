/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../common/Loader';
import Terminal from './Terminal';
import Timeline from './Timeline';
import Medals from './Medals';
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
          <>
            <Terminal cv={cv} />
            <Medals medals={cv.stack} />
            <Timeline events={cv.experience} title="Experience" />
            <Timeline events={cv.studies.grades} title="Studies" />
          </>
        ) : <Loader />
    }
    </>

  );
};

Resume.propTypes = {
  cv: PropTypes.shape({
    name: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    experience: PropTypes.arrayOf({}),
    studies: PropTypes.arrayOf({
      grades: PropTypes.arrayOf({}),
    }),
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
    experience: [{
      title: '',
    }],
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
