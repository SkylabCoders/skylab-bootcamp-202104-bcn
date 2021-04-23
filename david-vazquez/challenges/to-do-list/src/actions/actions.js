function addTask(task){
    const payload = {
        type: 'ADD_TASK',
        data: task
    }
    reducer(payload)
    return payload;
}


