import { combineEpics } from 'redux-observable';
import CreateTodoEpic from './create-todo';
import GetTodosEpic from './get-todos';
import UpdateTodoEpic from './update-todo';

export default combineEpics(CreateTodoEpic, GetTodosEpic, UpdateTodoEpic);
