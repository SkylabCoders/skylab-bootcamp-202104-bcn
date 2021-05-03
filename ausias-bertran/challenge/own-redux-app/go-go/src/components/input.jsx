import React. { UseState } from 'react';
import LIST from '../constant/coolThings';

const Input = ({ dispatch }) => {
  const [taskValue, setTaskValue] = useState('');
  function addTask() {
    dispatch(createTask(taskValue));
  }

  function handleInputChange(event) {
    setTaskValue(event.target.value);
  }

  return (
    <label
      htmlFor="task"
    >
      Add your Task:
      {' '}
      {taskValue}
      <input
        onChange={handleInputChange}
        value={taskValue}
        type="text"
        placeholder="Type a new Task :-)"
        id="task"
      />
      <button onClick={addTask} type="button">+</button>
    </label>
  );
};