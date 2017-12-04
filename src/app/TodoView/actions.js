export const ActionTypes = {
  CREATE_TODO: 'todo.create-todo',
  SUCCESS_CREATE_TODO: 'todo.success-create-todo',
  FAIL_CREATE_TODO: 'todo.fail-create-todo',
  GET_TODOS: 'todo.get-todos',
  SUCCESS_GET_TODOS: 'todo.success-get-todos',
  FAIL_GET_TODOS: 'todo.fail-get-todos',
}

/**
 * @param {*String} todo 
 */
export const createTodo = (todo) => ({
  type: ActionTypes.CREATE_TODO,
  payload: { todo }
})

export const successCreateTodo = () => ({
  type: ActionTypes.SUCCESS_CREATE_TODO,
})

export const failCreateTodo = () => ({
  type: ActionTypes.FAIL_CREATE_TODO,
})

export const getTodos = () => ({
  type: ActionTypes.GET_TODOS,
})

export const successGetTodos = () => ({
  type: ActionTypes.SUCCESS_GET_TODOS,
})

export const failGetTodods = () => ({
  type: ActionTypes.FAIL_GET_TODOS,
})
