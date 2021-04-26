function createItems(task) {
  list.push({ task });
  storeLogic();
}

function deleteItems(remove) {
  const taskName = remove.split('D');
  const [name] = taskName;
  const indexToRemove = list.findIndex((item) => item.task === name);
  list.splice(indexToRemove);
}
