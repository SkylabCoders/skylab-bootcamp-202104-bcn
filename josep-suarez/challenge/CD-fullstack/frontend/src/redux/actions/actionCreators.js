/* eslint-disable no-debugger */
// import axios from 'axios';
import infoStudy from '../../assets/study';
import infoJobs from '../../assets/jobs';
import infoLanguage from '../../assets/language';
import actionTypes from './actionTypes';

export function loadInfoJobs() {
  return {
    type: actionTypes.LOAD_INFO_JOBS,
    info: infoJobs
  };
}
export function loadInfoStudy() {
  debugger;
  return {
    type: actionTypes.LOAD_INFO_STUDY,
    info: infoStudy
  };
}
export function loadInfoLanguage() {
  debugger;
  return {
    type: actionTypes.LOAD_INFO_LANGUAGE,
    info: infoLanguage
  };
}
