import { connect } from 'react-redux'
import component from './component'
import { createTodo } from './actions';

const mapStateToProps = (state, ownProps) => ({
  isCreatingTodo: state.todoView.isCreatingTodo
})

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => {
    dispatch(createTodo(todo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
