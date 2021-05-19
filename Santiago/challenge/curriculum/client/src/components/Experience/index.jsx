import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionsCreator';

function Experience({ details, dispatch }) {
  useEffect(() => {
    if (!details.length) dispatch(loadData());
  }, []);

  return (
    <div className="main-container">
      <div className="experience">
        <h3>Experience</h3>
        {
          details.map((detail) => detail.experience.map((work) => (
            <ul>
              <p>{work.businessName}</p>
              <p>{`Sice: ${work.startDate}`}</p>
              <p>{`To: ${work.endDate}`}</p>
              <p>{work.description}</p>
            </ul>
          )))
        }
      </div>
    </div>
  );
}

Experience.propTypes = {
  map: PropTypes.func.isRequired,
  details: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(Experience);
