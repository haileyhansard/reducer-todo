import React from 'react';

const Todo = ({ data, dispatch  }) => {
    return (
        <div className="Todo-item" 
        style={{ color: (data.completed) ? 'red' : 'black', cursor: 'pointer' }} 
        onClick={() => dispatch({
            type: 'TOGGLE_COMPLETED', 
            payload: { id: data.id } 
            })}
            >
            {data.item}
        </div>    
    );
};

export default Todo;