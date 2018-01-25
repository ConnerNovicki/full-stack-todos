import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoView from './views/component';
import CreateTodoView from './views/create-todo-view';
import { getTodos } from './reducers/todo.actions';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getTodos();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Todos</h1>
          <Switch>
            <Route exact path='/' component={TodoView} />
            <Route path='/create' component={CreateTodoView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => {
    dispatch(getTodos());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
