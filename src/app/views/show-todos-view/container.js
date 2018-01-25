import { connect } from 'react-redux'
import component from './component'
import { deleteTodo, updateTodo } from '../../reducers/todo.actions';
import { getFilteredTodos } from './mappers';

const mapStateToProps = (state, ownProps) => {
  const { todos, filter } = state.todoView;

  return {
    todos: getFilteredTodos(todos, filter),
    isEditModeActive: state.todoView.isEditModeActive,
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => {
    dispatch(deleteTodo(id));
  },
  toggleTodoCompletion: (id, isComplete) => {
    dispatch(updateTodo(id, 'isComplete', isComplete));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
