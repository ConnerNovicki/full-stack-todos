import { ActionTypes } from './actions';

const INITIAL_STATE = {
  isCreatingTodo: false,
  isGettingTodos: false,
  todos: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_TODO:
      const { todo } = action.payload;
      return {
        ...state,
        isCreatingTodo: true,
        todos: [ ...state.todos, todo ]
      };
    case ActionTypes.SUCCESS_CREATE_TODO:
      return {...state, isCreatingTodo: false };
    case ActionTypes.GET_TODOS:
      return { ...state, isGettingTodos: true };
    case ActionTypes.SUCCESS_GET_TODOS:
      return { ...state, isGettingTodos: false }
    default:
      return state;
  }
}