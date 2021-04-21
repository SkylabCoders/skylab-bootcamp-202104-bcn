const main = document.querySelector('main');

function printOnPage(tag, text, idName, url) {
  const content = document.createElement(tag);
  document.createAttribute('id', idName);
  content.innerHTML = text;
  content.href = url;
  main.appendChild(content);
}

function iteration(obj) {
  obj.forEach((element) => {
    printOnPage('a', element.name, `${element.name}`, `${element.url}`);
  });
}

fetchApi(iteration);
