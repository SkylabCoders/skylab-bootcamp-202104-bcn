// const modules = ({id, name}) => {
//     let newContent = `<div class="heroe-item" id="${id}" >
//         <a href="./hero-detail.html?heroID=${id}">${name}</a></div>`;
//     let node = document.getElementById('dashboardHeroes');
//     node.innerHTML += newContent;
// };
// function appendElement(heroe) {
//     modules(heroe);
// }
// heroes.forEach(heroe => { appendElement(heroe)});
// let heroID = getHeroIDFromUrl(location.search);
//     appendElement(heroes.find(heroe => heroe.id.toString()=== heroID));
//     function getHeroIDFromUrl(url) {
//         return new URLSearchParams(url).get('heroID');
//     }

const startDash = () => {
    siteOfButtons.appendChild(listHeroes);
    heroes.forEach(hero => {
            const liElement = document.createElement("li");
            const list = document.createElement("button");
            const typeText = document.createElement("input");
            list.onclick = () => heroeClicked(hero.name);
            list.innerHTML = hero.id + "  "+hero.name;
            liElement.appendChild(list);
            listHeroes.appendChild(liElement);
            let detailsText = document.createElement("p");
            siteOfButtons.appendChild(detailsText)
            const writingDetails = () => {
                detailsText.innerHTML = typeText.value + " details of heroe";
            }
            typeText.addEventListener("keyup",writingDetails);
    })
}

const startDetail = () => {
    const typeText = document.createElement("input");
    siteOfButtons.appendChild(typeText);
    let detailsText = document.createElement("p");
            siteOfButtons.appendChild(detailsText)
            const writingDetails = () => {
                detailsText.innerHTML = typeText.value + " details of heroe";
            }
            typeText.addEventListener("keyup",writingDetails);
}

const startPage = () => {
    for (hero in heroesLinks){
            const button = document.createElement("a");
            let textHeroe = document.createTextNode(heroesLinks[hero]);
            button.appendChild(textHeroe);
            button.title = heroesLinks[hero];
            button.href = "../dashboard/dashboard.html";
            siteOfButtons.appendChild(button);
    }
}