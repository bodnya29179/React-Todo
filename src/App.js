import React, { useEffect, useState } from 'react';
import './App.scss';
import TodoForm from './components/todo/todo-form/TodoForm';
import SortTodo from './components/todo/sort-todo/SortTodo';
import TodoList from './components/todo/todo-list/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from './store/actions';
import { selectTodos } from './store/selectors';

function App() {
  const todos = useSelector(selectTodos);

  const [status, setStatus] = useState('all');
  const [sortOption, setSortOption] = useState('creationDate');
  const [displayedTodos, setDisplayedTodos] = useState([]);

  const dispatch = useDispatch();

  const createTodo = (todo) => {
    dispatch(ACTIONS.addTodo(todo));
  }

  const handlerFiltering = (event) => {
    setStatus(event.target.value);
  };

  const handleSorting = (event) => {
    setSortOption(event.target.value);
  };

  const handleTitleEditing = (todoId, title) => {
    dispatch(ACTIONS.editTodo(todoId, { title }))
  };

  const handleDescriptionEditing = (todoId, description) => {
    dispatch(ACTIONS.editTodo(todoId, { description }))
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
    <div className="App">
      <TodoForm createTodoCallback={createTodo}/>

      {
        !!todos.length
        && <SortTodo
          filterTodos={handlerFiltering.bind(this)}
          sortTodos={handleSorting.bind(this)}
        />
      }

      <TodoList
        displayedTodos={displayedTodos}
        titleEditing={handleTitleEditing.bind(this)}
        descriptionEditing={handleDescriptionEditing.bind(this)}
      />
    </div>
  );
}

export default App;
