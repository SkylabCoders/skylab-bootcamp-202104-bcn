const getTask = () => (
  {
    type: 'GET_TASK'

  }
);

const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  taskId
});

module.exports = {
  getTask,
  deleteTask
};
