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
            this.createTodoItem('Drink tea'),
            this.createTodoItem('Build a project'),
            this.createTodoItem('Have a branch')
        ],
        searchText: "",
        filter: "active"
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: nextId()
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = this.getElementByIndex(todoData, id);
            return {
                todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            }
        });
    };

    addItem = (label) => {
        if (label) {
            const newItem = this.createTodoItem(label);

            this.setState(({ todoData }) => {
                return {
                    todoData: [...todoData, newItem]
                }
            });
        }
    };

    getElementByIndex(arr, id) {
        return arr.findIndex(el => el.id === id);
    }

    toggLeProp(arr, prop, id) {
        const idx = this.getElementByIndex(arr, id);
        const oldItem = arr[idx];
        // new object with updated property
        const newItem = { ...oldItem, [prop]: !oldItem[prop]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.toggLeProp(todoData, "done", id) };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.toggLeProp(todoData, "important", id) };
        });
    };

    search = (items, text) => {
        if (text.length === 0) {
            return items;
        }

        return items.filter(item => item.label
            .toLowerCase()
            .indexOf(text.toLowerCase()) > -1);
    }

    onSearchChange = (searchText) => {
        this.setState({ searchText });
    }

    filter = (items, filter) => {
        switch (filter) {
            case "active":
                return items.filter(item => !item.done);
            case "done":
                return items.filter(item => item.done);
            default:
                return items;
        }
    }

    onFilterChange = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { todoData, searchText, filter } = this.state;
        const doneCount = todoData.filter(item => item.done).length;
        const todoCount = todoData.length - doneCount;

        const visibleItems = this.filter(this.search(todoData, searchText), filter);

        return (
            <div className="todo-app">   
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}/>
                <ItemAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}