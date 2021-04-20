

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

const containerH2 = document.createElement("div")
document.body.appendChild(containerH2)
containerH2.classList.add("container-h2")

const topHeroesH2 = document.createElement("h2")
topHeroesH2.innerHTML = 'Top Heroes'
containerH2.appendChild(topHeroesH2)

const divHerosMenu = document.createElement("div")
document.body.appendChild(divHerosMenu)
divHerosMenu.classList.add("heros-container")

const narcoButton= document.createElement("a")
narcoButton.innerHTML= "Narco"
divHerosMenu.appendChild(narcoButton)

const bombastoButton= document.createElement("a")
bombastoButton.innerHTML= "Bombasto"
divHerosMenu.appendChild(bombastoButton)

const celeritasButton= document.createElement("a")
celeritasButton.innerHTML= "Celeritas"
divHerosMenu.appendChild(celeritasButton)

const magnetaButton= document.createElement("a")
magnetaButton.innerHTML= "Magneta"
divHerosMenu.appendChild(magnetaButton)

const searchContainer = document.createElement("div")
document.body.appendChild(searchContainer)
searchContainer.classList.add("search-container")

const heroSearchH2 = document.createElement("label")
heroSearchH2.innerHTML = 'Hero search'
searchContainer.appendChild(heroSearchH2)

const heroSeachInput = document.createElement("input")
searchContainer.appendChild(heroSeachInput)

const messageDiv = document.createElement("div")
document.body.appendChild(messageDiv)
messageDiv.classList.add("container-msg")

const messagesH2 = document.createElement("h2")
messagesH2.innerHTML = 'Messages'
messageDiv.appendChild(messagesH2)

const clearMessagesBtn = document.createElement("button")
clearMessagesBtn.innerHTML = "Clear messages"
messageDiv.appendChild(clearMessagesBtn)

const heroService = document.createElement("div")
heroService.innerHTML = "HeroService: fetched heroes"
document.body.appendChild(heroService)



