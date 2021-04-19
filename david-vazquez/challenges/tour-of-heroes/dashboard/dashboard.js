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

function generateHeader(){
    const container = document.querySelector('.container');
    const header = document.createElement('header');
    header.className='header';
    container.appendChild(header);
    generateTitle(header);
    generateNav(header);
    generateDashboard(container);
}

function generateTitle (header){ 
    const title = document.createElement('h1');
    header.appendChild(title);
    title.className='header__title';
    title.innerText = 'Tour of Heroes';   
}

function generateNav (header){
    const nav = document.createElement('nav');
    header.appendChild(nav);
    nav.className='header__nav';
    generateNavButton(nav,'Dashboard');
    generateNavButton(nav,'Heroes');
}

function generateNavButton (nav, text){
    const button = document.createElement('button');
    button.innerText = text;
    nav.appendChild(button);
    button.className='nav__button';
}

function generateDashboard (container){
    const dashboardContainer = document.createElement('div');
    container.appendChild(dashboardContainer);
    dashboardContainer.className='dashboard';
    const dashboardTitle = document.createElement('h2');
    dashboardContainer.appendChild(dashboardTitle);
    dashboardTitle.className='dashboard__title';
    dashboardTitle.innerText='Top Heroes';
    generateList(dashboardContainer);
    
}

function generateList(dashboardContainer){
    const dashboardList = document.createElement('ul');
    dashboardContainer.appendChild(dashboardList);
    dashboardList.className='dashboard__list';
    generateItems(dashboardList,'Narco');
    generateItems(dashboardList,'Bombasto');
    generateItems(dashboardList,'Celeritas');
    generateItems(dashboardList,'Magneta');

}

function generateItems(dashboardList, text){
    const dashboardItems = document.createElement('li');
    dashboardList.appendChild(dashboardItems);
    dashboardItems.className='list__items';
    dashboardItems.innerText=text;
}

