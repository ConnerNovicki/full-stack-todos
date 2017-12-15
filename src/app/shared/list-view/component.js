import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Flex, Box } from 'reflexbox';

const styles = {
  listItem: {
    'font-size': 30,
  }
}

const defaultState = { }

class ListView extends Component {
  render() {
    const { items, renderMethod } = this.props;
    return (
      <Flex column align='center' w={1}>
        { items.map(renderMethod) }
      </Flex>
    );
  }
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
  renderMethod: PropTypes.func
}


export default ListView;