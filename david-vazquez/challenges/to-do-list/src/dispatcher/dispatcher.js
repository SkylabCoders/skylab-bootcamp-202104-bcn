function addTaskDispatcher(task){
    const payload = {
        type: 'ADD_TASK',
        data: {
            id: ++state.lastId,
            task: task}
    }
    reducer(payload);
}

const deleteTaskDispatcher = (id) =>{
    const deleteTask = {
        type: 'DELETE_TASK',
        data: {id}
    }
    reducer(deleteTask);
}