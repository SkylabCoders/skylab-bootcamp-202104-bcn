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
    data.forEach(data => {
        let newNode = createHtmlNode('li', data.name, 'id', data.name, 'pokelist__list-item', data.url);
        appender.append(newNode);
    });
}