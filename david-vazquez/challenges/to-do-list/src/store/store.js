let state = {
    myTasks: [],
    lastId: 1
}

function reducer({type,data}){
    const newState = {...state};
    switch(type){
        case 'ADD_TASK':
            newState.myTasks.push(data);            
            break;
        case 'DELETE_TASK':
            const index = newState.myTasks.findIndex((element)=>element.id === data.id)
            newState.myTasks.splice(index,1);
            console.log(newState);
            break;
        case 'TASK_DONE':
            const indexDone = newState.myTasks.findIndex((element)=>element.id === data.id)
            newState.myTasks[indexDone].done = true;
        default:
            break;
    }
    setEnviroment(newState);
}

const setEnviroment = (newState)=>{
    state = newState;
    addingTask(state.myTasks);
}

