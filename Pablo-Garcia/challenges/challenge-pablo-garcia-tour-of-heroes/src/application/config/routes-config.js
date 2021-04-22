const routing = {
    dashboard:'../dashboard/dashboard.html',
    heroes:'../heroe/heroes.html',
}


const navigation = (data)=>{
    const routes = Object.getOwnPropertyNames(data);
    const routesLinks = Object.values(data);

    const wrapper_nav = document.createElement('ul');
    routes.forEach((item, index) =>{
        let wrapper_nav__item = document.createElement('li');
        let wrapper_nav__link = document.createElement('a');
        wrapper_nav__link.setAttribute('href', routesLinks[index]);
        wrapper_nav__link.innerHTML = item;
        wrapper_nav__item.appendChild(wrapper_nav__link);
        wrapper_nav.appendChild(wrapper_nav__item);
    })
    return wrapper_nav;
}





