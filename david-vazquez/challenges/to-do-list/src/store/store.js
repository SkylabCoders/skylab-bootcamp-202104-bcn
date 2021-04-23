const tasks = [
        'Wake up at 7:30am!',
        'Do the challenge for Monday!',
        'Buy healthy food',
        'Call mom!'
    ]

function reducer(state,action){
    switch(action.type){
        case action.type === 'ADD_TASK':
            tasks.push(action.data);
            break;
        default:
            break;
        //case action.type === 'DELETE_TASK':

    }
}

