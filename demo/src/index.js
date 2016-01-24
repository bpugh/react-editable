import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

let Demo = React.createClass({
  getInitialState: function() {
    return {
      value: 'Hello world!'
    };
  },
  handleSubmit(val) {
    this.setState({value: val})
  },
  render() {
    return <div>
      <h1>react-inline-editable Demo</h1>
      <Component onSubmit={this.handleSubmit} value={this.state.value}/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
