import { combineEpics } from 'redux-observable';
import { CreateTodoEpic, GetTodosEpic } from '../TodoView/epics';

export default combineEpics(
  CreateTodoEpic
);