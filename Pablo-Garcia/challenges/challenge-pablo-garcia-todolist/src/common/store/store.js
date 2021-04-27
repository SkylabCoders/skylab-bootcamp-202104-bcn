import { GET_TASKS, CREATE_TASK, DELETE_TASK, EDIT_TASK } from "./actionType.js";

export const store = {
    listeners: [],
    tasks:[
        { title: 'Task 1', completed: true },
        { title: 'Task 2', completed: false },
    ],

    updateStore(newState) {
        this.tasks = newState;
        if (this.listeners.length) {
            this.listeners.forEach(callback => callback(this.tasks));
        }
    },

    onStoreChange(callback) {
        this.listeners = [...this.listeners, callback];
    },

    reducer(action){
        switch (action.type){
            case GET_TASKS:
                return this.tasks;
            case CREATE_TASK:
                return [...this.tasks, action.payload];
            case DELETE_TASK:
                return this.tasks.filter((task, index) => index !== action.payload);
            default:
                break;
        }
    },
    dispatch(action) {
        const newState = this.reducer(action);
        this.updateStore(newState);
    },
};
