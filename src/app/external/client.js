import { Observable } from 'rxjs';
import { baseUrl } from './config';
import axios from 'axios';

const http = {
 get: function (uri) {
    return Observable.fromPromise(
      axios.get(`${baseUrl}${uri}`)
    )
    .map(res => res.data)
  },
  post: function (uri, data) {
    return Observable.fromPromise(
      axios.post(`${baseUrl}${uri}`, data)
    )
    .map(res => res.data)
  },
  delete: function (uri) {
    return Observable.fromPromise(
      axios.delete(`${baseUrl}${uri}`)
    )
    .map(res => res.data)
  },
  patch: function (uri, data) {
    var params = new URLSearchParams();
    data.forEach(d => {
      params.append(d.prop, d.val)
    })
    return Observable.fromPromise(
      axios.patch(`${baseUrl}${uri}`, params)
    )
    .map(res => res.data)
  }
}

export const getTodos = () => http.get('/todos');

export const createTodo = (todoName) => http.post('/todos', todoName);

export const deleteTodo = (id) => http.delete(`/todos/${id}`);

export const updateTodo = (id, prop, val) => http.patch(`/todos/${id}`, [{prop, val}]);