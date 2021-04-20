const modules = ({id, name}) => {
    let newContent = `<div class="heroe-item" id="${id}" >
        <a href="./hero-detail.html?heroID=${id}">${name}</a></div>`;

    var node = document.getElementById('loader');
    node.innerHTML += newContent;
};
function appendElement(heroe) {
    modules(heroe);
}