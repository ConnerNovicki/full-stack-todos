import React, { Component } from 'react'

export default class TodoView extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        hello
        hi
      </div>
    )
  }
}
