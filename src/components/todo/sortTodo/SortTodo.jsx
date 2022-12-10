import React from 'react';
import classes from './SortTodo.module.scss';

const SortTodo = ({ filterTodos, sortTodos }) => {
    return (
        <div className={classes.todo__filter_container}>
            <select className={classes.todo__filter} onChange={filterTodos}>
                <option className={classes.form__options} value="all">All</option>
                <option className={classes.form__options} value="completed">Completed</option>
                <option className={classes.form__options} value="open">Open</option>
                <option className={classes.form__options} value="in-progress">In Progress</option>
            </select>

            <select className={classes.todo__container_sort} onChange={sortTodos}>
                <option className={classes.todo__sort} value="creationDate">Creation Date</option>
                <option className={classes.todo__sort} value="updateDate">Update Date</option>
            </select>
        </div>
    );
};

export default SortTodo;
