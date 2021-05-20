/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import loadCv from '../../redux/actions/actionCreators';

const Dashboard = ({ cv, dispatch }) => {
  useEffect(() => {
    if (!cv.name) { dispatch(loadCv()); } else { console.log(cv); }
  }, []);
  return (
    <>
      <h2>Personal Information</h2>
      <ul>
        <li key={cv.name}>{cv.name}</li>
        <li key={cv.personalData?.adress}>{cv.personalData?.adress}</li>
        <li key={cv.personalData?.tlfNumber}>{cv.personalData?.tlfNumber}</li>
        <li key={cv.personalData?.email}>{cv.personalData?.email}</li>
      </ul>
    </>
  );
};

function mapStateToProps({ cv }) {
  return { cv };
}
export default connect(mapStateToProps)(Dashboard);
