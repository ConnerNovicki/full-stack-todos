import { combineReducers } from 'redux';
import TodoReducer from '../TodoView/reducer';

export default combineReducers({
  todoView: TodoReducer
})
