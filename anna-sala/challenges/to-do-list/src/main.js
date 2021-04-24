let days = [];

function fetchTaskJson(callback) {
  return fetch('../store/tasks.json')
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error(error));
}
function saveDesiredData(data) {
  const { tasks } = data;
  days = tasks.forEach((day) => day);
  console.log(days);
}

fetchTaskJson(saveDesiredData);
console.log(saveDesiredData);
