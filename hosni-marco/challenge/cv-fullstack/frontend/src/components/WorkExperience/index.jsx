/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import loadCv from '../../redux/actions/actionCreators';

/* eslint-disable no-unused-vars */
const WorkExperience = ({ cv, dispatch }) => {
  useEffect(() => {
    if (!cv.name) { dispatch(loadCv()); } else { console.log(cv); }
  });
  return (
    <>
      <h2>Work Experience</h2>
      <h3>Sound Engineer</h3>
      {
          cv.workExpercience?.liveEvents.map((work) => (
            <li>{work.workName}</li>
          ))
      }
    </>
  );
};
function mapStateToProps({ cv }) {
  return { cv };
}
export default connect(mapStateToProps)(WorkExperience);
