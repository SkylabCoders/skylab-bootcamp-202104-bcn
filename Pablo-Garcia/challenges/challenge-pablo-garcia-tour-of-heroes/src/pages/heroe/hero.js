const URL= '../../../src/common/utils/dataHeroes.json'
const getDataJson = () => {
    fetch(URL)
        .then(function(res) {
            return res.json();
        })
        .then(function(data){
           const heroesSlide = data.slice(data.length-4, data.length);
           const wrapperTopHeroesSlide = document.createElement('ul');
            wrapperTopHeroesSlide.setAttribute('class', 'slideTopHeroes');
            heroesSlide.forEach(({id, name}) =>{
               const wrapperTopHeroesSlide__item = document.createElement('li');
               const wrapperTopHeroesSlide__item__link = document.createElement('a');
               wrapperTopHeroesSlide__item__link.setAttribute('href',`../../../src/pages/detail/detail.html?_${id}`);
               wrapperTopHeroesSlide__item__link.innerHTML = `${name}`;
               wrapperTopHeroesSlide__item.appendChild(wrapperTopHeroesSlide__item__link);
               wrapperTopHeroesSlide.appendChild(wrapperTopHeroesSlide__item);

           })
            const node = document.getElementById('root');
            node.append(wrapperTopHeroesSlide)
        })
        .catch(function(error) {
            console.log(error);
        });


}

