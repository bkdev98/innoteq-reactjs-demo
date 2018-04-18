import React, { Component } from 'react';

class Form extends Component {
  state = { text: '' }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <form onSubmit={(e) => {
        this.props.handleSubmit(e, this.state.text);
        this.setState({ text: '' });
      }}>
        <input
          onChange={e => this.handleChange(e)}
          value={this.state.text}
          placeholder='What needs to be done?'
        />
        <button>
          Add
        </button>
      </form>
    );
  }
}

export default Form;