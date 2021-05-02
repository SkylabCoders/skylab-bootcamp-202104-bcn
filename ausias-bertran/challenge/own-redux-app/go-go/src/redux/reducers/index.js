// import { combineReducers } from 'redux';
// import dashboardReducer from './dashbordReducer';
// import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  countries: countriesReducer,
});

export default rootReducer;

// import { combineReducers } from 'redux';
// import todoReducer from './todoReducer';
// import selectedTaskReducer from './selectedTaskReducer';

// const rootReducer = combineReducers({
//   task: todoReducer,
//   selectedTask: selectedTaskReducer,
// });

// export default rootReducer;
