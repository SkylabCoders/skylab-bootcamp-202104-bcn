function createHtmlElements(parent,tag,classname,text){
    const node = document.createElement(tag);
    parent.appendChild(node);
    node.innerText=text;
    node.className=classname;
    return node;
}

