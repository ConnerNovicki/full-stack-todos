import { Observable } from 'rxjs';
import { baseUrl } from './config';
import axios from 'axios';

export const getTodos = () => {

  return axios.get(`${baseUrl}/todos`);
  // return Observable.of({ success: true })
}

export const createTodo = (todo) => {
  axios.post(`${baseUrl}/todos`, {
    body: 'yeet',
    title: 'double yeet',
  }).then(res => {console.log(res)})
  return Observable.of({ success: true })
}

export const deleteTodo = (todo) => {
  return Observable.of({ success: true });
}