const URL= '../../../src/common/utils/dataHeroes.json'
const getDataJson = () => {
    fetch(URL)
        .then(function(res) {
            const heroes = res.json();
            return heroes;
        })
        .then(function(data){
           const heroesSlide = data.slice(data.length-4, data.length);
           const wrapperTopHeroesSlide = document.createElement('ul');
            wrapperTopHeroesSlide.setAttribute('class', 'slideTopHeroes');
            heroesSlide.forEach(({id, name}) =>{
               const wrapperTopHeroesSlide__item = document.createElement('li');
               const wrapperTopHeroesSlide__item__link = document.createElement('a');
               wrapperTopHeroesSlide__item__link.setAttribute('href',`../../../src/pages/detail/detail.html?id=${id}`);
               wrapperTopHeroesSlide__item__link.innerHTML = `${name}`;
               wrapperTopHeroesSlide__item.appendChild(wrapperTopHeroesSlide__item__link);
               wrapperTopHeroesSlide.appendChild(wrapperTopHeroesSlide__item);

           })
            const insertHeroes = document.querySelector('.header__wraper');
            insertHeroes ? insertHeroes.append(wrapperTopHeroesSlide) : null;

        })
        .catch(function(error) {
            console.log(error);
        });


}

