import React from 'react';
import Todo from '../todo/Todo'
import classes from './TodoList.module.scss';

const TodoList = ({todos, setTodos, displayedTodos, titleEditing, descriptionEditing}) => {
    const handlerDeleteTodo = (id) => {
        setTodos(todos.filter((element) => element.id !== id));
    };

    const handlerCompleteTodo = (id) => {
        setTodos(
            todos.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        status: 'completed'
                    };
                }
                return item;
            })
        );
    };

    const handleInProgressTodo = (id) => {
        setTodos(
            todos.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        status: 'in-progress'
                    };
                }
                return item;
            })
        );
    }

    const handleOpenTodoTodo = (id) => {
        setTodos(
            todos.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        status: 'open-todo'
                    };
                }
                return item;
            })
        );
    }


    return (
        <ul className={classes.todo__list}>
            {
                displayedTodos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={handlerDeleteTodo.bind(this)}
                        completeTodo={handlerCompleteTodo.bind(this)}
                        inProgressTodo={handleInProgressTodo.bind(this)}
                        openTodo={handleOpenTodoTodo.bind(this)}
                        titleEditing={titleEditing}
                        descriptionEditing={descriptionEditing}
                    />
                ))
            }
        </ul>

    );
};

export default TodoList;
