async function addTaskDispatcher(task){
    const promiseAddTask = new Promise ((resolve,reject)=>{
        if(task){
            resolve({
                type: 'ADD_TASK',
                data: {
                    id: ++state.lastId,
                    task: task,
                    done: false
                }
            })
        } else {
            reject({
                type: 'ERROR',
                data: 'Error, insert task'
            })
        }
    });
    return promiseAddTask;
}

const deleteTaskDispatcher = (id) =>{
    const promiseDeleteTask = new Promise ((resolve,reject)=>{
        if(id){
            resolve({
                type: 'DELETE_TASK',
                data: {id}
            })
        } else {
            reject({
                type: 'ERROR',
                data: 'Error,can not delete task'
            })
        }
    });
    return promiseDeleteTask;
}

const taskDoneDispatcher = (id) =>{
    const taskDone = {
        type: 'TASK_DONE',
        data: {id}
    }
    reducer(taskDone);
}

//module.exports = {addTaskDispatcher,deleteTaskDispatcher};