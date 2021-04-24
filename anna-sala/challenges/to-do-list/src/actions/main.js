let weekdays = [];

function fetchTaskJson(callback) {
  return fetch('../store/tasks.json')
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error(error));
}
function saveDesiredData(data) {
  const { tasks } = data;
  weekdays = tasks;
  console.log(weekdays);
  return {
    type: 'PRINT_TASKS',
    data: weekdays,
  };
}
