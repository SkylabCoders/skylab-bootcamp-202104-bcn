const main = document.querySelector('main');

function printOnPage(tag, text, idName, url) {
  const content = document.createElement(tag);
  document.createAttribute('id', idName);
  content.innerHTML = text;
  content.href = url;
  main.appendChild(content);
}
