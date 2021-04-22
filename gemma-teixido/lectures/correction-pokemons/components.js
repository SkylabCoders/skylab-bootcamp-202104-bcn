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
    appender.innerHTML = "";
    data.forEach(pokemonData => {
        let newNode = createHtmlNode('li', pokemonData.name, 'id', `${pokemonData.name}-list-item`, 'pokelist__list-item');
            let innerNode = createHtmlNode('a', pokemonData.name, 'id', `${pokemonData.name}-list-item`, 'pokelist__list-item', pokemonData.url);
            newNode.append(innerNode);
        appender.append(newNode);
    });
}