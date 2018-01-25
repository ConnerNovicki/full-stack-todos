import { ActionTypes, FILTER_TYPES } from './todo.actions';

const INITIAL_STATE = {
  isCreatingTodo: false,
  isGettingTodos: false,
  isDeleteingTodo: false,
  todos: [],
  isEditModeActive: false,
  filter: FILTER_TYPES.ALL,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_TODO:
      return state;
    case ActionTypes.SUCCESS_CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
        isCreatingTodo: false
      };
    case ActionTypes.GET_TODOS:
      return { ...state, isGettingTodos: true };
    case ActionTypes.SUCCESS_GET_TODOS:
      return {
        ...state,
        todos: action.payload.todos,
        isGettingTodos: false,
      }
    case ActionTypes.DELETE_TODO:
      const { id } = action.payload;
      return {
        ...state,
        isDeleteingTodo: true,
        todos: state.todos.filter(todo => {
          return todo.id !== id
        }),
      }
    case ActionTypes.TOGGLE_EDIT_MODE:
      return { ...state, isEditModeActive: !state.isEditModeActive };
    case ActionTypes.SET_TODOS_FILTER:
      const { filter } = action.payload;
      return { ...state, filter };
    case ActionTypes.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, [action.payload.prop]: action.payload.val };
          }
          return todo;
        })
      }
    default:
      return state;
  }
}