const createdCard = (image, name) => {
    const {back_default} = image;

    const card = document.createElement('div');
    card.setAttribute('class','card');

    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', `${back_default}`);
    cardImage.setAttribute('class', 'card__image')

    const cardName = document.createElement('h3');
    cardName.setAttribute('class', 'card__name')
    cardName.innerText = name;


    card.appendChild(cardImage);
    card.appendChild(cardName);

    return card;

}
