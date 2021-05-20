/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import loadCv from '../../redux/actions/actionCreators';

const Studies = ({ cv, dispatch }) => {
  useEffect(() => {
    if (!cv.name) { dispatch(loadCv()); } else { console.log(cv); }
  });
  return (
    <>
      <h1>hello world!</h1>
    </>
  );
};

function mapStateToProps({ cv }) {
  return { cv };
}
export default connect(mapStateToProps)(Studies);
