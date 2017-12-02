import { TodoActionTypes } from './actions';

const INITIAL_STATE = {
  isCreatingTodo: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.CREATE_TODO:
      return { ...state, isCreatingTodo: true };
    case TodoActionTypes.TODO_CREATED:
      return { ...state, isCreatingTodo: false };
    default:
      return state;
  }
}