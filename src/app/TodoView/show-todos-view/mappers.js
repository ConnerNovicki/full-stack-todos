import { FILTER_TYPES } from '../actions';

export const getFilteredTodos = (todos, filterType) => {
  switch (filterType) {
    case FILTER_TYPES.ALL:
      return todos;
    case FILTER_TYPES.COMPLETED:
      return todos.filter(todo => todo.isComplete)
    case FILTER_TYPES.INCOMPLETE:
      return todos.filter(todo => !todo.isComplete)
    default:
      return todos;
  }
}