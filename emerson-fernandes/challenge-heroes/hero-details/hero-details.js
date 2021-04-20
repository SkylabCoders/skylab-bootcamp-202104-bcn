
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

const heroNameDetails = document.createElement("h2")
document.body.appendChild(heroNameDetails)

const divID = document.createElement("div")
document.body.appendChild(divID)
divID.innerHTML = "id:"

const heroInput = document.createElement("div")
document.body.appendChild(heroInput)

let labelHero = document.createElement("label")
heroInput.appendChild(labelHero)    
labelHero.innerHTML = "Hero name:"

let inputName = document.createElement("input")
heroInput.appendChild(inputName)

const goBackButton = document.createElement("button")
heroInput.appendChild(goBackButton)    
goBackButton.innerHTML = "go back"

const saveButton = document.createElement("button")
heroInput.appendChild(saveButton)
saveButton.innerHTML = "save" 

function nameHero(name){
    heroNameDetails.innerText = name
}

nameHero(inputName)


