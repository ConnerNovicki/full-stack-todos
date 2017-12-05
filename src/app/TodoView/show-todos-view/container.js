import { connect } from 'react-redux'
import component from './component'
import { createTodo } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  todos: state.todoView.todos,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(component)
