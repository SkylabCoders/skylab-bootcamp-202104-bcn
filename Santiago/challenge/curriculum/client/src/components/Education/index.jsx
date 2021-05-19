import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionsCreator';

function Education({ details, dispatch }) {
  useEffect(() => {
    if (!details.length) dispatch(loadData());
  }, []);

  return (
    <div className="main-container">
      <div className="education">
        <h3>Education</h3>
        {
          details.map((detail) => detail.studies.map((study) => (
            <div className="education__details">
              <p>{study.schoolName}</p>
              <p>{`Since: ${study.startDate}`}</p>
              <p>{`To: ${study.endDate}`}</p>
            </div>
          )))
        }
      </div>
    </div>
  );
}

Education.propTypes = {
  map: PropTypes.func.isRequired,
  details: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(Education);
