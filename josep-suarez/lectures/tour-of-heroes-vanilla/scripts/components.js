//array de objetos con la que vamos a trabajar en las paginas!
const heroes =
    [
        { id:"11", name: 'Dr Nice' },
        { id:"12", name: 'Narco' },
        { id:"13", name: 'Bombasto' },
        { id:"14", name: 'Celeritas' },
        { id:"15", name: 'Magneta' },
        { id:"16", name: 'RubberMan' },
        { id:"17", name: 'Dynama' },
        { id:"18", name: 'Dr IQ' },
        { id:"19", name: 'Magma' },
        { id:"20", name: 'Tornado' }
   ];

//creo el contenido html y le incluyo el id y el name del heroe
// lo meto en la url en cuanto le doy click!
const modules = ({id, name}) => {
    let newContent = `<div class="heroe-item" id="${id}" >
        <a href="./hero-detail.html?heroID=${id}">${name}</a></div>`;
    var node = document.getElementById('loader');
    node.innerHTML += newContent;
};
//funcion que llama a la anterior para meter los heroes en html
function appendElement(heroe) {
    modules(heroe);
}

//para cada heroe lo imprimo en una lista con las dos funciones anteriores
heroes.forEach(heroe => { appendElement(heroe)});

//busca la hero ID en el url y lo busca en el store, para imprimirlo con el appendElement en el otro html!
let heroID = getHeroIDFromUrl(location.search);
    appendElement(heroes.find(heroe => heroe.id.toString()=== heroID));

//funcion que coge desde la url el heroID, con el new urlsearchparams!
function getHeroIDFromUrl(url) {
    return new URLSearchParams(url).get('heroID');
}