/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../common/Loader';
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
          <div className="window">
            <div className="bar">
              <div className="btn" />
            </div>
            <div className="body">
              <pre>

                <div className="comment"># run this command:</div>
                <div className="prompt">
                  $
                  <span className="command">show cv</span>
                </div>
                <div className="prompt">- - - - - - - - - - - - - </div>
                <div className="prompt">{`${cv.name} ${cv.lastName} CV`}</div>
                <div className="prompt">- - - - - - - - - - - - - </div>
                <div className="prompt">{`Nationality: ${cv.nationality}`}</div>
                <div className="prompt">{`BirthDate: ${cv.birthDate.split('T')[0]}`}</div>
                <div className="prompt">
                  $
                  <span className="command">show experience and studies</span>
                </div>
                <div className="prompt">
                  $
                  <span className="pulse">_</span>
                </div>
              </pre>
            </div>
          </div>
        ) : <Loader />
    }

    </>

  );
};

Resume.propTypes = {
  cv: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
    birthDate: PropTypes.string,
    nationality: PropTypes.string,
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
