import { connect } from 'react-redux'
import component from './component'
import { createTodo, toggleEditMode } from '../../reducers/todo.actions';

const mapStateToProps = (state, ownProps) => ({
  isCreatingTodo: state.todoView.isCreatingTodo,
  isEditModeActive: state.todoView.isEditModeActive,
})

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todoName, dueDate) => {
    dispatch(createTodo(todoName, dueDate))
  },
  toggleEditMode: () => {
    dispatch(toggleEditMode())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
