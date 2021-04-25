function addTaskDispatcher(task){
    const payload = {
        type: 'ADD_TASK',
        data: {
            id: 1,
            task: task}
    }
    reducer(payload);
}

const deleteTaskDispatcher = (tasks) =>{
    const deleteTask = {
        type: 'DELETE_TASK',
        data: {
            id: id++,
            task: tasks}   
    }
    reducer(deleteTask);
}