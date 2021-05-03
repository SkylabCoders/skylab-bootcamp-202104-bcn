/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import loadGlobalData from '../../redux/actions/actionCreators';

const Dashboard = ({ globalData, dispatch }) => {
  console.log('globalData en Dashboard', globalData);
  useEffect(() => { dispatch(loadGlobalData()); }, []);
  console.log('globalData.0 en Dashboard', globalData);
  return (
    <div>
      <h1>Tracking the virus worldwide</h1>

      <ul>
        {Object.keys(globalData).length && (
          globalData?.Afghanistan.All.map((element) => <li key={element}>hola</li>))}
      </ul>
    </div>
  );
};

Dashboard.propTypes = {
  globalData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({ globalData: store.globalData });

export default connect(mapStateToProps)(Dashboard);
