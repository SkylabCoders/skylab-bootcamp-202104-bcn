const myTasks = [
    {id: 1, task: 'Clean the room!'}
];

function reducer({type,data}){
    switch(type){
        case 'ADD_TASK':
            myTasks.push(data);
            addingTask(myTasks);
            break;
            case 'DELETE_TASK':
                break;
            default:
                break;
    }
}

