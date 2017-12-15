import React, { Component } from 'react';
import CreateTodoView from './create-todo-view';
import ShowTodosView from './show-todos-view';
import TodosOptionsFooter from './todos-options-footer';

import { Flex, Box, Border } from 'reflexbox';

class TodoView extends Component {
  render() {
    return (
      <Flex column align='center' w={1/2}>
        <h1>Todos</h1>
        <CreateTodoView/>
        <ShowTodosView/>
        <TodosOptionsFooter/>
      </Flex>
    );
  }
}

export default TodoView;
