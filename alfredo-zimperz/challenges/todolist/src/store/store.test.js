const testingTasks = [
  {
    id: 0,
    title: 'Tarea 1',
    description: 'Descripcion tarea 1',
    done: false,
  },
  {
    id: 1,
    title: 'Tarea 2',
    description: 'Descripcion tarea 2',
    done: true,
  },
];
const nextTaskId = 2;

const tasksReducer = (action, testTasks = testingTasks) => {
  let newTasks = [...testTasks];

  switch (action.type) {
    case 'GET_TASKS':
      break;
    case 'DELETE_TASK':
      newTasks = newTasks.filter((task) => task.id !== action.taskId);
      break;
    case 'CREATE_TASK':
      newTasks = [
        ...newTasks,
        { ...action.taskData, done: false, id: nextTaskId },
      ];
      // nextTaskId++;
      break;
    case 'MODIFY_TASK':
      newTasks = newTasks.map(
        (task) => {
          if (task.id === action.taskData.id) {
            return { ...action.taskData, done: false };
          } return task;
        },
      );

      break;
    case TOOGLE_TASK_STATE:
      newTasks = newTasks.map(
        (task) => {
          if (task.id === action.taskId) {
            return { ...task, done: !task.done };
          } return task;
        },
      );

      break;
    default:
      break;
  }
  return newTasks;
};

test('Given a tasksReducer function, receiving an DELETE_TASK action', () => {
  result = tasksReducer({ type: 'DELETE_TASK', taskId: 1 });
  expect(result).toEqual(
    [
      {
        id: 0,
        title: 'Tarea 1',
        description: 'Descripcion tarea 1',
        done: false,
      },
    ],
  );
});

test('Given a tasksReducer function, receiving an CREATE_TASK action', () => {
  result = tasksReducer(
    {
      type: 'CREATE_TASK',
      taskData: {
        title: 'Tarea 3',
        description: 'Descripcion tarea 3',
      },
    },
  );
  console.log(result);
  expect(result).toEqual(
    [
      {
        id: 0,
        title: 'Tarea 1',
        description: 'Descripcion tarea 1',
        done: false,
      },
      {
        id: 1,
        title: 'Tarea 2',
        description: 'Descripcion tarea 2',
        done: true,
      },
      {
        title: 'Tarea 3',
        description: 'Descripcion tarea 3',
        done: false,
        id: 2,
      },
    ],
  );
});
