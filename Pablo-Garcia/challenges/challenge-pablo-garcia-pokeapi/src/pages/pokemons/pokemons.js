

const renderPokemons = (API) =>{
  const wrapper__cards = document.createElement('div');
  wrapper__cards.setAttribute('class', 'cards_pokemon');

  getData(API)
}
const getData = (API) => {
  fetch(API)
    .then(response => response.json())
    .then(data => {
     data.results.forEach(({url}) =>{
       getPokemonUrl(url);
     })
    })
    .catch(function(error) {
      console.log(error);
    });
}

const getPokemonUrl = (url_Pokemon) =>{
  console.log(url_Pokemon);
  fetch(url_Pokemon)
    .then(res => res.json())
    .then(data => {
      const {sprites, name} = data;
      createdCard(sprites, name);
    })
    .catch(function(error) {
      console.log(error);
    });
}

const createList = (listing) => {
  const wrapper_list = document.createElement('ul');
  wrapper_list.setAttribute('class', 'wrapper_list');
  listing.forEach(item => {
    let itemList = document.createElement('li');
    itemList.setAttribute('class', 'wrapper__list_item');
    itemList.appendChild(item);
    wrapper_list.appendChild(itemList);

     const parentNode = document.querySelector('#root');
      parentNode.appendChild(wrapper_list)
  })
}

