import { ACTION_TYPES } from './action-types';

const initialState = {
  todos: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.addTodo: {
      const todos = [action.todo, ...state.todos];

      return { ...state, todos };
    }

    case ACTION_TYPES.openTodo: {
      const todos = state.todos.map((item) => {
        if (item.id === action.todoId) {
          return {
            ...item,
            status: 'open-todo',
          };
        }
        return item;
      });

      return { ...state, todos };
    }

    case ACTION_TYPES.completeTodo: {
      const todos = state.todos.map((item) => {
        if (item.id === action.todoId) {
          return {
            ...item,
            status: 'completed',
          };
        }
        return item;
      });

      return { ...state, todos };
    }

    case ACTION_TYPES.inProgressTodo: {
      const todos = state.todos.map((item) => {
        if (item.id === action.todoId) {
          return {
            ...item,
            status: 'in-progress',
          };
        }
        return item;
      });

      return { ...state, todos };
    }

    case ACTION_TYPES.editTodo: {
      const { todoId, changes } = action.todo;

      const todos = state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            ...changes,
            updateDate: Date.now(),
          };
        } else {
          return todo;
        }
      });

      return { ...state, todos };
    }

    case ACTION_TYPES.deleteTodo: {
      const todos = state.todos.filter((element) => element.id !== action.todoId);

      return { ...state, todos };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
