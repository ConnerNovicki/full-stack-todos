import React, { Component } from 'react';
import CreateTodoView from './TodoView/create-todo-view';
import ShowTodosView from './TodoView/show-todos-view';

class App extends Component {
  render() {
    return (
      <div>
        <CreateTodoView/>
        <ShowTodosView/>
      </div>
    );
  }
}

export default App;
