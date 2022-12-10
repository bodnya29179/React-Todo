import React from 'react';
import './App.scss';
import TodoForm from './components/todo/todo-form/TodoForm';
import SortTodo from './components/todo/sort-todo/SortTodo';
import TodoList from './components/todo/todo-list/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from './store/actions';
import { selectTodos } from './store/selectors';

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const createTodo = (todo) => dispatch(ACTIONS.addTodo(todo));
  const handlerFiltering = (event) => dispatch(ACTIONS.changeStatus(event.target.value));
  const handleSorting = (event) => dispatch(ACTIONS.changeSortOption(event.target.value));
  const handleTitleEditing = (todoId, title) => dispatch(ACTIONS.editTodo(todoId, { title }));
  const handleDescriptionEditing = (todoId, description) => dispatch(ACTIONS.editTodo(todoId, { description }));

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
        todos={todos}
        titleEditing={handleTitleEditing.bind(this)}
        descriptionEditing={handleDescriptionEditing.bind(this)}
      />
    </div>
  );
}

export default App;
