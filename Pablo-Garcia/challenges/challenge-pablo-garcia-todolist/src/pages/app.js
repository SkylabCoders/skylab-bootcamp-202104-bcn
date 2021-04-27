import { createForm } from "../components/form/form.js";
import { createTasks } from "../components/tasks/tasks.js";

createTasks();
const form = createForm();
const formNode = document.querySelector('#root');
const tasksNode = document.querySelector('#list');

/*Render app*/
formNode.appendChild(form);


