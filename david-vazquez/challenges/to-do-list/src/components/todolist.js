
function createHtmlElements(parent,tag,classname,text){
    const node = document.createElement(tag);
    parent.appendChild(node);
    node.innerText=text;
    node.className=classname;
    return node;
}

function createList(){
    const main = document.querySelector('.main');
    const title = createHtmlElements(main,'h1','title','To do list');
    const inputContainer = createHtmlElements(main,'div','input__container','');
    const inputTask = createHtmlElements(inputContainer,'input','input','');
    inputTask.setAttribute('id','input');
    inputTask.setAttribute('type','text');
    const saveInput = createHtmlElements(inputContainer,'button','input__value','+');  
    saveInput.setAttribute('onclick','addTask()');
    const list = createHtmlElements(main,'ul','list','');
}

const addingTask = (myTasks)=>{
    const list = document.querySelector('.list');
    list.innerHTML='';
    myTasks.forEach(({id, task, done})=>{
        const listItem = createHtmlElements(list,'li','list__item',`${task}`);
        const doneButton = createHtmlElements(listItem,'button','list__button list__button--done','');
        doneButton.onclick = (()=>taskDone(id));
        const deleteButton = createHtmlElements(listItem,'button','list__button list__button--delete','');  
        deleteButton.onclick = (() => deleteTask(id));
        if(done){
            listItem.classList.add('list__item--done');
        }
    });
    console.log(myTasks);
}
