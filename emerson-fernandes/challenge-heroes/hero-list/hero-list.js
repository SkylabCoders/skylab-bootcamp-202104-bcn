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

    }
}
heroList()
