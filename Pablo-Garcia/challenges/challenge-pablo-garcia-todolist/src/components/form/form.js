import { updatedTaskTitle } from '../../common/store/actions.js'
import { button } from '../button/button.js'

export const createForm = () => {
    const newForm = document.createElement('form');
    const input = document.createElement('input');

    newForm.addEventListener('submit', e => e.preventDefault());

    input.setAttribute('type', 'text');
    input.setAttribute('id', 'newItem');
    input.setAttribute('placeholder', 'Your task...');

    const formButton = button('Add Task', () => updatedTaskTitle(input.value));

    newForm.appendChild(input);
    newForm.appendChild(formButton);

    return newForm;
};

