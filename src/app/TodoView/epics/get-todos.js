import { ofType } from 'redux-observable';
import { ActionTypes, failGetTodods, successGetTodos } from '../actions';
import { map, delay, switchMap, merge } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { getTodos } from '../../external/client';

const todoAction = (action$) =>
  action$.pipe(
    ofType(ActionTypes.GET_TODOS),
    switchMap(action => 
      getTodos()
        .map(() => successGetTodos())
        .catch(() => Observable.of(failGetTodods()))
    )
  );

export default (action$) =>
  action$.merge(
    todoAction,
  )