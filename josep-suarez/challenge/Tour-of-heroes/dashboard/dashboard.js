const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
   ]
    const siteOfButtons = document.getElementById("header-heroes");
    siteOfButtons.setAttribute("class","site-buttons");
    const buttonDash = document.createElement("a");
    const buttonHeroes = document.createElement("a");
    buttonDash.setAttribute("class","button-dash");
    buttonHeroes.setAttribute("class", "button-heroes");
    buttonDash.href = "../dashboard/dashboard.html"
    buttonHeroes.href = "../heroes/heroes.html"
    const titleHeroes = document.createElement("h2");
    const listHeroes = document.createElement("ul");
    const heroeClicked = (name) => {
        sessionStorage.setItem('heroeClickedName', name);
        window.location.replace("../heroes-detail/detail.html");
}

const startDash = () => {
    siteOfButtons.appendChild(buttonDash).innerHTML = "Dashboard";
    siteOfButtons.appendChild(buttonHeroes).innerHTML = "Heroes";
    siteOfButtons.appendChild(titleHeroes).innerHTML = "My Heroes";
    buttonDash.href = "../heroes/heroes.html"
    siteOfButtons.appendChild(listHeroes);
    heroes.forEach(hero => {
            const liElement = document.createElement("li");
            const list = document.createElement("button");
            list.onclick = () => heroeClicked(hero.name);
            list.innerHTML = hero.id + "  "+hero.name;
            liElement.appendChild(list);
            listHeroes.appendChild(liElement);
    })
    
}
const typeText = document.createElement("input");
let detailsText = document.createElement("p");
siteOfButtons.appendChild(detailsText)
const writingDetails = () => {
    detailsText.innerHTML = typeText.value + " details of heroe";
}
typeText.addEventListener("keyup",writingDetails);


window.onload = startDash();