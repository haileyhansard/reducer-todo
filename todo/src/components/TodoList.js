import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    return (
        <div>
            <div className="Todo-list">
                {state.map(todo => {
                    return <Todo key={todo.id} dispatch={dispatch} data={todo}/>
                })} 
            </div>
            <div>
                <TodoForm dispatch={dispatch} />
            </div>
        </div>
    );
};

export default TodoList;