import { ofType } from 'redux-observable';
import { ActionTypes, failCreateTodo, successCreateTodo  } from '../reducers/todo.actions';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { createTodo } from '../external/client';

export default (action$) =>
  action$.pipe(
    ofType(ActionTypes.CREATE_TODO),
    switchMap(action => {
      const { todoName, dueDate } = action.payload;
      return createTodo(todoName, dueDate)
        .map((res) => successCreateTodo(res))
        .catch(() => Observable.of(failCreateTodo()))
      })
    )
