import React, { Component } from 'react'

export default class App extends Component {
  state = {
    value : ''
  };
  handleChange = (e) => {
    this.setState({value: e.target.value.toUpperCase().substr(0,10)});
  }
  render() {
    return (
      <div>
        <h2>Controlled by React</h2>
        <input type='text' value={this.state.value} onChange={this.handleChange}/>
      </div>
    )
  }
}

