
function createHtmlElements(parent,tag,classname,text){
    const node = document.createElement(tag);
    parent.appendChild(node);
    node.innerText=text;
    node.className=classname;
    return node;
}

function createList(){
    const main = document.querySelector('.main');
    const title = createHtmlElements(main,'h1','title','Tasks to do!!');
    const list = createHtmlElements(main,'ul','list','');
    console.log(tasks.type);
    tasks.forEach((task) => {
        const listItem = createHtmlElements(list,'li','list__item',task);
    });
    const inputContainer = createHtmlElements(main,'div','input','');
    const inputTask = createHtmlElements(inputContainer,'input','input','');
    inputTask.setAttribute('id','input');
    inputTask.setAttribute('type','text');
    inputTask.setAttribute('value','hola');
    const saveInput = createHtmlElements(inputContainer,'button','input__value','Save');

    let inputValue = document.getElementById('input').value;
    saveInput.onclick = function(){addTask(inputValue)};
}

