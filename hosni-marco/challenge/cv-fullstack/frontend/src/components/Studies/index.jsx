/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import loadCv from '../../redux/actions/actionCreators';

const Studies = ({ cv, dispatch }) => {
  useEffect(() => {
    if (!cv.name) { dispatch(loadCv()); } else { console.log(cv); }
  });
  console.log('----->', cv.studies);
  debugger;
  return (
    <>
      <h1>Studies</h1>
      <ul>
        {
          cv.studies?.map((studies) => (
            <li key={studies.schoolName}>{studies.schoolName}</li>
          ))
        }
      </ul>
    </>
  );
};

function mapStateToProps({ cv }) {
  return { cv };
}
export default connect(mapStateToProps)(Studies);
