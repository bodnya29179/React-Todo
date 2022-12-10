import { ACTION_TYPES } from './action-types';

export const ACTIONS = {
  addTodo: (todo) => ({ type: ACTION_TYPES.addTodo, todo }),
  openTodo: (todoId) => ({ type: ACTION_TYPES.openTodo, todoId }),
  completeTodo: (todoId) => ({ type: ACTION_TYPES.completeTodo, todoId }),
  inProgressTodo: (todoId) => ({ type: ACTION_TYPES.inProgressTodo, todoId }),
  editTodo: (todoId, changes) => ({ type: ACTION_TYPES.editTodo, todo: { todoId, changes } }),
  deleteTodo: (todoId) => ({ type: ACTION_TYPES.deleteTodo, todoId }),
};
