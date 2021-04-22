const createNavigation = (routing) => {
  const routes = Object.keys(routing);
  const routesPath = Object.values(routing);

  const nav = document.createElement('nav');
  const listRoutes = document.createElement('ul');

  routes.forEach((element, index) => {
    const route = document.createElement('li');
    const path = document.createElement('a');
    path.setAttribute('href', `${routesPath[index]}`);
    path.innerText = element;
    route.appendChild(path);
    listRoutes.appendChild(route);
  })
  nav.appendChild(listRoutes);

}
