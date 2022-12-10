import React, { useState, useEffect } from 'react';
import './App.scss';
import TodoForm from './components/todo/todoForm/TodoForm';
import SortTodo from './components/todo/sortTodo/SortTodo';
import TodoList from './components/todo/todoList/TodoList';

function App() {
    const [creationDate, setCreationDate] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [sortOption, setSortOption] = useState('creationDate');
    const [displayedTodos, setDisplayedTodos] = useState([]);

    const handlerFiltering = (event) => {
        setStatus(event.target.value);
    };

    const handleSorting = (event) => {
        setSortOption(event.target.value);
    };

    const handleTitleEditing = (todoId, newValue) => {
        const result = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    title: newValue,
                    updateDate: Date.now(),
                };
            } else {
                return todo;
            }
        });

        setTodos(result);
    };

    const handleDescriptionEditing = (todoId, newValue) => {
        const result = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    description: newValue,
                    updateDate: Date.now(),
                };
            } else {
                return todo;
            }
        });

        setTodos(result);
    };

    useEffect(() => {
        onSortAndFilterChange();
    }, [todos, status, sortOption]);

    const sortTodos = (todos) => {
        return [...todos].sort((todo1, todo2) => {
            return todo2[sortOption] - todo1[sortOption];
        });
    };

    const onSortAndFilterChange = () => {
        if (status === 'all') {
            const sortedTodos = sortTodos(todos);
            setDisplayedTodos(sortedTodos);
            return;
        }

        const filteredTodos = todos.filter((todo) => todo.status === status);
        const sortedTodos = sortTodos(filteredTodos);
        setDisplayedTodos(sortedTodos);
    };

  return (
    <div className='App'>
        <TodoForm
            creationDate={creationDate}
            setCreationDate={setCreationDate}
            title={title}
            setTitle={setTitle}
            todos={todos}
            setTodos={setTodos}
            description={description}
            setDescription={setDescription}
            setStatus={setStatus}
        />
        {
            !!todos.length
            && <SortTodo
                filterTodos={handlerFiltering.bind(this)}
                sortTodos={handleSorting.bind(this)}
            />
        }
        <TodoList
            todos={todos}
            setTodos={setTodos}
            displayedTodos={displayedTodos}
            titleEditing={handleTitleEditing.bind(this)}
            descriptionEditing={handleDescriptionEditing.bind(this)}
        />
    </div>
  );
}

export default App;
