function createList(){
    const main = document.querySelector('.main');
    const title = createHtmlElements(main,'h1','title','Tasks to do!!');
    const list = createHtmlElements(main,'ul','list','');
    tasks.forEach(task => {
        const listItem = createHtmlElements(list,'li','list__item',task);
    })
    const inputTask = createHtmlElements(main,'input','input','');
    const valueInput = document.querySelector('.input').value;
    const saveInput = createHtmlElements(main,'button','input__value','Save');
    saveInput.onclick = 
    tasks.push(valueInput);
}

