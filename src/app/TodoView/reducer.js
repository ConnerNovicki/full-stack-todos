import { ActionTypes, FILTER_TYPES } from './actions';

const INITIAL_STATE = {
  isCreatingTodo: false,
  isGettingTodos: false,
  isDeleteingTodo: false,
  todos: [],
  currTodoId: 1,
  isEditModeActive: false,
  filter: FILTER_TYPES.ALL,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_TODO:
      const { todoName } = action.payload;
      const newId = ++state.currTodoId;
      return {
        ...state,
        isCreatingTodo: true,
        todos: [ ...state.todos, { name: todoName, id: newId, isComplete: false } ],
        currTodoId: newId,
      };
    case ActionTypes.SUCCESS_CREATE_TODO:
      return {...state, isCreatingTodo: false };
    case ActionTypes.GET_TODOS:
      return { ...state, isGettingTodos: true };
    case ActionTypes.SUCCESS_GET_TODOS:
      return { ...state, isGettingTodos: false }
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
    case ActionTypes.TOGGLE_TODO_COMPLETION:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, isComplete: action.payload.isComplete };
          }
          return todo;
        })
      }
    default:
      return state;
  }
}