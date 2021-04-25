let state = {
    myTasks: [{id: 1, task: 'Clean the room!'}],
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
        default:
            break;
    }
    setEnviroment(newState);
}

const setEnviroment = (newState)=>{
    state = newState;
    addingTask(state.myTasks);
}

