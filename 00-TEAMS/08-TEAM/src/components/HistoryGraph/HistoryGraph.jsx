/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

const HistoryGraph = (globalData) => {
  console.log({ globalData });
  (
    <div>
      <h2>HistoryGraph component</h2>
      <p>
        Confirmed:
        {' '}
        {globalData}
      </p>
    </div>
  );
};

HistoryGraph.propTypes = {
  globalData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ globalData }) => (
  {
    globalData: Object.entries(globalData)
  }
);

export default connect(mapStateToProps)(HistoryGraph);
