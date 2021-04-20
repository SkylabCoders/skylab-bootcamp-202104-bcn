const heroesLinks = 
    {
    narco : "narco",
    bombasto: "bombasto",
    celeritas: "celeritas",
    magenta: "magenta"
}
const siteOfButtons = document.getElementById("header-heroes");
siteOfButtons.setAttribute("class","site-buttons");
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
    for (propertyName in heroesLinks){
            const button = document.createElement("a");
            let textHeroe = document.createTextNode(heroesLinks[propertyName]);
            button.appendChild(textHeroe);
            button.title = heroesLinks[propertyName];
            button.href = "../dashboard/dashboard.html";
            siteOfButtons.appendChild(button);
    }
}
window.onload = startPage();