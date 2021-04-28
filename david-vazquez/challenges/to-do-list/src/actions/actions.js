const addTask = () =>{
    let inputValue = document.getElementById('input');
    addTaskDispatcher(inputValue.value)
        .then((data)=>reducer(data))
        .catch((error)=>alert(`ERROR : ${error.data}`));
    inputValue.value='';
}

const deleteTask = (id)=>{
    deleteTaskDispatcher(id)
        .then((data)=>reducer(data))
        .catch((error)=>alert(`ERROR : ${error.data}`));
}

const taskDone = (id)=>{
    taskDoneDispatcher(id);
}

