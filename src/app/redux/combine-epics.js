import { combineEpics } from 'redux-observable';
import TodoViewEpic from '../TodoView/epic';

export default combineEpics(
  TodoViewEpic,
);