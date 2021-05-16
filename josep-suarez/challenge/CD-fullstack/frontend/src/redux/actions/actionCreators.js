/* eslint-disable no-debugger */
// import axios from 'axios';
import infoStudy from '../../assets/study';
import infoJobs from '../../assets/jobs';
import actionTypes from './actionTypes';

export function loadInfoJobs() {
  debugger;
  return {
    type: actionTypes.LOAD_INFO_JOBS,
    jobs: infoJobs
  };
}
export function loadInfoStudy() {
  return {
    type: actionTypes.LOAD_INFO_STUDY,
    study: infoStudy
  };
}
