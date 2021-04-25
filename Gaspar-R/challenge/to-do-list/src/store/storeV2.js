// const reducer = require ('../store/reducer')
let accId = 2;

let state = [
  {
    id: 1,
    title: 'First Task',
    complete: false
  },
  {
    id: 2,
    title: 'Second Task',
    complete: false
  }

];

dispatcher = (action) => {
  state = reducer(action);
  updateHTML();
};

reducer = (action, oldState = state) => {
  // console.log(action);
  const newState = [...oldState];

  switch (action.type) {
    case actionType.GET_TASK:
      return state;

    case actionType.ADD_TASK:
      const { title } = action.data;
      accId += 1;
      return [...newState, {
        id: accId,
        title
      }];

    case actionType.DELETE_TASK:
      const { id } = action.data;

      return newState.filter((task) => task.id !== id);
      // ((task) => task.id !== action.taskId));

    case actionType.COMPLETED_TASK:
      return state.map((task) => (task.id !== task.data.id ? task : { ...task, complete: true }));
    default:
      return state;
  }
};
