import { combineEpics } from 'redux-observable';
import TodoEpic from '../TodoView/epics';

export default combineEpics(
  TodoEpic
);