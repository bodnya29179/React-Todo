import React from 'react';
import Todo from '../todo/Todo';
import classes from './TodoList.module.scss';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../store/actions';

const TodoList = ({ displayedTodos, titleEditing, descriptionEditing }) => {
  const dispatch = useDispatch();

  const handlerDeleteTodo = (id) => {
    dispatch(ACTIONS.deleteTodo(id));
  };

  const handlerCompleteTodo = (id) => {
    dispatch(ACTIONS.completeTodo(id));
  };

  const handleInProgressTodo = (id) => {
    dispatch(ACTIONS.inProgressTodo(id));
  };

  const handleOpenTodoTodo = (id) => {
    dispatch(ACTIONS.openTodo(id));
  };

  return (
    <ul className={ classes.todo__list }>
      {
        displayedTodos.map((todo) => (
          <Todo
            key={ todo.id }
            todo={ todo }
            deleteTodo={ handlerDeleteTodo.bind(this) }
            completeTodo={ handlerCompleteTodo.bind(this) }
            inProgressTodo={ handleInProgressTodo.bind(this) }
            openTodo={ handleOpenTodoTodo.bind(this) }
            titleEditing={ titleEditing }
            descriptionEditing={ descriptionEditing }
          />
        ))
      }
    </ul>
  );
};

export default TodoList;
