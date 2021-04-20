const heroNameDetails = document.createElement("h2")
document.body.appendChild(heroNameDetails)

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


