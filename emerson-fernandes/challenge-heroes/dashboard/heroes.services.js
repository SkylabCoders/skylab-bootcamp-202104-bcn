/* function heroList(){
    let ulHero = document.createElement("ul")
    document.body.appendChild(ulHero)
    for(let i = 0;i < arguments.length;i++){
        let liHero = document.createElement("li")
        liHero.innerHTML= arguments[i].name
        ulHero.appendChild(liHero)
    }
} */

let ulHero = document.createElement("ul")
document.body.appendChild(ulHero)

function getData(){ 
    
    fetch("./../store/superHeroData.json")
    .then(response => response.json())
    .then(data =>{});
}





/* getData() */


 //exercicio1
getData(param= null){
    return fetch('url')
    .then(response => response.json())
    .then(data => data)
    .catch(e => {console.error('-> lean bastados!', e)})
}

let datos = getData().then(myData => {console.log(myData) return myData})


//exercio new fetch

getData(param= null){
    return fetch(`url`)
    .then(response => response.json())
    .then(data => {
        return fetch(`url`)
        .then(userReponse => userReponse.json())
        .then(responseUser => respondeUser)
    })
    .catch(e => {console.error('-> lean bastados!', e)})
}

// try, async

getNoombre = async (idPost) =>{
    try{
        const rta = await fetch(`url${idPost}`)
            const post = await rta.json();
            const rtaUser = await fetch(`url${post.userID}`)
            const user = await rtaUser.json()
            console.log(user)
    }catch(error{
        console.warning('-',error)
    })
}