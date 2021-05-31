/* eslint-disable no-underscore-dangle */
import actionTypes from './actionType';
import { createTask, updateTaskById, deleteTaskById, getAllTasks, getOneTask } from '../services/task';

export function getTask() {
  return async (dispatch) => {
    try {
      const response = await getAllTasks();
      dispatch({
        type: actionTypes.GET_TASKS,
        tasks: response.data
      });
    } catch (error) {
      dispatch({
        type: 'GET_TASK'
      });
    }
  };
}
export function deleteTask(taskId) {
  return async (dispatch) => {
    try {
      await deleteTaskById(taskId);
      dispatch({
        type: actionTypes.DELETE_TASK,
        taskId
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTaskById(taskId) {
  return async (dispatch) => {
    const { data } = await getOneTask(taskId);
    dispatch({
      type: actionTypes.GET_TASK,
      task: data
    });
  };
}

export function createOne(task) {
  return async (dispatch) => {
    try {
      const { data } = await createTask(task);
      dispatch({
        type: actionTypes.CREATE_TASK,
        task: data
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateById(task) {
  return async (dispatch) => {
    const { data } = await updateTaskById(
      task._id,
      {
        task: task.task,
        description_task: task.description_task,
        done: task.done
      }
    );
    dispatch({
      type: actionTypes.UPDATE_TASK,
      task: data
    });
  };
}
