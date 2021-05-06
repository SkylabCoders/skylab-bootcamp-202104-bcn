/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './style.scss';

const HistoryGraph = ({ globalData }) => (
  <section className="global-graphs">
    <h2>HistoryGraph component</h2>
    <p>
      Confirmed:
      {' '}
      {globalData}
    </p>
  </section>
);

HistoryGraph.propTypes = {
  globalData: PropTypes.shape([]).isRequired
};

const mapStateToProps = ({ globalData }) => (
  {
    globalData: Object.entries(globalData)
  }
);

export default connect(mapStateToProps)(HistoryGraph);
