let body = document.querySelector('body');

function createheader(){
    let header = document.createElement('header');
    let title = document.createElement('h1');
    title.textContent ="Tour of Heroes";
    header.appendChild(title);
    let list = document.createElement('ul');
    //let objList;
    //let link;
    for(let i=0 ; i<2 ; i++){
        let objList = document.createElement('li');
        objList.classList.add(`enlace${i}`);
        let link = document.createElement('a');
        link.href=`./css/style${i}.css`;
        if (i === 0 ){link.innerHTML = "Dashboard"};
        if (i === 1 ){link.innerHTML = "Heroes"};
        objList.appendChild(link);
        list.appendChild(objList);
    }
    header.appendChild(list);
    body.appendChild(header);
    
}
    
function createbodier(){
    let bodier = document.createElement('bodier');
    let subhead = document.createElement('h3');
    subhead.textContent = "top heroes";
    this.header.appendChild(bodier);
    bodier.appendChild(subhead);
    let fourthTop = document.createElement('ul');
    let fourthObjli = document.createElement('li');
    let fourthlink;
}






createheader();
