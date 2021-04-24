const getMainSection = document.querySelector('main');

const createElements = (tag, parent, className, innerHTML = null) => {
  const newTag = document.createElement(tag);
  parent.appendChild(newTag);
  newTag.classList.add(className);
  newTag.innerHTML = innerHTML;
};

const mainTitle = createElements('h1', getMainSection, 'title', 'To Do List');
const formTask = createElements('form', getMainSection, 'form-create');
const inputToCreateNewTask = createElements('input', getMainSection, 'form-create__input');
const createButton = createElements('button', getMainSection, 'form-create__button', 'Add Task');

const createNeTaskAction = () => {
  createButton.onclick(() => {
  });
};

const addMultipleAttributes = () => {
  inputToCreateNewTask.setAttribute('type', 'text');
  inputToCreateNewTask.setAttribute('name', 'newTask');
  inputToCreateNewTask.setAttribute('required', 'required');
  inputToCreateNewTask.setAttribute('pattern', '[aA-zZ]{3,40}');
  inputToCreateNewTask.setAttribute('title', 'It cant be empty');
  inputToCreateNewTask.setAttribute('placeholder', 'Detail your task');
};
// addMultipleAttributes();

// <form class="form-register">
//             <input class="username" type="text" name="username" required pattern="[aA-zZ]{3,15}"
//                 title="Únicamente se aceptan letras" placeholder="Escriba aquí su nombre">
//             <button class="button-user"><i class="fas fa-user-ninja"></i></button>
//         </form>
