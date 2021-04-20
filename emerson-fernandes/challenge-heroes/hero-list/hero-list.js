const tourOfHerosH1 = document.createElement("h1");
tourOfHerosH1.innerHTML ='Tour of Heroes'
document.body.appendChild(tourOfHerosH1)

const dashBoard = document.createElement("nav")
document.body.appendChild(dashBoard)

const buttonDashBoard = document.createElement("a")
buttonDashBoard.setAttribute('href','../dashboard/dashboard.html')
buttonDashBoard.innerHTML = "DashBoard"
dashBoard.appendChild(buttonDashBoard)

const buttonHeroes = document.createElement("a")
buttonHeroes.setAttribute('href','../hero-list/hero-list.html')
buttonHeroes.innerHTML = "Heroes"
dashBoard.appendChild(buttonHeroes)

const myHeroesH2= document.createElement("h2")
myHeroesH2.innerHTML = "My Heroes"
document.body.appendChild(myHeroesH2)

const heroNameContainer = document.createElement("div")
document.body.appendChild(heroNameContainer)

const heroNameLabel = document.createElement("label")
heroNameLabel.innerHTML="Hero name"
heroNameContainer.appendChild(heroNameLabel)

const inputHeroName = document.createElement("input")
heroNameContainer.appendChild(inputHeroName)

const buttonAddHero = document.createElement("button")
buttonAddHero.innerHTML= "Add hero"

function heroList(){
    let ulHero = document.createElement("ul")
    document.body.appendChild(ulHero)
    for(let i = 0;i < arguments.length;i++){
        let liHero = document.createElement("li")
        liHero.innerHTML= arguments[i]
        ulHero.appendChild(liHero)
        let linkHero = document.createElement("a")
        liHero.appendChild(linkHero)
        linkHero.setAttribute("href",'../hero-details/hero-details.html')
    }
}
heroList('Dr nice','Narco','Bombasto','Celeritas')
