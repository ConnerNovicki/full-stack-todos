import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const defaultState = {

}

class ShowTodosView extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  renderTodos() {
    console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <li key={todo.id}>
        {todo.name}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <ol>
          { this.renderTodos() }
        </ol>
      </div>
    );
  }
}

ShowTodosView.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
}


export default ShowTodosView;