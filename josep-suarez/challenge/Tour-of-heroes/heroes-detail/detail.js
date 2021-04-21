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
   const typeText = document.createElement("input");

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
let detailsText = document.createElement("p");
siteOfButtons.appendChild(detailsText)
const writingDetails = () => {
    detailsText.innerHTML = typeText.value + " details of heroe";
}

const heroeClickedName = sessionStorage.getItem('heroeClickedName');
console.log('heroeClickedName', heroeClickedName);
let detailsHeroes = document.getElementById("detailsHeroes");
let especific = document.createElement("p");
detailsHeroes.appendChild(especific).innerHTML = heroeClickedName;

typeText.addEventListener("keyup",writingDetails);
window.onload = startDetail();