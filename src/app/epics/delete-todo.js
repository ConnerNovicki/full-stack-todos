import { ofType } from 'redux-observable';
import { ActionTypes, failDeleteTodo, successDeleteTodo  } from '../reducers/todo.actions';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { createTodo } from '../external/client';

export default (action$) =>
  action$.pipe(
    ofType(ActionTypes.DELETE_TODO),
    switchMap(action => {
      const { todo } = action.payload;
      return deleteTodo(action.payload.todo)
        .map(() => successDeleteTodo())
        .catch(() => Observable.of(failDeleteTodo()))
      })
    )
