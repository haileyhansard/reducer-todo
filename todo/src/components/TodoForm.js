import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
    const [input, setInput] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        if(!input) return;
        dispatch({
            type: 'ADD_TODO',
            payload: {
                item: input,
                completed: false,
                id: Date.now()
            }
        })
        setInput('');
    }

    const clearCompleted = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_COMPLETED'
        })
    }

    return (
        <form onSubmit={formSubmit}>
            <input
            placeholder="Add a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button>Add Task</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </form>
    )
};

export default TodoForm;