import { useState } from "react";

function ButtonComponent() {

    const [id, setId] = useState(10);
    
    const IncrementButtom = () => {
        setId(id+1);
    }
    
    const DecrementButtom = () => {
        setId(id-1);
    }

    return (
        <div class="container_counter">
        <button onClick={IncrementButtom}>+</button>
        <p>{id}</p>
        <button onClick={DecrementButtom}>-</button>
        </div>
    )
    
}
    
export default ButtonComponent;