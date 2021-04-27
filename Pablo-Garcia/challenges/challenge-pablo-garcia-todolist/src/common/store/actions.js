import { store } from './store.js'
import { GET_TASKS, CREATE_TASK, DELETE_TASK, EDIT_TASK } from "./actionType.js";

const newTask = {
    id:null,
    title:null,
    completed:null,
}

export const updatedTaskTitle = (title) => {
    store.dispatch({
        type: CREATE_TASK,
        payload: { ...newTask, title },
    });
};

export const removeTask = (index) => {
    store.dispatch({
        type: DELETE_TASK,
        payload: index,
    });
};


