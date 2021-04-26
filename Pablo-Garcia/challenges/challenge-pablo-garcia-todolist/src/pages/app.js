import { createForm } from "./form.js";
import { button } from "./button.js";

const form = createForm();
const addTask = button('Add Task',)

const body = document.querySelector('#root');

/*Render app*/
body.appendChild(form);


