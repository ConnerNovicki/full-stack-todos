import { ofType } from 'redux-observable';
import { ActionTypes, failGetTodos, successGetTodos } from '../reducers/todo.actions';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { getTodos } from '../external/client';

const todoAction = (action$) =>
  action$.pipe(
    ofType(ActionTypes.GET_TODOS),
    switchMap(action => {
      return getTodos()
        .map((todos) => successGetTodos(todos))
        .catch(() => Observable.of(failGetTodos()))
    })
  );

export default (action$) => todoAction(action$);