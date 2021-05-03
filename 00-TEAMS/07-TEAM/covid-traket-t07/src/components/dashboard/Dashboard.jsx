import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import globalDataReducers from '../../redux/reducers/GlobalDataReducer';

const Dashboard = ({ updatedGlobalData, dispatch }) => {
  useEffect(() => { dispatch(globalDataReducers()); }, []);
  return (
    <section>
      <h1>Tracking the virus worldwide</h1>
      <ul>
        {
          updatedGlobalData.All?.length && (
            updatedGlobalData.All.map((element) => <li key={element}>{element}</li>))
}
      </ul>
    </section>
  );
};

Dashboard.propTypes = {
  updatedGlobalData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({ updatedGlobalData: store.All });

export default connect(mapStateToProps)(Dashboard);
