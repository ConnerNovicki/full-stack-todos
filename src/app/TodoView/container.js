import { connect } from 'react-redux'
import component from './component'
// import { actionCreator } from './actions';

const mapStateToProps = (state, ownProps) => ({...state})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
