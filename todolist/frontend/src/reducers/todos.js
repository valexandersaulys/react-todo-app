import {
  GET_TODOS,
  ADD_TODO,
  REMOVE_TODOS,
  MODIFY_TODO,
  MARK_TODO,
  UNMARK_TODO,
  SAVING_STATE
} from "../actions/types";

const initialState = {
  todos: [], // will be {id, name, done}
  savedOnServer: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: "_", ...action.payload }]
      };
    case REMOVE_TODOS:
      return {
        ...state,
        todos: state.todos.filter(todo => !action.payload.includes(todo.id))
      };
    case MODIFY_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (
            (todo.name === action.payload.name && todo.id === "_") ||
            todo.id === action.payload.id
          ) {
            todo = action.payload;
          }
          return todo;
        })
      };
    case MARK_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.done = action.payload.done;
          }
          return todo;
        })
      };
    case UNMARK_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.done = false;
          }
          return todo;
        })
      };
    case SAVING_STATE:
      return {
        ...state,
        savedOnServer: action.payload
      };
    default:
      return state;
  }
}
