const mainContent = document.querySelector('.content');
const heroesList = generateElement({ type: 'ul', classes: ['heroes-list'] });
mainContent.append(heroesList);

getAllHeroes('./../../store/superHeroData.json')
  .then((data) => {
    data.slice(0, 10).forEach((heroe) => {
      const li = generateElement({
        type: 'li',
        classes: ['heroes-list__item'],
        context: heroe.name,
      });
      const anchor = generateElement({
        type: 'a',
        classes: [],
      });
      li.append(anchor);
      heroesList.append(li);
    });
  });
