/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadCurriculum from '../actions/actionCreators';

const PersonalData = ({ cvs, dispatch }) => {
  useEffect(() => {
    if (!cvs.length) dispatch(loadCurriculum());
  }, []);
  return (
    <section>
      {cvs.map((element) => (
        <ul>
          <li key={element._id}>
            <img src={element.personalData.image} alt={element.personalData.name} width="70px" />
          </li>
          <li key={element._id}>
            {`${element.personalData.name} ${element.personalData.lastName}`}
          </li>
        </ul>
      ))}
    </section>
  );
};

PersonalData.propTypes = {
  cvs: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  cvs: store.cvs,
});

export default connect(mapStateToProps)(PersonalData);
