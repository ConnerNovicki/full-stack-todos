import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ListView from '../../shared/list-view/component';
import { Flex, Box } from 'reflexbox';
import { styles } from './styles';

class ShowTodosView extends Component {
  constructor(props) {
    super(props);
    this.renderItemWhenEditMode = this.renderItemWhenEditMode.bind(this);
    this.renderItemWhenNotEditMode = this.renderItemWhenNotEditMode.bind(this);
  }
  renderItemWhenNotEditMode({ name, id, isComplete }) {
    return (
      <Flex key={id} w={1} align='center'>
        <Box w={1/4}>
          <input type="checkbox" checked={isComplete} onChange={() => this.props.toggleTodoCompletion(id, !isComplete)}/>
        </Box>
        <Box w={3/4}>{name}</Box>
      </Flex>
    );
  }

  renderItemWhenEditMode({ name, id }) {
    const { deleteTodo } = this.props;
    return (
      <Flex w={1} align='center'>
      <Box key={id} w={3/4}>
        {name}
      </Box>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </Flex>
    );
  }

  render() {
    const { isEditModeActive } = this.props;
    return (     
      <ListView
        items={ this.props.todos }
        renderMethod={ isEditModeActive ?
          this.renderItemWhenEditMode :
          this.renderItemWhenNotEditMode }/>
    );
  }
}

ShowTodosView.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  isEditModeActive: PropTypes.bool,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodoCompletion: PropTypes.func.isRequired
}

export default ShowTodosView;