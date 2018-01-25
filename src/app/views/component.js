import React, { Component } from 'react';
import ShowTodosView from './show-todos-view';
import TodosOptionsFooter from './todos-options-footer';
import { Link } from 'react-router-dom';

import { Flex, Box, Border } from 'reflexbox';

class TodoView extends Component {
  render() {
    return (
      <Flex column align='center' w={1/2}>
        <Link to='/create'>Create todo</Link>
        <ShowTodosView/>
        <TodosOptionsFooter/>
      </Flex>
    );
  }
}

export default TodoView;
