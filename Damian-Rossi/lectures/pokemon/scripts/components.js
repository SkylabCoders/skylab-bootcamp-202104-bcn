function createHtmlNode(node, content, attribute, attributeValue, className, link = null)
{
    let newNode = document.createElement(node);
    newNode.innerText = content;
    newNode.setAttribute(attribute, attributeVFdraalue);
    newNode.className = className;
    if(link) {
        newNode.href= link;
    }
    return newNode;
}

function drawPokeListInHtml(data, selector) {
    let appender = document.getElementById(selector);
    appender.innerHTML = '';
    data.forEach(item => {
        let newNode = createHtmlNode('li', '', 'id', `${item.name}-list-item`, 'pokelist__list-item');
        let innerNode = createHtmlNode('a', item.name, 'id',  `${item.name}-list-item`, 'pokelist__list-item', item.url);
            newNode.append(innerNode);
        appender.append(newNode);
    })
}

function drawPokelist(data){
    let pokeLIstNodeContainer = getTagContainer('pokelist', 'ul');
    document.getElementById('main').append(pokeLIstNodeContainer);
    drawPokeListInHtml(data, 'pokelist');
    let prevbutton = createHtmlNode('button', 'Previous', 'id', 'pokelist-prev-button', 'button button-previous');
    prevbutton.classList.add( !store.previous ? 'button--disabled' : '');
    let nextButton =  createHtmlNode('button', 'Next', 'id', 'pokelist-next-button', 'button button-next');
    nextButton.classList.add( !store.next ? 'button--disabled' : '');
    if (!store.previous) { prevbutton.setAttribute('disabled', true)}
    if (!store.next) { nextButton.setAttribute('disabled', true)}
    prevbutton.onclick =(() => paginate(store.previous));
    nextButton.onclick =(() => paginate(store.next));
    
    pokeLIstNodeContainer.append(prevbutton);
    pokeLIstNodeContainer.append(nextButton);
    
}

function getTagContainer(idReferer, tagname)
{
    let node = document.getElementById(idReferer) ?
        document.getElementById(idReferer) :
        document.createElement(tagname);
        node.setAttribute('id', idReferer);
    return node;
}

function paginate(url) {
    
    // let paramValue = new URLSearchParams(url).get('offset');
    let offset = url.split('?')[1].split('offset')[1].replace('=', '').split('&')[0];
    debugger;
    let rowspercall = url.split('?')[1].split('limit')[1].replace('=', '');
    store.currentIndex = parseInt(offset);
    store.rowspercall = parseInt(rowspercall);

    fetchListFromService(url);
}

function drawError(errorMessage) {
    let errorMessageNode = createHtmlNode('div', errorMessage, 'id', 'error-blob', 'blob__error-message');
    container = document.getElementById('main').append(errorMessageNode);

}