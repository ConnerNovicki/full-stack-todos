import { combineEpics } from 'redux-observable';
import CreateTodoEpic from './create-todo';
import GetTodosEpic from './get-todos';

export default combineEpics(CreateTodoEpic, GetTodosEpic);


