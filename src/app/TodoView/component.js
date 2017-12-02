import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class TodoView extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.createTodo('some new todo')}
        >Create</button>
      <h1>{this.props.isCreatingTodo ? 'Creating' : 'Done'}</h1>
      </div>
    )
  }
}

TodoView.propTypes = {
  isCreatingTodo: PropTypes.bool.isRequired
}


export default TodoView;