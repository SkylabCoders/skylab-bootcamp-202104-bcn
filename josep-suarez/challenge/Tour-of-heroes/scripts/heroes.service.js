
const fetchHeroesData = () => {
    return fetch(".././superheroes-data/superHeroData.json")
    .then((response)=>{
       return response.json();
    })
    .then(data => { 
        startDash(data);
    })
}
const prueba = fetchHeroesData();

const startDash = (data) => {
    const dashboard = document.getElementById("dashboard");
    const listHeroes = document.createElement("ul");
    dashboard.appendChild(listHeroes);
    data.forEach(hero => {
            const liElement = document.createElement("li");
            const list = document.createElement("a");
            const typeText = document.createElement("input");
            // list.onclick = () => heroeClicked(hero.id);
            list.innerHTML = hero.id + "  "+hero.name;
            liElement.appendChild(list);
            list.href = (".././heroes-detail/detail.html?heroID="+hero.id);
            listHeroes.appendChild(liElement);
            let detailsText = document.createElement("p");
            dashboard.appendChild(detailsText)
            const writingDetails = () => {
                detailsText.innerHTML = typeText.value + " details of heroe";
            }
            typeText.addEventListener("keyup",writingDetails);
        })
    }

function getHeroIDFromUrl(url) {
        return new URLSearchParams(url).get('heroID');
}
let heroID = getHeroIDFromUrl(location.search);

const startDetail = () => {
    const typeText = document.createElement("input");
    siteOfButtons.appendChild(typeText);
    let detailsText = document.createElement("p");
            siteOfButtons.appendChild(detailsText)
            const writingDetails = () => {
                detailsText.innerHTML = typeText.value + " details of heroe";
            }
            typeText.addEventListener("keyup",writingDetails);

            
    return fetch(".././superheroes-data/superHeroData.json")
    .then((response)=>{
       return response.json();
    })
    .then(data => { 
        let prueba = data.find(hero => {
            if(hero.id.toString() === heroID){
            return hero.name
            }
        });
        
        siteOfButtons.appendChild(detailsText).innerHTML = prueba.name;
    })
}

const startPage = () => {
    fetchHeroesData();
    heroes.slice(1,5).forEach(hero => {
            const button = document.createElement("a");
            let textHeroe = document.createTextNode(hero.name);
            button.appendChild(textHeroe);
            button.title = hero.name;
            button.href = "../dashboard/dashboard.html";
            siteOfButtons.appendChild(button);
    })
}

