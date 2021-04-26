import {store} from './store.js'
import { showTaskList } from "./listing.js"

export const updateList = () => {
   showTaskList(store.tasks);
}
const newTask = {
    id:null,
    title:null,
    completed:null,
}
const getTaskFromInput = document.querySelector('#newItem');

export const updatedTaskTitle = () =>{
    newTask.title = event.target.value;

}

const saveTask = () => {
    if (newTask.id === null) {
        createTask(newTask)
            .then((data) => store.dispatch(data))
            .catch((error) => {
                alert(error.message);
            });
    } else {
        /*modifyTask({...newTask});*/
    }
    newTask.title = null;
    newTask.description = null;
    newTask.id = null;
    newTask.value = '';

};

updateList()


