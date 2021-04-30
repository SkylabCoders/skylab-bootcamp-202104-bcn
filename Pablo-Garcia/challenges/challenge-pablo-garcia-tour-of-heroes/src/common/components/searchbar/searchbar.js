const inputSearch = () => {

    const formSearchCode = document.createElement('form');
    const input = document.createElement('input');

    input.setAttribute('type','text');
    input.setAttribute('placeholder','search a heroe...');
    input.setAttribute('class','input__searchbar');

    formSearchCode.append(input)
    const insertHeroes = document.querySelector('#root');
    insertHeroes.parentNode.insertBefore(formSearchCode, insertHeroes.nextSibling);

    return true;
}
