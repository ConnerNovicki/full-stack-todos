import { ofType } from 'redux-observable';
import { ActionTypes, failCreateTodo, successCreateTodo  } from '../actions';
import { map, delay, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { createTodo } from '../../external/client';

export default (action$) =>
  action$.pipe(
    ofType(ActionTypes.CREATE_TODO),
    switchMap(action => {
      const { todo } = action.payload;
      return createTodo(action.payload.todo)
        .map(() => successCreateTodo())
        .catch(() => Observable.of(failCreateTodo()))
      })
    )
