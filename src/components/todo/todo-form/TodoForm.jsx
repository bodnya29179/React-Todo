import React, { useState } from 'react';
import classes from './TodoForm.module.scss';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../store/actions';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handlerInput = (event) => {
    setDescription(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handlerSubmitTodo = (event) => {
    event.preventDefault();
    dispatch(ACTIONS.addTodo({ title, description }));
    setDescription('');
    setTitle('');
  };

  return (
    <form className={classes.form__todo}>
      <h1 className={classes.form__title}>Add your TODO</h1>

      <input
        className={classes.form__text}
        type="text"
        value={title}
        placeholder="Title"
        onChange={handleTitle}
      />

      <textarea
        className={classes.form__text}
        value={description}
        placeholder="Add your Todo"
        rows={10}
        cols={50}
        onChange={handlerInput}
      />

      <button
        className={classes.form__add}
        onClick={handlerSubmitTodo}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
