import { combineReducers } from 'redux';
import TodoReducer from '../reducers/todo.reducer';
import DevToolsReducer from '../devtools/log-reducer';

export default combineReducers({
  todoView: TodoReducer,
  devTools: DevToolsReducer
})
