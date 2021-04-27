//const { addTaskDispatcher } = require('../dispatcher/dispatcher.js');

async function addTaskDispatcher(task){
    const promiseAddTask = new Promise ((resolve,reject)=>{
        if(task){
            resolve({
                type: 'ADD_TASK',
                data: {
                    id: 1,
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

test('should resolve and sync function', ()=>{ return addTaskDispatcher('hola').then((data)=>{
    expect(data).toEqual({
        type: 'ADD_TASK',
        data: {
            id: 1,
            task: 'hola',
            done: false
        }
    })
})});