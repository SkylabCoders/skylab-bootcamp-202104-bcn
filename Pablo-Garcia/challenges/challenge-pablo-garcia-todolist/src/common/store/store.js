import {getListTask, createTask, editTask, deleteTask} from "./actionType.js";

export const store = {

    tasks:[
        { id: 0, title: 'Task 1', completed: true },
        { id: 1, title: 'Task 2', completed: false },
    ],

    reducer(tasks = this.tasks, action){
        switch (action.type){
            case getListTask:
                break;
            case createTask:
                break;
            case editTask:
                break;
            case deleteTask:
                break;
            default:
                break;
        }
    },
    dispatch(action){
        this.tasks = this.reducer( this.tasks, action );
        updateList();
    },

}
