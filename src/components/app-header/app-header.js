import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    // add date
    return (
        <div className="app-header d-flex">
            <h1>My Todo List</h1>
            <h2>{toDo} more to do, {done} is done</h2>
        </div>
    );
};

export default AppHeader;