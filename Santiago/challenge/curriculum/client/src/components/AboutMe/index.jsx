import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionsCreator';
import './styles/style.css';

function DashBoard({ details, dispatch }) {
  useEffect(() => {
    if (!details.length) dispatch(loadData());
  }, []);

  return (
    <div className="main-container">
      <div className="about-me">
        <h3>About me</h3>
        {
          details.map((detail) => (
            <div className="about-me__details">
              <span>{`Name: ${detail.name}`}</span>
              <span>{`Direction: ${detail.street}`}</span>
              <span>{`Number: ${detail.telf}`}</span>
              <span>{`Email: ${detail.email}`}</span>
              <span>{`Birth date: ${detail.birthDate}`}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

DashBoard.propTypes = {
  map: PropTypes.func.isRequired,
  details: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(DashBoard);
