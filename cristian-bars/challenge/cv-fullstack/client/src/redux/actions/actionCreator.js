/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2022/tasks';
// const url = process.env.REACT_APP_URL;

// export function loadTasks() {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios(url);
//       dispatch({
//         type: actionTypes.LOAD_TASKS,
//         tasks: data
//       });
//     } catch (error) {
//       dispatch({
//         type: actionTypes.LOAD_TASKS_ERROR
//       });
//     }
//   };
// }
