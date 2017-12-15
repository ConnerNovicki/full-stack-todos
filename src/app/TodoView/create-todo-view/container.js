import { connect } from 'react-redux'
import component from './component'
import { createTodo, toggleEditMode } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  isCreatingTodo: state.todoView.isCreatingTodo,
  isEditModeActive: state.todoView.isEditModeActive,
})

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todoName) => {
    dispatch(createTodo(todoName))
  },
  toggleEditMode: () => {
    dispatch(toggleEditMode())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
