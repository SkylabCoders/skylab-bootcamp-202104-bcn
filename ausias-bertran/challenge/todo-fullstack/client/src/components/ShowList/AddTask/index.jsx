import React from 'react';

const AddTask = () => (
  <div className="add-task">
    <input
      type="text"
      placeholder="Add new task"
    />
    <button type="button" onClick={() => console.log('add task')}>+</button>
  </div>
);
export default AddTask;
