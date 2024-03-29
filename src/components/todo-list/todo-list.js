import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css'

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
    const elements = todos.map(({id, ...itemProps}) => {
        return (
            <li
                key={id}
                className="list-group-item">
                    <TodoListItem {...itemProps}
                        onDeleted={() => onDeleted(id)}
                        onToggleDone={() => onToggleDone(id)}
                        onToggleImportant={() => onToggleImportant(id)}/>
            </li>
        )
    });

    return (
        // remove todo-list class
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;