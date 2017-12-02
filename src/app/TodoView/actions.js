export const TodoActionTypes = {
  CREATE_TODO: 'todo.create-todo',
  TODO_CREATED: 'todo.todo-created',
}

export const createTodo = (todo) => ({
  type: TodoActionTypes.CREATE_TODO,
  payload: { todo }
})

export const todoCreated = () => ({
  type: TodoActionTypes.TODO_CREATED
})