import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const defaultState = {
  todoInput: '',
}

class CreateTodoView extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleOnInput(text) {
    this.setState({ todoInput: text.target.value })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.createTodo(this.state.todoInput);
    this.setState({ todoInput: '' })
  }

  render() {
    return (
      <form>
        <input
          value={ this.state.todoInput }
          onInput={ this.handleOnInput.bind(this) }/>
        <button onClick={this.handleOnSubmit.bind(this)}>
        Create
        </button>
        <h1>{this.props.isCreatingTodo ? 'Creating' : 'Done'}</h1>
      </form>
    );
  }
}

CreateTodoView.propTypes = {
  isCreatingTodo: PropTypes.bool.isRequired
}


export default CreateTodoView;