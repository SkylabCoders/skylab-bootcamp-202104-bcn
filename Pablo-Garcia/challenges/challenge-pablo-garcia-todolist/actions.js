import {getListTask, createTask, editTask, deleteTask} from "./actionType.js";
import { store } from "./store.js";
const state = true;

const getTask = () => store.dispatch(
    {type:getListTask},
)

/*
export const createTask = (taskData) => new Promise((resolve, reject) => {
    const { title } = taskData;
    const { description } = taskData;
    if (state) {
        setTimeout(() => {
            resolve({ type: createTask, taskData: { title, completed, id: null,} });
        }, 2000);
    } else {
        reject({
            type: 'ERROR',
            message: 'erro connection',
        });
    }
});
*/



