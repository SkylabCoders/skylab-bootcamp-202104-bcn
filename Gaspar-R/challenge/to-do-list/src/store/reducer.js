// // const actionType = require('../actions/actionTypes');
// dispatcher = (action) => {
//   reducer(action);
// };

// reducer = (state = [], action) => {
//   switch (action.types) {
//     case actionType.GET_TASK:
//       return state;

//     case actionType.ADD_TASK:
//       return [...state, {
//         tittle,
//         id
//       }];

//     case actionType.DELETE_TASK:
//       return state.filter((task) => taskId !== action.taskId);

//     case actionType.COMPLETED_TASK:
//       return state.map((task) => (task.id !== task.data.id ? task : { ...task, complete: true }));
//     default:
//       return state;
//   }
// };
