import React from 'react';

const Clicker = ({addClick, quitClick}) => {
    return (
        <div>
            <button onClick= {quitClick}>-</button>
            <button onClick= {addClick}>+</button>
        </div>
    );
};

export default Clicker;