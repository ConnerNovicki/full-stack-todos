import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Flex, Box } from 'reflexbox';

const defaultState = {
  todoInput: '',
}

class CreateTodoView extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleToggleEditMode(event) {
    event.preventDefault();
    this.props.toggleEditMode();
  }

  handleOnInput(event) {
    const todoName = event.target.value;
    this.setState({ todoInput: todoName })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const todoName = this.state.todoInput;
    if (!!todoName.trim().length) {
      this.props.createTodo(this.state.todoInput);
    }
    this.setState({ todoInput: '' })
  }

  render() {
    return (
      <form>
        <Flex>
          <Box w={3/5} p={1}>
            <input
              value={ this.state.todoInput }
              onInput={ this.handleOnInput.bind(this) }/>
          </Box>
          <Box w={1/5} p={1}>
            <button onClick={this.handleOnSubmit.bind(this)}>
              Create
            </button>
          </Box>
          <Box w={1/5} p={1}>
            <button onClick={this.handleToggleEditMode.bind(this)}>
              {this.props.isEditModeActive ? 'Cancel' : 'Edit'}
            </button>
          </Box>
        </Flex>
      </form>
    );
  }
}

CreateTodoView.propTypes = {
  isCreatingTodo: PropTypes.bool.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
}


export default CreateTodoView;