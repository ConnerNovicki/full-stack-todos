import { ofType } from 'redux-observable';
import { ActionTypes, successUpdateTodo  } from '../reducers/todo.actions';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { updateTodo } from '../external/client';

export default (action$) =>
  action$.pipe(
    ofType(ActionTypes.UPDATE_TODO),
    switchMap(action => {
      const { id, prop, val } = action.payload;
      return updateTodo(id, prop, val)
        .map((res) => successUpdateTodo(res))
        .catch(() => {})
      })
    )
