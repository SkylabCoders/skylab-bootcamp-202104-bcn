/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadInfoStudy } from '../redux/actions/actionCreators';

function Study({ dispatch, info }) {
  useEffect(() => {
    if (!info.length) dispatch(loadInfoStudy());
  }, []);
  debugger;
  return info.map((study) => (
    <>
      <p>
        {study.type}
      </p>
      <p>
        {study.study}
      </p>
      <p>
        {study.date}
      </p>

    </>
  ));
}

function mapStateToProps(store) {
  return {
    study: store.info
  };
}

export default connect(mapStateToProps)(Study);
