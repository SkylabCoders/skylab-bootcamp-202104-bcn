const createHtmlElements = (parent, element, classname, text) => {
  const node = document.createElement(element);
  parent.appendChild(node);
  node.className = classname;
  node.innerText = text;
};

const getData = async () => { // getNombre es una funcion asincronica
  try {
    const rta = await fetch('https://pokeapi.co/api/v2/pokemon/'); // la respuesta
    const post = await rta.json(); // me devuelve una promesa
    // const rtaUser = await fetch(`https://jsonplaceholder.typicode.com/user/${post.userId}`);
    // const user = await rtaUser.json();
    console.log(post);
  } catch (error) {
    console.warning('-', error);
  }
};

getData();
