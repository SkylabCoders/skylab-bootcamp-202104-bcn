import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import loadCurriculum from '../../redux/actions/actionCreators';

import('./dashboard.scss');

function Dashboard({ dispatch, curriculum }) {
  useEffect(() => {
    dispatch(loadCurriculum());
  }, []);
  return (
    <>
      {
      curriculum.length
      && (
        <>
          <div className="headers">
            <h1 className="headers__element">{curriculum[0].person.name}</h1>
            <h2 className="headers__element">{curriculum[0].person.position}</h2>
          </div>
          <Link to="/info">
            <figure className="arrow-container">
              <img
                src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png"
                alt="arrow"
                className="arrow"
              />
            </figure>
          </Link>
        </>
      )
    }
    </>
  );
}

Dashboard.propTypes = {
  curriculum: PropTypes.shape([{
    person: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ curriculum }) {
  return {
    curriculum,
  };
}
export default connect(mapStateToProps)(Dashboard);
