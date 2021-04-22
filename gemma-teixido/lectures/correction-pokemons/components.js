function createHtmlNode(node, content, attribute, attributeValue, className, a = null) {

    let newNode = document.createElement(node);
    newNode.innerText = content;
    newNode.setAttribute(attribute, attributeValue);
    newNode.className = className;
    if (a) {
        newNode.href = a;
    }

    return newNode;
}

function drawHtml(data, selector) {
    let appender = document.getElementById(selector);
    appender.innerHTML = '';
    data.forEach(pokemonData => {
        let newNode = createHtmlNode('li', '', 'id', `${pokemonData.name}-list-item`, 'pokelist__list-item');
            let innerNode = createHtmlNode('a', pokemonData.name, 'id', `${pokemonData.name}-list-item`, 'pokelist__list-item', pokemonData.url);
            newNode.append(innerNode);
        appender.append(newNode);
    });
}

function drawPokeList(data) {
    let pokeListNodeContainer = getTagContainer('pokelist', 'ul');
    document.getElementById('main').append(pokeListNodeContainer);
    drawHtml(data, 'pokelist');
}

function getTagContainer(idReferer, tagName) {
    let node = document.getElementById(idReferer) ? 
    document.getElementById(idReferer) : 
    document.createElement(tagName); 
    node.setAttribute('id', idReferer);
    return node;
}