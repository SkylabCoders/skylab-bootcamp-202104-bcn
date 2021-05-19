import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadInfo from '../../redux/actions/actionCreator';

function Dashboard({ myInfo, dispatch }) {
  useEffect(() => {
    dispatch(loadInfo);
  }, []);
  return (
    <>
      <h2>Entro</h2>
      {
      console.log(myInfo)
    }
    </>
  );
}

Dashboard.propTypes = {
  myInfo: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    myInfo: store.info
  };
}

export default connect(mapStateToProps)(Dashboard);
