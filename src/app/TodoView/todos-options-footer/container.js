import { connect } from 'react-redux'
import component from './component'
import { setTodosFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  isEditModeActive: state.todoView.isEditModeActive,
})

const mapDispatchToProps = (dispatch) => ({
  setTodosFilter: (filter) => {
    dispatch(setTodosFilter(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(component)