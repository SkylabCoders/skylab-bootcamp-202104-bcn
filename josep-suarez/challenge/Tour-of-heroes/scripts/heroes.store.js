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
   const siteOfButtons = document.getElementById("header-heroes");
   const buttonDash = document.createElement("a");
   const buttonHeroes = document.createElement("a");
   const titleHeroes = document.createElement("h2");
   siteOfButtons.appendChild(buttonDash).innerHTML = "Dashboard";
   siteOfButtons.appendChild(buttonHeroes).innerHTML = "Heroes";
   siteOfButtons.appendChild(titleHeroes).innerHTML = "Top Heroes";
   buttonDash.setAttribute("class","button-dash");
   buttonHeroes.setAttribute("class", "button-heroes");
   buttonDash.href = "../dashboard/dashboard.html"
   buttonHeroes.href = "../heroes/heroes.html"