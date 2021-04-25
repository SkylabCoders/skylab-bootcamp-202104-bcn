const addTask = () =>{
    let inputValue = document.getElementById('input');
    addTaskDispatcher(inputValue.value);
    inputValue.value='';
}

const deleteTask = (id)=>{
    deleteTaskDispatcher(id);
}

