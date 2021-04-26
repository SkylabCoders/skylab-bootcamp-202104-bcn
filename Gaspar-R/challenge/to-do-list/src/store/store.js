// const reducer = require ('../store/reducer')
let accId = 1;

let state = [
  {
    id: 0,
    title: 'First Task',
    complete: false
  },
  {
    id: 1,
    title: 'Second Task',
    complete: false  }

];

dispatcher = (action) => state = reducer(action);

reducer = (action, oldState = state) => {
  const newState = [...oldState];

  switch (action.type) {
    case actionType.GET_TASK:
      return state;

    case actionType.ADD_TASK:
      const { title, complete } = action.data;
      accId += 1;
      return [...newState, {
        id: accId,
        title,
        complete
      }];

    case actionType.DELETE_TASK:
      const { id } = action.data;

      return newState.filter((task) => task.id !== id);

    case actionType.COMPLETED_TASK:
      completedTaskId = newState.findIndex((task) => task.id === action.data.id);
      newState[completedTaskId].complete = true;
      return newState;

    default:
      return state;
  }
};
