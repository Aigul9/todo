import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';
import nextId from "react-id-generator";

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

    addItem = (label) => {
        const newItem = {
            label,
            important: false,
            id: nextId()
        };

        console.log(label);

        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, newItem]
            }
        });

        console.log(this.state);
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
                <ItemAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}