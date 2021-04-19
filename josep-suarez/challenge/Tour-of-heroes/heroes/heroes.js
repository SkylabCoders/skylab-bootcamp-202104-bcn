const heroesLinks = 
    {
    narco : "narco",
    bombasto: "bombasto",
    celeritas: "celeritas",
    magenta: "magenta"
}
const startPage = () => {
    let siteOfButtons = document.getElementById("header-heroes");
    let buttonDash = document.createElement("button");
    let buttonHeroes = document.createElement("button");
    let titleHeroes = document.createElement("h2");
    siteOfButtons.appendChild(buttonDash).innerHTML = "Dashboard";
    siteOfButtons.appendChild(buttonHeroes).innerHTML = "Heroes";
    siteOfButtons.appendChild(titleHeroes).innerHTML = "Top Heroes";
    for (propertyName in heroesLinks){
            let button = document.createElement("a");
            let textHeroe = document.createTextNode(heroesLinks[propertyName]);
            button.appendChild(textHeroe);
            button.title = heroesLinks[propertyName];
            button.href = "../dashboard/dashboard.html";
            siteOfButtons.appendChild(button);
    }
}
window.onload = startPage();