function getTaskById(id) {
  fetch('../store/store.json')
    .then((response) => console.log(response));
}

function getTasksFromService() {
  fetch('../store/store.json')
    .then((response) => console.log(response));
}

// module.exports = { getTaskById };
