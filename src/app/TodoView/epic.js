import { ofType } from 'redux-observable';
import { TodoActionTypes, todoCreated } from './actions';
import { map, delay } from 'rxjs/operators';

export default (action$) =>
  action$.pipe(
    ofType(TodoActionTypes.CREATE_TODO),
    delay(2000),
    map(() => todoCreated())
  );