const routing = {
    dashboard:'../dashboard/dashboard.html',
    heroes:'../hero/heroes.html',
}

const title = (title, type) => {
    const head = document.createElement(`${type}`);
    head.innerText = title;
    return head;
}
const navigation = (nav) =>{
    const routes = Object.values(nav)
    console.log(routes)
    const routing = Object.getOwnPropertyNames(nav)
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


const printData = ()=>{
    const printInfo =document.querySelector('#root');
    heading = title('Tour of Heroes', 'h1');
    mainNav = navigation(routing)


    printInfo.appendChild(heading);
    printInfo.appendChild(mainNav);


}


window.onload = printData;