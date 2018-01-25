import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Flex, Box } from 'reflexbox';
import { Redirect } from 'react-router-dom';

const defaultState = {
  todoInput: '',
  complete: false,
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
      this.props.createTodo(this.state.todoInput, 'some date'); //TODO: fix
    }
    this.setState({ todoInput: '', complete: true })
  }

  render() {
    if (this.state.complete) {
      return <Redirect to='/' />
    }

    return (
      <form>
        Description:  <input
          value={ this.state.todoInput }
          onInput={ this.handleOnInput.bind(this) }/>
        <p>Due Date</p>
        <button onClick={this.handleOnSubmit.bind(this)}>
          Create
        </button>
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