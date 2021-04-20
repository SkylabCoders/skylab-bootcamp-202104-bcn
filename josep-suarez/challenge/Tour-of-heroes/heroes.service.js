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
const startDetail = () => {
    let buttonDash = document.createElement("a");
    let buttonHeroes = document.createElement("a");
    buttonDash.setAttribute("class","button-dash");
    buttonHeroes.setAttribute("class", "button-heroes");
    buttonDash.href = "../dashboard/dashboard.html"
    buttonHeroes.href = "../heroes/heroes.html"
    let titleHeroes = document.createElement("h2");
    buttonDash.setAttribute("href","../dashboard/dashboard.html");
    siteOfButtons.appendChild(buttonDash).innerHTML = "Dashboard";
    siteOfButtons.appendChild(buttonHeroes).innerHTML = "Heroes";
    siteOfButtons.appendChild(titleHeroes).innerHTML = "My Heroes";
    siteOfButtons.appendChild(typeText);
}
const startPage = () => {
    const buttonDash = document.createElement("a");
    const buttonHeroes = document.createElement("a");
    buttonDash.setAttribute("class","button-dash");
    buttonHeroes.setAttribute("class", "button-heroes");
    buttonDash.href = "../dashboard/dashboard.html"
    buttonHeroes.href = "../heroes/heroes.html"
    const titleHeroes = document.createElement("h2");
    siteOfButtons.appendChild(buttonDash).innerHTML = "Dashboard";
    siteOfButtons.appendChild(buttonHeroes).innerHTML = "Heroes";
    siteOfButtons.appendChild(titleHeroes).innerHTML = "Top Heroes";
    for (hero in heroesLinks){
            const button = document.createElement("a");
            let textHeroe = document.createTextNode(heroesLinks[hero]);
            button.appendChild(textHeroe);
            button.title = heroesLinks[hero];
            button.href = "../dashboard/dashboard.html";
            siteOfButtons.appendChild(button);
    }
}