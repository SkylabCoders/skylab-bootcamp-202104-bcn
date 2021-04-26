import {updatedTaskTitle} from './todolist.js'

export const createForm = () => {
    const newForm = document.createElement('form');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'newItem');
    input.setAttribute('placeholder', 'Add task');
    input.onkeyup = () =>{updatedTaskTitle();}


    newForm.appendChild(input);

    return newForm;

}
