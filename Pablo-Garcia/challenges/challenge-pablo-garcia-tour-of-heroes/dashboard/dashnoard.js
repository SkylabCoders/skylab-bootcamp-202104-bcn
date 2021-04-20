const routing = {
    dashboard:'../dashboard/dashboard.html',
    heroes:'../hero/heroes.html',
}
const title = (title, type) => {
    const head = document.createElement(`${type}`);
    head.innerText = title;
    return head;
}
const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
]

const navigationls = (nav) =>{
const routes = Object.values(nav)
const routing = Object.getOwnPropertyNames(nav);
const navigation = document.createElement('ul');
  routing.forEach((item, index) =>{
            const navigationItem = document.createElement('li');
            const link = document.createElement('a');
            link.setAttribute('href', `${routes[index]}`);
            link.innerText = item;
            navigationItem.appendChild(link);
            navigation.appendChild(navigationItem);
        })
  return navigation;
 }
const heroeList = (data) =>{
   const heroes = data.slice(0, 3);
   const sectionHeroeList = document.createElement('section');
   const titleSection = title('Top Heroes', 'h2');

   const listHeroes = document.createElement('ul');
   listHeroes.classList.add('listing__heroes');
   heroes.forEach((item, index) =>{
        const {id, name} = item;
        const heroe = document.createElement('li');
        heroe.setAttribute('data_id', `${id}`);
        heroe.setAttribute('class', 'listing__heroes single___hero');
        heroe.innerText = name;
        console.log(heroe)
        listHeroes.appendChild(heroe);
   })

   sectionHeroeList.appendChild(titleSection);
   sectionHeroeList.appendChild(listHeroes);

   return sectionHeroeList;
}npm
const searBar = () =>{
    const form = document.createElement('form');
}

const printData = ()=>{
    const printInfo =document.querySelector('#root');
    const heading = title('Tour of Heroes', 'h1');
    const mainNav = navigation(routing);
    const topHero = heroeList(heroes);


    printInfo.appendChild(heading);
    printInfo.appendChild(mainNav);
    printInfo.appendChild(topHero);
}


window.onload = printData;