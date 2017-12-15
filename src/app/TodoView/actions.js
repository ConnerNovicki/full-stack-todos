export const ActionTypes = {
  CREATE_TODO: 'todo.create-todo',
  SUCCESS_CREATE_TODO: 'todo.success-create-todo',
  FAIL_CREATE_TODO: 'todo.fail-create-todo',
  DELETE_TODO: 'todo.delete-todo',
  SUCCESS_DELETE_TODO: 'todo.success-delete-todo',
  FAIL_DELETE_TODO: 'todo.fail-delete-todo',
  GET_TODOS: 'todo.get-todos',
  SUCCESS_GET_TODOS: 'todo.success-get-todos',
  FAIL_GET_TODOS: 'todo.fail-get-todos',
  TOGGLE_EDIT_MODE: 'todo.toggle-edit-mode',
  SET_TODOS_FILTER: 'todo.set-todos-filter',
  TOGGLE_TODO_COMPLETION: 'todo.toggle-todo-completion',
}

export const FILTER_TYPES = {
  ALL: 'all',
  COMPLETED: 'completed',
  INCOMPLETE: 'incomplete',
}

export const createTodo = (todoName) => ({
  type: ActionTypes.CREATE_TODO,
  payload: { todoName }
});

export const successCreateTodo = () => ({
  type: ActionTypes.SUCCESS_CREATE_TODO,
});

export const failCreateTodo = () => ({
  type: ActionTypes.FAIL_CREATE_TODO,
});

export const deleteTodo = (id) => ({
  type: ActionTypes.DELETE_TODO,
  payload: { id }
});

export const successDeleteTodo = () => ({
  type: ActionTypes.SUCCESS_DELETE_TODO,
});

export const failDeleteTodo = () => ({
  type: ActionTypes.FAIL_DELETE_TODO,
});

export const getTodos = () => ({
  type: ActionTypes.GET_TODOS,
});

export const successGetTodos = () => ({
  type: ActionTypes.SUCCESS_GET_TODOS,
});

export const failGetTodos = () => ({
  type: ActionTypes.FAIL_GET_TODOS,
});

export const toggleEditMode = () => ({
  type: ActionTypes.TOGGLE_EDIT_MODE,
})

export const setTodosFilter = (filter) => ({
  type: ActionTypes.SET_TODOS_FILTER,
  payload: { filter },
});

export const toggleTodoCompletion = (id, isComplete) => ({
  type: ActionTypes.TOGGLE_TODO_COMPLETION,
  payload: { id, isComplete },
})
