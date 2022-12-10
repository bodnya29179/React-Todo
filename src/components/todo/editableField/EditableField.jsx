import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './EditableField.module.scss';

const EditableField = ({ value, valueChange }) => {
    const [text, setText] = useState(value);
    const [isEditing, setIsEditing] = useState(false);
    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };
    const uniqueId = uuidv4();
    const handleMousedown = (event) => {
        if ((event.target.id !== uniqueId) && isEditing) {
            toggleEditing();
        }
    };

    let textareaElement;

    document.addEventListener('mousedown', handleMousedown);

    useEffect(() => {
        return () => document.removeEventListener('mousedown', handleMousedown);
    }, []);

    useEffect(() => {
        if (isEditing) {
            textareaElement.focus();
        } else {
            valueChange(text);
        }
    }, [isEditing]);

    return (
        <div onClick={(event) => event.stopPropagation()}>
            {
                !isEditing && (
                    <p
                        className={[classes.editable_field, classes.displayed_text].join(' ')}
                        onClick={toggleEditing}>
                        {value}
                    </p>
                )
            }
            {
                isEditing && (
                    <textarea
                        id={uniqueId}
                        ref={(textarea) => textareaElement = textarea}
                        className={[classes.editable_field, classes.textarea].join(' ')}
                        value={text}
                        placeholder="Enter description"
                        rows="8"
                        cols="10"
                        onChange={(event) => setText(event.target.value)}
                        onClick={(event) => event.stopPropagation()}
                    >
                    </textarea>
                )
            }
        </div>
    );
};

export default EditableField;
