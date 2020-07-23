import React from 'react';

const Todo = ({ data, dispatch  }) => {
    return (
        <div className="Todo-item" 
        style={{ color: (data.completed) ? '#20639B' : 'black', cursor: 'pointer', textDecoration: (data.completed) ? 'line-through' : 'none', }} 
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