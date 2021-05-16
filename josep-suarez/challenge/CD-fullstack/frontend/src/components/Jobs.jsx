/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadInfoJobs } from '../redux/actions/actionCreators';

function Jobs({ dispatch, jobs }) {
  useEffect(() => {
    if (!jobs.length) dispatch(loadInfoJobs());
  }, []);
  debugger;
  return jobs?.map((job) => (
    <>
      <p>
        {job.type}
      </p>
      <p>
        {job.job}
      </p>
      <p>
        {job.date}
      </p>

    </>
  ));
}

function mapStateToProps(store) {
  return {
    jobs: store.info
  };
}

export default connect(mapStateToProps)(Jobs);
