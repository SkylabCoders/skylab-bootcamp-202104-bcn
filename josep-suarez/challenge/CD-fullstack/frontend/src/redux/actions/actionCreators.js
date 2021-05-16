// import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadInfo() {
  return {
    type: actionTypes.LOAD_INFO,
    info: 'data'
  };
}
