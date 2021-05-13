import React, { useRef } from 'react';

const AddTask = () => {
  const inputValue = useRef();
  //   const [taskInput, setTaskInput] = useState('Add new task');

  return (
    <div className="add-task">
      <input
        type="text"
        ref={inputValue}
        placeholder="Add new task"
      />
      <button type="button" onClick={() => console.log({ inputValue })}>+</button>
    </div>
  );
};

export default AddTask;
