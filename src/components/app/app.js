import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            { label: 'Drink tea', important: false, id: 1},
            { label: 'Build a project', important: true, id: 2},
            { label: 'Have a branch', important: false, id: 3},
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => el.id === id);
            return {
                todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            }
        });
    };

    render() {
        return (
            <div className="todo-app">   
                <AppHeader toDo={3} done={1}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todoData} onDeleted={this.deleteItem}/>
            </div>
        );
    }
}