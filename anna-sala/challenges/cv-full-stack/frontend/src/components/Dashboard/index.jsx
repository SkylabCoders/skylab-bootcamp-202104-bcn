import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import loadCurriculum from '../../redux/actions/actionCreators';

function Dashboard({ dispatch, curriculum }) {
  useEffect(() => {
    dispatch(loadCurriculum());
  }, []);
  return (
    <>
      {
      curriculum.length && <h1>{curriculum[0].person.name}</h1>
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
