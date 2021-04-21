function createElement(tag,className=null,innerText=null,parent=null){
    const newElement = document.createElement(tag);
    newElement.classList(className)
    newElement.innerHTML = innerText;
    parent.appendChild(newElement)

    return newElement;

}
