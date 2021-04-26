const addTaskToStore = (task, id) => {
  state.toDoList.push({ task, id });
  state.lastId = id;
};

describe('Guiven a add Task to Store function', () => {
  const scenarios = [
    {
      state: {
        lastId: 3,
        editedElementId: null,
        toDoList: [
          {
            task: 'Perro veterinario',
            id: 1,
          },
          {
            task: 'Ir al banco',
            id: 2,
          },
          {
            task: 'Comprar regalo',
            id: 3,
          },
        ],
      },
      task: 'comprar pan',
      id: 4,
      result: {
        lastId: 4,
        editedElementId: null,
        toDoList: [
          {
            task: 'Perro veterinario',
            id: 1,
          },
          {
            task: 'Ir al banco',
            id: 2,
          },
          {
            task: 'Comprar regalo',
            id: 3,
          },
          {
            task: 'comprar pan',
            id: 4,
          },
        ],
      },
    },
  ];
  scenarios.forEach((scenario) => {
    describe(`When invoked with value ${scenarios.storeObject} and ${scenarios.task} and ${scenarios.id}`, () => {
      test(`Then returns ${scenario.result}`, () => {
        const result = addTaskToStore(scenario.task, scenario.id);
        expect(result).toEqual(scenario.result);
      });
    });
  });
});
