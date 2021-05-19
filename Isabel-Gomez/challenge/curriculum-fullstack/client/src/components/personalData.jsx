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
        <p>
          Hi
          {' '}
          {element.name}
        </p>
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
