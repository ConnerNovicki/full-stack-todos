import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Flex, Box } from 'reflexbox';
import { FILTER_TYPES } from '../actions';

class ShowTodosView extends Component {
  render() {
    return (     
      <Flex align='center'>
        <Box><button onClick={() => this.props.setTodosFilter(FILTER_TYPES.ALL)}>All</button></Box>
        <Box><button onClick={() => this.props.setTodosFilter(FILTER_TYPES.COMPLETED)}>Completed</button></Box>
        <Box><button onClick={() => this.props.setTodosFilter(FILTER_TYPES.INCOMPLETE)}>Incomplete</button></Box>
      </Flex>
    );
  }
}

ShowTodosView.propTypes = {
  setTodosFilter: PropTypes.func.isRequired,
  isEditModeActive: PropTypes.bool.isRequired,
}

export default ShowTodosView;