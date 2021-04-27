 function catchPokemonByOrder(order) {
    return `https://pokeapi.co/api/v2/pokemon/${order*pageIndex}/`
}

function  createNode(elementType, fatherNode, classAtribute, innerData, position) {
    let newNode = document.createElement(`${elementType}`);
    newNode.className = (`'${classAtribute}'`);
    if (innerData === null) { } else { newNode.innerHTML = `'${innerData}'`; }
    if (fatherNode === null) { } else { fatherNode.insertAdjacentElement(position, newNode); }
    return newNode
}

function insertCreature(url) {
    fetch(url)
        .then(response => response)
        .then(data => {
            let blockList = document.createElement('li');
            blockList.calssName = 'creature';
            let creatuteSprite = createNode('img', blockList, `creature__sprite`, null, 'afterbegin');
            console.log(creatuteSprite)
            creatuteSprite.setAttribute('src',`${data.sprites.front_default}`);
            let textList = document.createElement('div');
            textList.className = 'creature__text-info';
            let creatuteOrder = createNode('div', textList, `creature__order`,`${data.order}`,'beforeend');
            let creatuteName = createNode('div', textList, `creature__name`, `${data.name}`);
            list.insertAdjacentElement('afterbegin', creatuteSprite+textList)
        })
    .catch(error => console.error(error))
}

function showCreaturesList(pageIndex) {
    list = {}
    for (let i = 1; i < 6; i++) {
        insertCreature(`https://pokeapi.co/api/v2/pokemon/${i*pageIndex}/`)
    }
}

function insertNavigationButtons() {
    const buttonBox = createNode(div, fatherNode, classAtribute, innerData, 'beforeend')
}
