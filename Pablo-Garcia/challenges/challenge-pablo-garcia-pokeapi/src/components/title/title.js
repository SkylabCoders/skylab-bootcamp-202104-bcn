const createTitle = (content, type) => {
  const title = document.createElement(`${type}`);
  title.innerText = `${content}`;
  return title;
}
