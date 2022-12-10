import React from 'react';
import classes from './Todo.module.scss';
import {MdFileDownloadDone, MdOutlineDeleteForever} from "react-icons/md";
import {BsClock} from "react-icons/bs";
import {DiOpenshift} from "react-icons/di";
import EditableField from "../editableField/EditableField";
import {convertDate} from "../../../utils/convertDate";

const Todo = ({todo, completeTodo, deleteTodo, inProgressTodo, openTodo, descriptionEditing, titleEditing}) => {
    return (
        <li className={`todo__list-item ${todo.status}`}>
            <div className={classes.todo__container}>
               <div className={classes.todo__container_text}>
                   <div>
                       <span className={classes.todo__label}>Title:</span>
                       <EditableField value={todo.title} valueChange={(value) => titleEditing(todo.id, value)}/>
                   </div>

                   <div>
                       <span className={classes.todo__label}>Description:</span>
                       <EditableField value={todo.description} valueChange={(value) => descriptionEditing(todo.id, value)}/>
                   </div>
               </div>

                <div className={classes.todo__container_button}>
                    <button onClick={() => openTodo(todo.id)} title="Open">
                        <DiOpenshift className={classes.todo__item_edit}/>
                    </button>
                    <button onClick={() => completeTodo(todo.id)} title="Complete">
                        <MdFileDownloadDone className={classes.todo__item_add} />
                    </button>
                    <button onClick={() => inProgressTodo(todo.id)} title="In progress">
                        <BsClock className={classes.todo__item_progress} />
                    </button>
                    <button onClick={() => deleteTodo(todo.id)} title="Delete">
                        <MdOutlineDeleteForever className={classes.todo__item_delete}/>
                    </button>
                </div>
            </div>

            <div className={classes.todo__container_data}>
                <span className={classes.todo__data}>Creation date:     {convertDate(todo.creationDate)}</span>
                {
                    todo.updateDate ? <span className={classes.todo__data}>Edit date: {convertDate(todo.updateDate)}</span> : ''
                }
            </div>
        </li>

    );
};

export default Todo;

