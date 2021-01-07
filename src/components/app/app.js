import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

const App = () => {

    const todoData = [
        { label: 'Drink tea', important: false, id: 1},
        { label: 'Build a project', important: true, id: 2},
        { label: 'Have a branch', important: false, id: 3},
    ];

    return (
        <div className="todo-app">   
            <AppHeader toDo={3} done={1}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;