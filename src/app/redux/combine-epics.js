import { combineEpics } from 'redux-observable';
import TodoEpic from '../epics';

export default combineEpics(
  TodoEpic
);