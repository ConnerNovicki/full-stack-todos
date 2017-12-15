import { ofType } from 'redux-observable';
import { ActionTypes, failGetTodos, successGetTodos } from '../actions';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { getTodos } from '../../external/client';

const todoAction = (action$) =>
  action$.pipe(
    ofType(ActionTypes.GET_TODOS),
    switchMap(action => 
      getTodos()
        .map(() => successGetTodos())
        .catch(() => Observable.of(failGetTodos()))
    )
  );

export default (action$) => todoAction(action$);